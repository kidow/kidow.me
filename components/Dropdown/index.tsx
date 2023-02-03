import { useRef, useId } from 'react'
import type { FC } from 'react'
import { useObjectState, useOnClickOutside } from 'services'
import { createPortal } from 'react-dom'

interface Props {
  list: string[]
  onClick: (index: number) => void
  label?: string
}
interface State {
  isOpen: boolean
}

const Dropdown: FC<Props> = ({ label = 'Dropdown', list, onClick }) => {
  const [{ isOpen }, setState] = useObjectState<State>({
    isOpen: false
  })
  const ref = useRef<HTMLButtonElement>(null)
  const targetRef = useRef<HTMLUListElement>(null)
  const id = useId()

  useOnClickOutside(targetRef, () => setState({ isOpen: false }), id)
  return (
    <>
      <button
        onClick={() => setState({ isOpen: !isOpen })}
        id={id}
        ref={ref}
        className="inline-flex items-center rounded-md px-4 py-2 text-sm text-neutral-700 after:ml-2 after:block after:h-1.5 after:w-1.5 after:rotate-45 after:border-b after:border-r after:border-neutral-700 after:bg-transparent after:content-[''] hover:bg-neutral-50"
      >
        {label}
      </button>
      {isOpen &&
        createPortal(
          <div
            style={{
              left: ref.current!.getBoundingClientRect().left,
              top:
                window.scrollY +
                ref.current!.getBoundingClientRect().top +
                ref.current!.clientHeight,
              minWidth: ref.current!.getBoundingClientRect().width
            }}
            className="absolute z-[9999]"
          >
            <ul
              className="z-10 rounded-md bg-neutral-50 p-1 text-neutral-700 shadow-xl"
              role="menu"
              tabIndex={0}
              ref={targetRef}
            >
              {list.map((item, key) => (
                <li
                  className="cursor-pointer rounded-md p-2 hover:bg-neutral-100"
                  role="menuitem"
                  tabIndex={-1}
                  key={key}
                  onClick={() => {
                    onClick(key)
                    setState({ isOpen: false })
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>,
          document.body
        )}
    </>
  )
}

export default Dropdown
