import React from 'react'
import { Navbar, Contact, StarsCanvas } from '../components'
import { navItems } from '../App'

const ContactPage = () => {
  return (
    <div className='relative z-0'>
        <Navbar navItems={navItems} />
        <Contact />
        <StarsCanvas />
  </div>
  )
}

export default ContactPage