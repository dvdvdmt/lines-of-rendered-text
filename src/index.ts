import {textWithRenderedLineBreaks} from './text-with-rendered-line-breaks'
import {PIXI} from './pixi.dev'
import {textBlocks} from './text-blocks'

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
      $pixiOut.textContent = ''
      const blocks = textBlocks($text)
      const renderer = new PIXI.CanvasRenderer(
        $text.scrollWidth,
        $text.scrollHeight
      )
      $pixiOut.appendChild(renderer.view)
      const stage = new PIXI.Stage(0xffffff)
      blocks.forEach((block) => {
        const text = new PIXI.LiveText(block.text, {
          font: 'monospace',
          size: 13,
        })
        text.x = block.x
        text.y = block.y
        stage.addChild(text)
      })
      renderer.render(stage)
    }
  }
}
