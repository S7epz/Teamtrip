import Navbar from "./components/Navbar";
import './global.css';
import * as React from "react"
import { ThemeProvider } from "./components/theme-provider"
import { AuthProvider } from "@/lib/AuthContext"

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
        
        
          
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
            <Navbar/>
            {children}
            </AuthProvider>
          </ThemeProvider>

          
      </body>
    </html>
  )
}
