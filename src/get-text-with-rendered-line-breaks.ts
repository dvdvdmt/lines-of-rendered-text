// TODO:
//  - Test rendering outside of viewport
//  - Test getting lines from text with markup (<br>, <b>, <ul>, etc)

export function getTextWithRenderedLineBreaks(node: HTMLElement): string {
  const lines = linesOfNodeTree(node)
  console.log(`[lines]`, lines)
  return lines.join('\n')
}

function linesOfNodeTree(root: HTMLElement) {
  const textNodes = textNodesFor(root)
  console.log(
    `[textNodes.map()]`,
    textNodes.map((n) => n.textContent)
  )
  const nodesLines = textNodes.map(linesOfNode)
  console.log(`[nodesLines]`, nodesLines)
  return connectLinesOfAdjacentTextBlocksAndFlatten(nodesLines)
}

function textNodesFor(node: HTMLElement): Node[] {
  const result = []
  const iter = document.createNodeIterator(
    node,
    NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
    {
      acceptNode(node: Node): number {
        if (node.nodeType === Node.ELEMENT_NODE && node.nodeName !== 'BR') {
          return NodeFilter.FILTER_SKIP
        }
        return NodeFilter.FILTER_ACCEPT
      },
    }
  )
  let nextNode = iter.nextNode()
  while (nextNode) {
    result.push(nextNode)
    nextNode = iter.nextNode()
  }
  return result
}

interface ITextBlock {
  lines: string[]
  firstLineBottom: number
  lastLineBottom: number
}

function linesOfNode(node: Node): ITextBlock {
  let text = node.textContent || ''
  let prevCharIdx = 0
  let nextCharIdx = 1
  let lastFound = 0
  let nextBottom = 0
  const range = document.createRange()
  range.setStart(node, 0)
  let prevBottom = range.getBoundingClientRect().bottom
  const result: ITextBlock = {
    lines: [],
    firstLineBottom: prevBottom,
    lastLineBottom: prevBottom,
  }
  while (nextCharIdx <= text.length) {
    range.setEnd(node, nextCharIdx)
    nextBottom = range.getBoundingClientRect().bottom
    const isLineBreak = nextBottom > prevBottom
    if (isLineBreak) {
      result.lastLineBottom = nextBottom
      console.log(`[str.charAt(prevChar)]`, text.charAt(prevCharIdx))
      console.log(`[str.charAt(nextChar)]`, text.charAt(nextCharIdx))
      result.lines.push(
        ...linesOfText(text.substr(lastFound, prevCharIdx - lastFound))
      )
      console.log(`[current]`, nextCharIdx)
      console.log(`[lastFound]`, lastFound)
      prevBottom = nextBottom
      lastFound = prevCharIdx
    }
    prevCharIdx = nextCharIdx
    nextCharIdx += 1
  }
  // push the last line
  console.log(`[lastFound]`, lastFound)
  result.lines.push(...linesOfText(text.substr(lastFound)))
  return result
}

function connectLinesOfAdjacentTextBlocksAndFlatten(
  texts: ITextBlock[]
): string[] {
  const result: string[] = []
  texts.forEach((text, i) => {
    if (text.lines.length === 0) {
      return
    }
    if (i === 0) {
      result.push(...text.lines)
      return
    }
    const prevText = texts[i - 1]
    const [firstLine, ...restLines] = text.lines
    const lastLineIdx = result.length - 1
    if (prevText.lastLineBottom === text.firstLineBottom) {
      result[lastLineIdx] = result[lastLineIdx] + firstLine
      result.push(...restLines)
    } else {
      result.push(...text.lines)
    }
  })
  return result
}

// ['', '', ''] -> ['', '']
// ['abc', '', ''] -> ['abc', '']
// ['abc', '', '', '', 'abc', ''] -> ['abc', '', '', 'abc']
function linesOfText(text: string): string[] {
  const lines = text.split('\n')
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