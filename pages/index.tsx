import Head from 'next/head'
import Mainlayout from '../components/layout/Mainlayout'
import About from '../components/sections/About'
import Action from '../components/sections/Action'
import Hero from '../components/sections/Hero'


export default function Home() {
  return (
    <>
      <Head>
        <title> Transxript </title>
        <meta name="description" content="A Seamless, process in generating user defined transcript for results" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <main>
     <Mainlayout>

          <Hero />
          <About />
          <Action />
    </Mainlayout>
       </main>
    </>
  )
}

