import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./components/Navbar";
import './global.css';

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
    <html lang="en">
      
      <body>
        
        <Navbar/>
        
        {children}
      </body>
    </html>
  )
}
