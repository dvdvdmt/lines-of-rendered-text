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
  const getRectInNode = getRectIn(node)
  let lineRect = getRectInNode(lineStartIdx, lineStartIdx)
  const result: ReturnType<typeof renderedTextLines> = []
  while (testCharIdx <= text.length) {
    const testRect = getRectInNode(lineStartIdx, testCharIdx)
    const isLineBreak = testRect.bottom > lineRect.bottom
    if (isLineBreak) {
      const lineEndIdx = testCharIdx - 1
      result.push(
        ...splitToLines(text.substring(lineStartIdx, lineEndIdx)).map(
          toLine(
            rootRelativeRectOf(getRectInNode(lineStartIdx, lineEndIdx), root)
          )
        )
      )
      lineStartIdx = lineEndIdx
      lineRect = getRectInNode(lineStartIdx, lineStartIdx)
    }
    testCharIdx += 1
  }
  result.push(
    ...splitToLines(text.substring(lineStartIdx)).map(
      toLine(rootRelativeRectOf(getRectInNode(lineStartIdx, text.length), root))
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

function getRectIn(node: Text) {
  const range = document.createRange()
  return function getRect(start: number, end: number) {
    range.setStart(node, start)
    range.setEnd(node, end)
    return range.getBoundingClientRect()
  }
}
