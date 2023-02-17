import React from 'react'
import '../CSS/home.css'
import Header from './Header'
import Navbar from './Navbar'
import Products from './Products'
import Sidebar from './Sidebar'
function Home() {
  return (
   <>
     <Header/>
     <Navbar/>
      <main>
          <Sidebar/>
          <Products/>
      </main>
    
   </>
  )
}

export default Home