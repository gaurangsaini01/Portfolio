import React from 'react'
import { About, Contact, Navbar } from '../components'
import { navItems } from '../App'
import ScrollToTop from '../scrollToTop'

function AboutPage() {
  return (
    <div>
        <ScrollToTop/>
      <Navbar navItems={navItems}/>
      <About/>
      <Contact/>
    </div>
  )
}

export default AboutPage
