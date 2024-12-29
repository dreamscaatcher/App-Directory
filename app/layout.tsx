 
import './globals.css'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YC Directory',
  description: 'Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.',
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
      <html lang="en">
        <body className={workSans.className}>
          {children}
        </body>
      </html>
  )
  }
