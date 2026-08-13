import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { Analytics } from '@vercel/analytics/next';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio of Chassity Nakamura - Senior Product Engineer',
  description: 'Portfolio of Chassity Nakamura, Senior Product Engineer with 12+ years of experience building customer-facing products, cloud-native platforms, and AI-enabled workflows across fintech, healthcare, e-commerce, and machine learning.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  )
};
