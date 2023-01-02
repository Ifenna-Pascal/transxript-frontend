import React from 'react'
import Footer from './Footer';
import NavBar from './Nav';

type Props = {
    children: React.ReactNode;
}

 const Mainlayout = ({children}:Props) => {
   return (
    <section>
        <NavBar />
            <main>
            {children}
            </main>
        <Footer />
    </section>
   )
 } 
export default Mainlayout