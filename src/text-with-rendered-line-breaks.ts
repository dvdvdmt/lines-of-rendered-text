import {NEXTLINE_DIFFERENCE, textBlocks} from './text-blocks'
import {ITextBlock} from './text-block'

export function textWithRenderedLineBreaks(node: HTMLElement): string {
  const lines = linesOfNodeTree(node)
  return lines.join('\n')
}

function linesOfNodeTree(root: HTMLElement) {
  const blocks = textBlocks(root)
  return textLinesOf(blocks)
}

export function textLinesOf(blocks: ITextBlock[]): string[] {
  const result: string[] = []
  blocks.forEach((block, i) => {
    if (i === 0) {
      result.push(block.text)
      return
    }
    const prevBlock = blocks[i - 1]
    const lastLineIdx = result.length - 1
    if (Math.abs(prevBlock.bottom - block.bottom) < NEXTLINE_DIFFERENCE) {
      result[lastLineIdx] = result[lastLineIdx] + block.text
    } else {
      result.push(block.text)
    }
  })
  return result
}
