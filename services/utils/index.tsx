import { useState } from 'react'
import { EventListener } from 'services'

class Toast {
  private emit(message: string, type: NToast.Type) {
    EventListener.emit<NToast.Emit>('toast', { message, type })
  }
  success(message: string) {
    this.emit(message, 'success')
  }
  info(message: string) {
    this.emit(message, 'info')
  }
  warn(message: string) {
    this.emit(message, 'warn')
  }
  error(message: string) {
    this.emit(message, 'error')
  }
}

export const toast = new Toast()

export const hexToRgb = (hex: string) => {
  hex = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (_, r, g, b) => r + r + g + g + b + b
  )

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
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

export const priceFormat = (value?: string | number): string => {
  if (!value) return '0'
  else if (typeof value === 'string') return Number(value).toLocaleString()
  else if (typeof value === 'number') return value.toLocaleString()
  else return '0'
}

export const backdrop = (open: boolean) => EventListener.emit('backdrop', open)

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (err) => reject(err)
  })
}

export function confirm(message: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleConfirm = () => {
      setIsOpen(false)
      resolve(true)
    }

    const handleCancel = () => {
      setIsOpen(false)
      resolve(false)
    }

    if (!isOpen) return null
    return (
      <div
        className="fixed inset-0 z-30 overflow-y-auto"
        aria-labelledby="confirm-modal"
        aria-modal="true"
        role="dialog"
      >
        <div className="flex min-h-screen items-center justify-center p-0 text-center md:block">
          <div
            className="fixed inset-0 bg-black/30 transition-opacity"
            aria-hidden="true"
          />
          <div className="mt-8 inline-block w-[450px] transform overflow-hidden rounded text-left align-top shadow-xl transition-all">
            <div className="space-y-4 bg-zinc-800 px-5 py-4 text-neutral-50">
              <div>{message}</div>
              <div className="flex justify-end gap-2 text-xs font-medium">
                <button
                  onClick={() => handleCancel()}
                  className="rounded border border-zinc-700 px-5 py-1.5 text-blue-300 duration-150 hover:bg-blue-500/5"
                >
                  취소
                </button>
                <button
                  onClick={() => handleConfirm()}
                  className="rounded bg-blue-300 px-5 py-1.5 text-black duration-150 hover:opacity-90"
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
}
