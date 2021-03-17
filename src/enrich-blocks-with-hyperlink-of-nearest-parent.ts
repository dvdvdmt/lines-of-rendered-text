import {ITextBlock} from './text-block'

function nearestHyperlink(leaf: Text | HTMLBRElement, root: Node): string {
  let node: Node | null = leaf
  while ((node = node.parentNode) && node !== root) {
    if (node instanceof HTMLAnchorElement) {
      return node.href
    }
  }
  return ''
}

export function enrichBlocksWithHyperlinkOfNearestParent(
  node: Text | HTMLBRElement,
  root: Node,
  blocks: ITextBlock[]
): void {
  const link = nearestHyperlink(node, root)
  if (link) {
    blocks.forEach((block) => (block.link = link))
  }
}
