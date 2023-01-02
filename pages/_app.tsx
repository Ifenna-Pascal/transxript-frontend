import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Mainlayout from '../components/layout/Mainlayout'

export default function App({ Component, pageProps }: AppProps) {
  return <Mainlayout>
    <Component {...pageProps} />
  </Mainlayout>
}
