import { useMemo } from 'react'
import type { FC } from 'react'
import { Tooltip } from 'components'
import { toast } from 'services'
import { useRouter } from 'next/router'

export interface Props {
  onHelpClick: () => void
}
interface State {}

const Toolbar: FC<Props> = ({ onHelpClick }) => {
  const { locale } = useRouter()

  const shortKey: string = useMemo(
    () =>
      window.navigator.platform.toUpperCase().indexOf('MAC') !== -1
        ? '⌘'
        : 'Ctrl',
    []
  )
  return (
    <nav role="toolbar" id="toolbar">
      <ul className="ql-formats">
        <li>
          <Tooltip content={`Heading 1 (${shortKey} + 1)`}>
            <button className="ql-header" value="1" />
          </Tooltip>
        </li>
        <li>
          <Tooltip content={`Heading 2 (${shortKey} + 2)`}>
            <button className="ql-header" value="2" />
          </Tooltip>
        </li>
        <li>
          <Tooltip content={`Heading 3 (${shortKey} + 3)`}>
            <button className="ql-header" value="3" />
          </Tooltip>
        </li>
        <li>
          <Tooltip content={`Heading 4 (${shortKey} + 4)`}>
            <button className="ql-header" value="4" />
          </Tooltip>
        </li>
      </ul>
      <ul className="ql-formats">
        <li>
          <Tooltip content={`Bold (${shortKey} + B)`}>
            <button className="ql-bold" />
          </Tooltip>
        </li>
        <li>
          <Tooltip content={`Italic (${shortKey} + I)`}>
            <button className="ql-italic" />
          </Tooltip>
        </li>
        <li>
          <Tooltip content={`Strike (${shortKey} + U)`}>
            <button className="ql-underline" />
          </Tooltip>
        </li>
        <li>
          <Tooltip content={`Underline (${shortKey} + S)`}>
            <button className="ql-strike" />
          </Tooltip>
        </li>
        <li>
          <Tooltip content={`Clean (${shortKey} + E)`}>
            <button className="ql-clean" />
          </Tooltip>
        </li>
      </ul>
      <ul className="ql-formats">
        <li>
          <Tooltip content={`Bullet List (${shortKey} + 5)`}>
            <button className="ql-list" value="bullet" />
          </Tooltip>
        </li>
        <li>
          <Tooltip content={`To do List (${shortKey} + 6)`}>
            <button className="ql-list" value="check" />
          </Tooltip>
        </li>
        <li>
          <Tooltip content={`Ordered List (${shortKey} + 7)`}>
            <button className="ql-list" value="ordered" />
          </Tooltip>
        </li>
      </ul>
      <ul className="ql-formats">
        <li>
          <Tooltip content={`Blockquote (${shortKey} + Y)`}>
            <button className="ql-blockquote" />
          </Tooltip>
        </li>
        <li>
          <Tooltip content="Link">
            <button
              className="ql-link"
              onClick={() => {
                const selection = window.getSelection()
                if (selection?.type !== 'Range') {
                  if (locale === 'ko') toast.info('텍스트를 드래그하세요.')
                  if (locale === 'en') toast.info('Drag the text.')
                }
              }}
            />
          </Tooltip>
        </li>
        <li>
          <Tooltip content="Image">
            <button className="ql-image" />
          </Tooltip>
        </li>
        <li>
          <Tooltip content="Video">
            <button className="ql-video" />
          </Tooltip>
        </li>
        <li>
          <Tooltip content={`Code (${shortKey} + D)`}>
            <button className="ql-code-block" />
          </Tooltip>
        </li>
        <li>
          <Tooltip content={`Help (${shortKey} + H)`}>
            <button onClick={onHelpClick}>
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0" fill="none" width="24" height="24" />
                <g>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 16h-2v-2h2v2zm0-4.14V15h-2v-2c0-.552.448-1 1-1 1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.862-1.278 3.413-3 3.86z" />
                </g>
              </svg>
            </button>
          </Tooltip>
        </li>
      </ul>
    </nav>
  )
}

export default Toolbar
