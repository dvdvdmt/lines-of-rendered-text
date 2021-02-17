export function iteratorOverTextsAndBrElements(root: Node) {
  const iter = document.createNodeIterator(
    root,
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

  return {
    ...iter,
    nextNode(): Text | HTMLBRElement | null {
      return iter.nextNode() as Text | HTMLBRElement | null
    },
  }
}
