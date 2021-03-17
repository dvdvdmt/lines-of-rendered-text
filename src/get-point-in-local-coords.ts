export interface IPoint {
  x: number
  y: number
}

export function getPointInLocalCoords(
  canvas: HTMLElement,
  event: MouseEvent
): IPoint {
  const rect = canvas.getBoundingClientRect()
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  }
}
