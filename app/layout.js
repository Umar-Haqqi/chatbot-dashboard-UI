import { Inter } from 'next/font/google'
import './globals.css'

// step 1: copy and paste it here and make v13 to v14
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>

        {/* step 2: wrap children */}
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>

      </body>
    </html>
  )
}
