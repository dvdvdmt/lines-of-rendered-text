import {iteratorOverTextsAndBrElements} from './iterator-over-texts-and-br-elements'
import {IRect, rootRelativeRectOf} from './relative-rect'

export function textBlocks(root: HTMLElement): ITextBlock[] {
  const result = []
  const iter = iteratorOverTextsAndBrElements(root)
  let nextNode
  while ((nextNode = iter.nextNode())) {
    if (nextNode instanceof Text) {
      result.push(...renderedTextBlocks(nextNode, root))
    } else if (nextNode instanceof HTMLBRElement) {
      result.push(brTextBlockOf(nextNode, root))
    }
  }
  return result
}

function renderedTextBlocks(node: Text, root: HTMLElement): ITextBlock[] {
  const relativeRect = rootRelativeRectOf(rectOfText(node), root)
  const styles = getStylesOf(node, root)
  const lines = renderedTextLines(node)
  // DOMRect of a text node that contains new lines at the start has incorrect Y coordinate,
  // because it doesn't take new lines heights into account. We can overcome this by rewinding lineNumber position.
  let lineNumber = 0
  lineNumber -= lines.length > 1 ? calcEmptyLinesFromStart(lines) : 0
  const lineHeight = lineHeightOfText(node)
  return lines.map((line) => {
    const result = {
      text: line,
      x: relativeRect.x,
      y: relativeRect.y + lineNumber * lineHeight,
      bottom: relativeRect.y + lineHeight + lineNumber * lineHeight,
      lineHeight,
      fontSize: Number.parseInt(styles.fontSize, 10),
      color: styles.color,
      isBold: Number.parseInt(styles.fontWeight, 10) === 700,
      isItalic: styles.fontStyle === 'italic',
      isUnderline: styles.textDecorationLine === 'underline',
      direction: styles.direction,
    }
    lineNumber += 1
    return result
  })
}

function renderedTextLines(node: Text): string[] {
  let text = node.textContent || ''
  let prevCharIdx = 0
  let nextCharIdx = 1
  let lastFound = 0
  const range = document.createRange()
  range.setStart(node, 0)
  let prevRect = range.getBoundingClientRect()
  const result = []
  while (nextCharIdx <= text.length) {
    range.setEnd(node, nextCharIdx)
    let nextRect = range.getBoundingClientRect()
    const isLineBreak = nextRect.bottom > prevRect.bottom
    if (isLineBreak) {
      result.push(
        ...linesOfText(text.substr(lastFound, prevCharIdx - lastFound))
      )
      prevRect = nextRect
      lastFound = prevCharIdx
    }
    prevCharIdx = nextCharIdx
    nextCharIdx += 1
  }
  result.push(...linesOfText(text.substr(lastFound)))
  return result
}

// ['', '', ''] -> ['', '']
// ['abc', '', ''] -> ['abc', '']
// ['abc', '', '', '', 'abc', ''] -> ['abc', '', '', 'abc']
function linesOfText(text: string): string[] {
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

function lineHeightOfText(node: Text): number {
  const range = document.createRange()
  range.setStart(node, 0)
  return range.getBoundingClientRect().height
}

function getStylesOf(node: Text, fallback: HTMLElement): CSSStyleDeclaration {
  if (node.parentNode instanceof Element) {
    return window.getComputedStyle(node.parentNode)
  }
  return window.getComputedStyle(fallback)
}

function brTextBlockOf(node: HTMLBRElement, root: HTMLElement): ITextBlock {
  const relativeRect = rootRelativeRectOf(node.getBoundingClientRect(), root)
  return {
    text: '',
    bottom: relativeRect.bottom,
    x: relativeRect.x,
    y: relativeRect.y,
    isBold: false,
    isItalic: false,
    isUnderline: false,
    fontSize: 0,
    lineHeight: 0,
    color: 'black',
    direction: 'ltr',
  }
}

function rectOfText(node: Text): IRect {
  const range = document.createRange()
  range.setStart(node, 0)
  if (node.textContent) {
    range.setEnd(node, node.textContent.length - 1)
  }
  return range.getBoundingClientRect()
}

export interface ITextBlock {
  text: string
  x: number
  y: number
  bottom: number
  lineHeight: number
  fontSize: number
  color: string
  direction: string
  isUnderline: boolean
  isBold: boolean
  isItalic: boolean
}

function calcEmptyLinesFromStart(lines: string[]): number {
  let result = 0
  for (let line of lines) {
    if (line === '') {
      result += 1
    } else {
      break
    }
  }
  return result
}
