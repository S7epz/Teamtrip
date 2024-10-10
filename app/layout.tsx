import Navbar from "./components/Navbar";
import './global.css';
import * as React from "react"
import { ThemeProvider } from "./components/theme-provider"

export const metadata = {
  title: 'Teamtrip',
  description: 'Created by SePuede',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        
        <Navbar/>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
