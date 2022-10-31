import Head from 'next/head'
import Feed from '../components/Feed/Feed'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <div className="w-full max-h-screen ">
      <Head>
        <title> Medium Clone </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-12'>
        <Navbar />
        <Feed />
        <Sidebar />

      </main>
    </div>
  )
}
