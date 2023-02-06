import { useEffect, useRef } from 'react'
import type { FC } from 'react'
import Quill from 'quill'
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html'
import { Icons } from 'services'
import { useRouter } from 'next/router'

const icons = Quill.import('ui/icons')
icons['header']['1'] = Icons.Heading1
icons['header']['2'] = Icons.Heading2
icons['header']['3'] = Icons.Heading3
icons['header']['4'] = Icons.Heading4
icons['bold'] = Icons.Bold
icons['italic'] = Icons.Italic
icons['underline'] = Icons.Underline
icons['strike'] = Icons.Strike
icons['clean'] = Icons.Clean
icons['list']['ordered'] = Icons.OrderedList
icons['list']['check'] = Icons.Check
icons['list']['bullet'] = Icons.Bullet
icons['blockquote'] = Icons.Blockquote
icons['link'] = Icons.Link
icons['image'] = Icons.Image
icons['video'] = Icons.Video
icons['code-block'] = Icons.Code

export interface Props {}
interface State {}

const Editor: FC<Props> = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { locale } = useRouter()

  useEffect(() => {
    if (!ref.current) return
    const quill = new Quill(ref.current, {
      theme: 'snow',
      modules: { toolbar: '#toolbar' },
      placeholder:
        locale === 'ko' ? '아무 얘기나 적어보세요...' : 'Write anything...'
    })
    quill.on('text-change', () => {
      const converter = new QuillDeltaToHtmlConverter(quill.getContents().ops)
      const html = converter.convert()
      window.localStorage.setItem('content', html)
    })
    quill.keyboard.addBinding({ key: '1', shortKey: true }, () =>
      quill.format('header', '1')
    )
    quill.keyboard.addBinding({ key: '2', shortKey: true }, () =>
      quill.format('header', '2')
    )
    quill.keyboard.addBinding({ key: '3', shortKey: true }, () =>
      quill.format('header', '3')
    )
    quill.keyboard.addBinding({ key: '4', shortKey: true }, () =>
      quill.format('header', '4')
    )
    quill.keyboard.addBinding({ key: 'S', shortKey: true }, (range) =>
      quill.formatText(range, 'strike', true)
    )
    quill.keyboard.addBinding(
      { key: 'E', shortKey: true },
      ({ index, length }) => {
        quill.removeFormat(index, length)
      }
    )
    quill.keyboard.addBinding({ key: '5', shortKey: true }, () =>
      quill.format('list', 'bullet')
    )
    quill.keyboard.addBinding({ key: '6', shortKey: true }, () =>
      quill.format('list', 'unchecked')
    )
    quill.keyboard.addBinding({ key: '7', shortKey: true }, () =>
      quill.format('list', 'ordered')
    )
    quill.keyboard.addBinding({ key: 'Y', shortKey: true }, () =>
      quill.format('blockquote', true)
    )
    quill.keyboard.addBinding({ key: 'D', shortKey: true }, () => {
      quill.format('code-block', true)
    })
    const content = window.localStorage.getItem('content')
    if (!!content && content !== '<p><br/></p>') {
      quill.root.innerHTML = content.replaceAll('<br/>', '<br/>\n')
      const selection = window.getSelection()
      if (!selection) return
      const range = document.createRange()
      range.selectNodeContents(quill.root)
      range.collapse(false)
      selection.removeAllRanges()
      selection.addRange(range)
    } else {
      quill.focus()
    }
  }, [])
  return <div ref={ref} spellCheck={false} />
}

export default Editor
