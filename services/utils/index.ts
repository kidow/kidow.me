import { EventListener } from 'services'

export const toast = {
  success: (message: string) =>
    EventListener.emit<NToast.Emit>('toast', { message, type: 'success' }),
  info: (message: string) =>
    EventListener.emit<NToast.Emit>('toast', { message, type: 'info' }),
  warn: (message: string) =>
    EventListener.emit<NToast.Emit>('toast', { message, type: 'warn' }),
  error: (message: string) =>
    EventListener.emit<NToast.Emit>('toast', { message, type: 'error' })
}

export const hexToRgb = (hex: string) => {
  hex = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (_, r, g, b) => r + r + g + g + b + b
  )

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16)
      }
    : null
}

export const rgbToHex = (red: number, green: number, blue: number) => {
  return (
    '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
  )
}

export const twoDigitsNumber = (digit: number): string =>
  digit < 10 ? `0${digit}` : String(digit)
