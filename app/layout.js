import { AuthContextProvider } from '@/lib/context/authContext'
import './globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import UtilContextProvider from '@/lib/context/utilContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sky Studio',
  description: 'Sky Studio - Quote Gen Tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="absolute h-80 w-full mx-auto p-4 bg-theme-gradient -translate-y-1/2 z-0"></div>
          {/* <AuthContextProvider> */}
            <UtilContextProvider>
              {children}
            </UtilContextProvider>
          {/* </AuthContextProvider> */}
        </div>
      </body>
    </html>
  )
}
