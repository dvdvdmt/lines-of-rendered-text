export function getLineHeightByRendering(el: HTMLElement): number {
  const temp = document.createElement(el.nodeName)
  temp.setAttribute(
    'style',
    'margin:0; padding:0; ' +
      'font-family:' +
      (el.style.fontFamily || 'inherit') +
      '; ' +
      'font-size:' +
      (el.style.fontSize || 'inherit')
  )
  temp.innerHTML = 'A'

  if (el.parentNode) {
    el.parentNode.appendChild(temp)
    const result = temp.clientHeight
    el.parentNode.removeChild(temp)
    return result
  }

  return 0
}
