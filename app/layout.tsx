import Navbar from "./components/Navbar";

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
