import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ModalContextProvider from '../components/context/ModalContext'

export default function App({ Component, pageProps }: AppProps) {
  return <ModalContextProvider>
    <Component {...pageProps} />
  </ModalContextProvider>
}
