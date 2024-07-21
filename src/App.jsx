import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Friut from './components/Friut'
import Dairy from './components/Dairy'
import Banner from './components/Banner';
import New from './components/New'
import Contact from './components/Contact'
import Support from './components/Support'
import Footer from './components/Footer'

function App() {
  return (
    
   <main>
     <Navbar/>
     <div id="home">
      <Hero/>
     </div>
     <div>
      <Products/>
     </div>
     <div id="fruit">
      <Friut/>
     </div>
     <div id="dairy">
      <Dairy/>
     </div>
     <div>
      <Banner/>
     </div>
     <div id="new">
      <New/>
     </div>
     <div id="contact">
      <Contact/>
     </div>
     <div>
      <Support/>
     </div>
     <div>
      <Footer/>
     </div>
   </main>
  
  )
}

export default App