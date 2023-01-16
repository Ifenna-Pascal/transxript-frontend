import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ModalContextProvider from '../components/context/ModalContext'
import 'remixicon/fonts/remixicon.css'
import AuthContextProvider from '../context/AuthContext'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css";
// import getToken from '../hooks/getToken'
// import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AuthContextProvider>
        <ModalContextProvider>
          <Component {...pageProps} />
        </ModalContextProvider>
      </AuthContextProvider>
    </>
  )

}

