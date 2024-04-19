import React from 'react'
import Header from '../components/Header/Header'
import MainRoute from '../routes/MainRoute'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Header/>
      <main>
        <MainRoute/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
