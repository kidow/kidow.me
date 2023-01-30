import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/kidow/kidow.me'
  },
  chat: {
    link: 'https://discord.com'
  },
  docsRepositoryBase: 'https://github.com/kidow/kidow.me',
  footer: {
    text: `© ${new Date().getFullYear()} kidow. All rights reserved.`
  },
  head: (
    <>
      <script
        type="text/javascript"
        async
        defer
        src="https://cdn.feedbank.app/plugin.js"
        plugin-key="53e1b21b-52a5-457c-8209-e4f8f12667ff"
      />
    </>
  )
}

export default config
