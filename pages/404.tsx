import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface State {}

const NotFoundPage: NextPage = () => {
  const { replace } = useRouter()

  useEffect(() => {
    // replace('/')
  }, [])
  return <></>
}

export default NotFoundPage
