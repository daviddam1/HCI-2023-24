import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Traveler',
  description: 'Next.js lab project',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="../assets/icons/traveler.png"></link>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
