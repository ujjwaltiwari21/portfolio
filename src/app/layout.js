import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#060607] antialiased">
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
};