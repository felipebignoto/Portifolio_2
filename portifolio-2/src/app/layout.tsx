import type { Metadata } from 'next'
import './globals.css'
import Home from './page'

export const metadata: Metadata = {
  title: 'Felipe BignotoS',
  description: 'Felipe Bignoto - Desenvolvedor',
}

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="">
        <Home />
      </body>
    </html>
  )
}
