import {iteratorOverTextsAndBrElements} from './iterator-over-texts-and-br-elements'
import {IRect, rootRelativeRectOf} from './relative-rect'
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
  x: number
  y: number
  width: number
  height: number
  bottom: number
}
function renderedTextLines(node: Text, root: HTMLElement): ILine[] {
  let text = node.textContent || ''
  let lineStartIdx = 0
  let testCharIdx = 1
  const range = document.createRange()
  range.setStart(node, lineStartIdx)
  let lineRect = range.getBoundingClientRect()
  const result: ReturnType<typeof renderedTextLines> = []
  while (testCharIdx <= text.length) {
    range.setEnd(node, testCharIdx)
    let testRect = range.getBoundingClientRect()
    const isLineBreak = testRect.bottom > lineRect.bottom
    if (isLineBreak) {
      const lineEndIdx = testCharIdx - 1
      result.push(
        ...splitToLines(text.substring(lineStartIdx, lineEndIdx)).map(
          toLine(rootRelativeRectOf(lineRect, root))
        )
      )
      lineStartIdx = lineEndIdx
      range.setStart(node, lineStartIdx)
      lineRect = range.getBoundingClientRect()
    }
    testCharIdx += 1
  }
  result.push(
    ...splitToLines(text.substring(lineStartIdx)).map(
      toLine(rootRelativeRectOf(lineRect, root))
    )
  )
  return result
}

function splitToLines(text: string): string[] {
  const lines = text.split('\n')
  if (lines.length === 1) {
    return lines
  }
  let omitNextEmptyLine = true
  return lines.filter((line) => {
    if (!line && omitNextEmptyLine) {
      omitNextEmptyLine = false
      return false
    }
    if (line) {
      omitNextEmptyLine = true
    }
    return true
  })
}

function toLine(rect: IRect): (text: string, lineNumber: number) => ILine {
  return (line: string, lineNumber: number): ILine => {
    return {
      text: line,
      x: rect.x,
      y: rect.y + lineNumber * rect.height,
      width: rect.width,
      height: rect.height,
      bottom: rect.bottom + lineNumber * rect.height,
    }
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
