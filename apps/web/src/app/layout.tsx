import '../styles/globals.css'
import { Providers } from './providers'
import { BottomNavigation } from '@/components/layout/BottomNavigation'

export const metadata = {
  title: 'QuickServe - Local Commerce Platform',
  description: 'A comprehensive platform for local marketplace, 3D showcase, on-demand services, and hyperlocal delivery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <Providers>
          <div className="min-h-screen bg-gray-50">
            <main className="pb-16">
              {children}
            </main>
            <BottomNavigation />
          </div>
        </Providers>
      </body>
    </html>
  )
}