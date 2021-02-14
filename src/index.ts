import {getTextWithRenderedLineBreaks} from './get-text-with-rendered-line-breaks'

window.onload = () => {
  Array.from(document.querySelectorAll<HTMLElement>('.example')).map(
    initExample
  )
}

function initExample($example: HTMLElement) {
  const $text = $example.querySelector<HTMLElement>('.text')!
  const $output = $example.querySelector<HTMLElement>('.output')!
  $text.oninput = updateOutput
  updateOutput()

  function updateOutput() {
    const text = getTextWithRenderedLineBreaks($text)
    console.log(`[text]`, text)
    $output.innerText = text
  }
}
