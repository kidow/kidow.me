import { PureComponent } from 'react'
import type { ErrorInfo } from 'react'

interface Error {
  stack?: string
}
interface Props extends ReactProps {}
interface State {
  hasError: boolean
}

class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error)
  }

  private onError = (event: ErrorEvent) => {
    console.error(event.error)
    event.preventDefault()
  }

  private onCatchPromise = (event: PromiseRejectionEvent) => {
    event.promise.catch(console.error)
    event.preventDefault()
  }

  componentDidMount() {
    window.addEventListener('error', this.onError)
    window.addEventListener('unhandledrejection', this.onCatchPromise)
  }

  componentWillUnmount() {
    window.removeEventListener('error', this.onError)
    window.removeEventListener('unhandledrejection', this.onCatchPromise)
  }

  render() {
    if (this.state.hasError)
      return (
        <div className="flex h-screen select-none items-center justify-center text-center">
          <div>
            <div className="text-7xl">500 Server Error</div>
            <div className="mt-4 text-xl text-neutral-600">
              Sorry. An error has occurred.
            </div>
            <div className="mt-2 text-neutral-600">
              If the problem persists, please report it.
            </div>
          </div>
        </div>
      )
    return this.props.children
  }
}

export default ErrorBoundary
