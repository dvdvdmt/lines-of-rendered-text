export interface IRect extends Omit<DOMRect, 'toJSON'> {}

export function rootRelativeRectOf(node: IRect, root: HTMLElement): IRect {
  const rootRect = root.getBoundingClientRect()
  const y = node.y - rootRect.y + root.scrollTop
  const x = node.x - rootRect.x + root.scrollLeft
  return {
    x,
    y,
    left: x,
    right: node.right - x,
    top: y,
    bottom: y + node.height,
    width: node.width,
    height: node.height,
  }
}

export function rectRelativeTo(root: HTMLElement) {
  const rootRect = root.getBoundingClientRect()
  const rootX = rootRect.x - root.scrollLeft
  const rootY = rootRect.y - root.scrollTop

  return function relativeRect(node: IRect) {
    const x = node.x - rootX
    const y = node.y - rootY
    return {
      x,
      y,
      left: x,
      right: node.right - x,
      top: y,
      bottom: y + node.height,
      width: node.width,
      height: node.height,
    }
  }
}
