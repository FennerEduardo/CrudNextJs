import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Menu from '@/app/components/navbar/Menu';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crud with Next Js using Typescript',
  description: 'By Fenner González',
  authors: [
    {
      url: 'https://evol.com.co',
      name: 'Fenner González'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  )
}
