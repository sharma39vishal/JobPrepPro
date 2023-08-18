import './globals.css'
import { Inter } from 'next/font/google'
import Header from './universal/header'
import { Provider } from './providers'
import Footer from './universal/footer'
// import Footer from './universal/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Job Pro',
  description: 'Xtrim 2.o',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
      </Provider>
    </html>
  )
}
