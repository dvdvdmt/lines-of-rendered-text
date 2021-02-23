import {iteratorOverLiElements} from './iterator-over-li-elements'
import {rootRelativeRectOf} from './relative-rect'
import {getLineHeightByRendering} from './get-line-height-by-rendering'

export function listItemMarkers(root: HTMLElement): IListItemMarker[] {
  let result = []
  const iter = iteratorOverLiElements(root)
  let nextNode: HTMLLIElement | null
  while ((nextNode = iter.nextNode())) {
    result.push(listItemMarkerOf(nextNode, root))
  }
  return result
}

function listItemMarkerOf(
  node: HTMLLIElement,
  root: HTMLElement
): IListItemMarker {
  const relativeRect = rootRelativeRectOf(node.getBoundingClientRect(), root)
  const markerStyles = window.getComputedStyle(node, '::marker')
  const lineHeight =
    Number.parseInt(markerStyles.height, 10) || getLineHeightByRendering(node)
  const width = Number.parseInt(markerStyles.width, 10)
  const fontSize = Number.parseInt(markerStyles.fontSize, 10)
  const bullet = '•'
  const x = relativeRect.x - 1.1 * lineHeight
  return {
    text: bullet,
    y: relativeRect.y,
    x,
    width: width,
    height: lineHeight,
    lineHeight,
    fontSize,
  }
}

export interface IListItemMarker {
  text: string
  x: number
  y: number
  width: number
  height: number
  lineHeight: number
  fontSize: number
}
