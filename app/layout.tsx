import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Auto Som Kaufmann | Som, acessórios e películas em Toledo',
  description: 'Auto Som Kaufmann: há mais de 40 anos oferecendo som automotivo, acessórios, alarmes e películas em Toledo e região.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo-auto-som-kaufmann.png',
    shortcut: '/images/logo-auto-som-kaufmann.png',
    apple: '/images/logo-auto-som-kaufmann.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#030a11',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
