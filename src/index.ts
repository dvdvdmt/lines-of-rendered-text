import {textWithRenderedLineBreaks} from './text-with-rendered-line-breaks'
import {PIXI} from './pixi.dev'
import {textBlocks} from './text-blocks'
import {listItemMarkers} from './list-items'

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
    const stage = createStage($text)
    renderer.render(stage)
  }
}

function createStage($text: HTMLElement): PIXI.Stage {
  const stage = new PIXI.Stage(0xffffff)
  const texts = textBlocks($text)
  texts.forEach((block) => {
    const text = new PIXI.LiveText(block.text, {
      font: 'monospace',
      size: block.fontSize,
      bold: block.isBold,
      italic: block.isItalic,
      underline: block.isUnderline,
      lineHeight: block.lineHeight,
      color: block.color,
      direction: block.direction, //TODO: Direction 'rtl' doesn't render text properly, need to find out why.
    })
    text.x = block.x
    text.y = block.y
    stage.addChild(text)
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
  return stage
}

function createRenderer($pixiOut: HTMLElement, width: number, height: number) {
  $pixiOut.textContent = ''
  const renderer = new PIXI.CanvasRenderer(width, height)
  $pixiOut.appendChild(renderer.view)
  return renderer
}
