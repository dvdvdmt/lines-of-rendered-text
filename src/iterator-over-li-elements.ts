export function iteratorOverLiElements(root: Node) {
  const iter = document.createNodeIterator(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode(node: Node): number {
      if (node.nodeName === 'LI') {
        return NodeFilter.FILTER_ACCEPT
      }
      return NodeFilter.FILTER_SKIP
    },
  })

  return {
    ...iter,
    nextNode(): HTMLLIElement | null {
      return iter.nextNode() as HTMLLIElement | null
    },
  }
}
