import {iteratorOverTextsAndBrElements} from './iterator-over-texts-and-br-elements'
import {IRect, rectRelativeTo, rootRelativeRectOf} from './relative-rect'
import {createTextBlock, ITextBlock} from './text-block'
import {enrichBlocksWithHyperlinkOfNearestParent} from './enrich-blocks-with-hyperlink-of-nearest-parent'

export function textBlocks(root: HTMLElement): ITextBlock[] {
  const result = []
  const iter = iteratorOverTextsAndBrElements(root)
  let node
  while ((node = iter.nextNode())) {
    const blocks = []
    if (node instanceof Text) {
      blocks.push(...renderedTextBlocks(node, root))
    } else if (node instanceof HTMLBRElement) {
      blocks.push(brTextBlockOf(node, root))
    }
    enrichBlocksWithHyperlinkOfNearestParent(node, root, blocks)
    result.push(...blocks)
  }
  return result
}

function renderedTextBlocks(node: Text, root: HTMLElement): ITextBlock[] {
  const styles = getStylesOf(node, root)
  const lines = renderedTextLines(node, root)
  // DOMRect of a text node that contains new lines at the start has incorrect Y coordinate,
  // because it doesn't take new lines heights into account. We can overcome this by rewinding lineNumber position.
  return lines.map((line) => {
    const result = createTextBlock({
      ...line,
      fontSize: Number.parseInt(styles.fontSize, 10),
      color: styles.color,
      isBold: Number.parseInt(styles.fontWeight, 10) === 700,
      isItalic: styles.fontStyle === 'italic',
      isUnderline: styles.textDecorationLine === 'underline',
      direction: styles.direction,
    })
    return result
  })
}

interface ILine {
  text: string
  renderedText: string
  x: number
  y: number
  width: number
  height: number
  bottom: number
}

interface IChar {
  text: string
  rect: IRect
}

function renderedTextLines(node: Text, root: HTMLElement): ILine[] {
  let text = node.textContent || ''
  const selectRect = rectIn(node)
  const rootRelativeRect = rectRelativeTo(root)
  const chars = Array.from(text).map<IChar>((char, i) => {
    return {
      text: char === '\n' ? '' : char,
      rect: rootRelativeRect(selectRect(i, i + 1)),
    }
  })
  let lineStartIdx = 0
  let nextCharIdx = 1
  const result: ReturnType<typeof renderedTextLines> = []
  while (nextCharIdx < chars.length) {
    let prevRect = chars[nextCharIdx - 1].rect
    const nextRect = chars[nextCharIdx].rect
    const isLineBreak = nextRect.bottom > prevRect.bottom
    if (isLineBreak) {
      result.push(
        charsToLine(
          chars.slice(lineStartIdx, nextCharIdx),
          rootRelativeRect(selectRect(lineStartIdx, nextCharIdx))
        )
      )
      lineStartIdx = nextCharIdx
    }
    nextCharIdx += 1
  }
  result.push(
    charsToLine(
      chars.slice(lineStartIdx),
      rootRelativeRect(selectRect(lineStartIdx, chars.length))
    )
  )
  return result
}

const rtlCharRegExp = new RegExp('^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]$')
function charsToLine(chars: IChar[], lineRect: IRect): ILine {
  const text = chars.reduce((acc, char) => acc + char.text, '')
  chars.sort((a, b) => {
    const aIsRtlChar = rtlCharRegExp.test(a.text)
    const bIsRtlChar = rtlCharRegExp.test(b.text)
    if (aIsRtlChar && bIsRtlChar) {
      if (a.rect.x < b.rect.x) {
        return 1
      } else if (a.rect.x === b.rect.x) {
        return 0
      }
      return -1
    }

    if (a.rect.x < b.rect.x) {
      return -1
    } else if (a.rect.x === b.rect.x) {
      return 0
    }
    return 1
  })
  const renderedText = chars.reduce((acc, char) => acc + char.text, '')
  return {
    text,
    renderedText,
    x: lineRect.x,
    y: lineRect.y,
    width: lineRect.width,
    height: lineRect.height,
    bottom: lineRect.bottom,
  }
}

function getStylesOf(node: Text, fallback: HTMLElement): CSSStyleDeclaration {
  if (node.parentNode instanceof Element) {
    return window.getComputedStyle(node.parentNode)
  }
  return window.getComputedStyle(fallback)
}

function brTextBlockOf(node: HTMLBRElement, root: HTMLElement): ITextBlock {
  const relativeRect = rootRelativeRectOf(node.getBoundingClientRect(), root)
  return createTextBlock({
    bottom: relativeRect.bottom,
    x: relativeRect.x,
    y: relativeRect.y,
  })
}

function rectIn(node: Text) {
  const range = document.createRange()
  return function selectRect(start: number, end: number): IRect {
    range.setStart(node, start)
    range.setEnd(node, end)
    return range.getBoundingClientRect()
  }
}
