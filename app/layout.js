import './globals.css'

export const metadata = {
  title: 'Coco — Fine Dining',
  description: 'Discover our culinary world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg min-h-screen">
        {children}
      </body>
    </html>
  )
}
