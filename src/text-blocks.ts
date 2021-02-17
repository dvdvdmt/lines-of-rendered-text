import {iteratorOverTextsAndBrElements} from './iterator-over-texts-and-br-elements'

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
  const relativeRect = rootRelativeRectOf(
    rectOfText(node),
    root.getBoundingClientRect()
  )
  const styles = getStylesOf(node, root)
  const lines = renderedTextLines(node)
  const emptyLinesFromStart = calcEmptyLinesFromStart(lines)
  const emptyLinesFromEnd = calcEmptyLinesFromEnd(lines)
  let lineNumber = 0
  const lineHeight = lineHeightFrom(
    relativeRect.height,
    lines.length,
    emptyLinesFromStart,
    emptyLinesFromEnd
  )
  // DOMRect of a text node that contains new lines at the start has incorrect Y coordinate,
  // because it doesn't take new lines heights into account. We can overcome this by rewinding lineNumber position.
  lineNumber -= lines.length > 1 ? emptyLinesFromStart : 0
  return lines.map((line) => {
    const result = {
      text: line,
      bottom: relativeRect.y + lineHeight + lineNumber * lineHeight,
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

function lineHeightFrom(
  rectHeight: number,
  linesTotal: number,
  startEmptyLines: number,
  endEmptyLines: number
): number {
  let divider = linesTotal - startEmptyLines - endEmptyLines
  if (divider < 1) {
    divider = 1
  }
  return rectHeight / divider
}

function getStylesOf(node: Text, fallback: HTMLElement): CSSStyleDeclaration {
  if (node.parentNode instanceof Element) {
    return window.getComputedStyle(node.parentNode)
  }
  return window.getComputedStyle(fallback)
}

function brTextBlockOf(node: HTMLBRElement, root: HTMLElement): ITextBlock {
  const relativeRect = rootRelativeRectOf(
    node.getBoundingClientRect(),
    root.getBoundingClientRect()
  )
  return {text: '', bottom: relativeRect.bottom}
}

function rectOfText(node: Text): DOMRect {
  const range = document.createRange()
  range.setStart(node, 0)
  if (node.textContent) {
    range.setEnd(node, node.textContent.length)
  }
  return range.getBoundingClientRect()
}

interface IRelativeRect extends Omit<DOMRect, 'toJSON'> {}

function rootRelativeRectOf(node: DOMRect, root: DOMRect): IRelativeRect {
  return {
    height: node.height,
    width: node.width,
    x: node.x - root.x,
    y: node.y - root.y,
    bottom: node.y - root.y + root.height,
    top: node.y - root.y,
    left: node.x - root.x,
    right: node.x - root.x + node.width,
  }
}

export interface ITextBlock {
  text: string
  bottom: number
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

function calcEmptyLinesFromEnd(lines: string[]): number {
  let result = 0
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i] === '') {
      result += 1
    } else {
      break
    }
  }
  return result
}