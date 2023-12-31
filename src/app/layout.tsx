import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { MenuNavigation } from '@/components/personal/navigationMenu'

const inter = Inter({ subsets: [ 'latin' ] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <MenuNavigation />
            <div className="flex min-h-screen items-center justify-center">
              {children}
            </div>
          </ThemeProvider>
      </body>
    </html>
  )
}
