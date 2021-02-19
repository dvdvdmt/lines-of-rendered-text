import {textWithRenderedLineBreaks} from './text-with-rendered-line-breaks'
import {PIXI} from './pixi.dev'

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
    if ($pixiOut) {
      const app = new PIXI.CanvasRenderer(256, 256)
      $pixiOut.textContent = ''
      $pixiOut.appendChild(app.view)
    }
  }
}
