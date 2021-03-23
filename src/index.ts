import {textWithRenderedLineBreaks} from './text-with-rendered-line-breaks'
import {PIXI} from './pixi.dev'
import {textBlocks} from './text-blocks'
import {listItemMarkers} from './list-items'
import {ITextBlock} from './text-block'
import {getPointInLocalCoords, IPoint} from './get-point-in-local-coords'

window.onload = () => {
  Array.from(document.querySelectorAll<HTMLElement>('.example')).map(
    initExample
  )
}

function initExample($example: HTMLElement) {
  const $text = $example.querySelector<HTMLElement>('.text')!
  const $plainTextOut = $example.querySelector<HTMLElement>(
    '.output--plain-text'
  )!
  const $pixiOut = $example.querySelector<HTMLElement>('.output--pixi')!
  $text.oninput = updateOutput
  updateOutput()

  function updateOutput() {
    renderPlainText()
    renderRichText()
  }

  function renderPlainText() {
    const text = textWithRenderedLineBreaks($text)
    console.log(`[text]`, text)
    $plainTextOut.innerHTML = text
  }

  function renderRichText() {
    const renderer = createRenderer(
      $pixiOut,
      $text.scrollWidth,
      $text.scrollHeight
    )
    const {stage, onClick} = createStage($text)
    renderer.view.addEventListener('click', (e) => {
      const point = getPointInLocalCoords(renderer.view, e)
      onClick(point)
    })
    renderer.render(stage)
  }
}

function createLiveText(block: ITextBlock) {
  let result = new PIXI.LiveText(block.text, {
    font: 'monospace',
    size: block.fontSize,
    bold: block.isBold,
    italic: block.isItalic,
    underline: block.isUnderline,
    lineHeight: block.height,
    color: block.color,
    direction: block.direction, //TODO: Direction 'rtl' doesn't render text properly, need to find out why.
  })
  result.x = block.x
  result.y = block.y
  return result
}

function createStage(
  $text: HTMLElement
): {stage: PIXI.Stage; onClick: (point: IPoint) => void} {
  const stage = new PIXI.Stage(0xffffff)
  const texts = textBlocks($text)
  const rectToUrl = new Map<PIXI.Rectangle, string>()
  texts.forEach((block) => {
    const text = createLiveText(block)
    stage.addChild(text)
    if (block.link) {
      rectToUrl.set(
        new PIXI.Rectangle(block.x, block.y, block.width, block.height),
        block.link
      )
    }
  })
  const listMarkers = listItemMarkers($text)
  listMarkers.forEach((marker) => {
    const text = new PIXI.LiveText(marker.text, {
      font: 'monospace',
      size: marker.fontSize,
      lineHeight: marker.lineHeight,
    })
    text.x = marker.x
    text.y = marker.y
    stage.addChild(text)
  })
  return {
    stage,
    onClick(point) {
      const clicked = Array.from(rectToUrl.keys()).find((rect) =>
        rect.contains(point.x, point.y)
      )
      if (clicked) {
        window.open(rectToUrl.get(clicked), '_blank')
      }
    },
  }
}

function createRenderer($pixiOut: HTMLElement, width: number, height: number) {
  $pixiOut.textContent = ''
  const renderer = new PIXI.CanvasRenderer(width, height)
  $pixiOut.appendChild(renderer.view)
  return renderer
}
