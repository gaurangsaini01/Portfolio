import React from 'react'
import { Navbar, Contact, StarsCanvas } from '../components'
import { navItems } from '../App'
import ScrollToTop from '../scrollToTop'

const ContactPage = () => {
  return (
    <div className='relative z-0'>
        <ScrollToTop/>

        <Navbar navItems={navItems} />
        <Contact />
        <StarsCanvas />
  </div>
  )
}

export default ContactPage