import React, { useEffect } from 'react'
import { HeroParallax } from '../components/HeroParallex'
import { navItems, products } from '../App'
import { Navbar, StarsCanvas } from '../components'

const Work = () => {
  useEffect(() => {
    const listener = () => window.scrollTo(0, 0);
    window.addEventListener('popstate', listener); // Listen for navigation changes

    return () => window.removeEventListener('popstate', listener); // Cleanup
  }, []);

  return (
    <div className='relative z-0 mb-5'>
      <Navbar navItems={navItems} />
      <HeroParallax products={products} />
      <StarsCanvas />
    </div>
  )
}

export default Work