export interface ITextBlock {
  text: string
  x: number
  y: number
  bottom: number
  lineHeight: number
  fontSize: number
  color: string
  direction: string
  isUnderline: boolean
  isBold: boolean
  isItalic: boolean
}

const defaultTextBlock = {
  text: '',
  bottom: 0,
  x: 0,
  y: 0,
  isBold: false,
  isItalic: false,
  isUnderline: false,
  fontSize: 0,
  lineHeight: 0,
  color: 'black',
  direction: 'ltr',
}

export function createTextBlock(options?: Partial<ITextBlock>): ITextBlock {
  return {...defaultTextBlock, ...options}
}
