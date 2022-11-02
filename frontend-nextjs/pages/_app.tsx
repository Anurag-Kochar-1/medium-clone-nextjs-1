import '../styles/globals.css'
// import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import 'react-quill/dist/quill.snow.css'


export default function App({ Component, pageProps: {session, ...pageProps} }: any) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
