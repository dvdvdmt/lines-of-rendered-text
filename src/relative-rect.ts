export interface IRect extends Omit<DOMRect, 'toJSON'> {}

export function rootRelativeRectOf(node: IRect, root: HTMLElement): IRect {
  const rootRect = root.getBoundingClientRect()
  const y = node.y - rootRect.y + root.scrollTop
  const x = node.x - rootRect.x + root.scrollLeft
  return {
    x,
    y,
    left: x,
    right: x + node.width,
    top: y,
    bottom: y + node.height,
    width: node.width,
    height: node.height,
  }
}
