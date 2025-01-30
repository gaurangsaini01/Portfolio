import { BriefcaseIcon, EnvelopeIcon, HomeIcon, UserIcon } from '@heroicons/react/20/solid';
import './App.css'
import React from 'react';
import { chefkart, hotelBhabha, nikeStore, tror } from './assets';
import { Navbar, StarsCanvas } from "./components";
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const Experience = React.lazy(() => import('./components/Experience'));
const Hero = React.lazy(() => import('./components/Hero'));
const Tech = React.lazy(() => import('./components/Tech'));
const Works = React.lazy(() => import('./components/Works'));

export const products = [
  {
    title: "Hotel Bhabha",
    link: "https://hotelbhabha.com/",
    thumbnail: hotelBhabha,
  },
  {
    title: "Nike Store",
    link: "https://nike-limitless.vercel.app/",
    thumbnail: nikeStore,
  },
  {
    title: "Chefkart",
    link: "https://thechefkart.com/",
    thumbnail: chefkart,
  },
  {
    title: "tror.ai",
    link: "https://tror.ai/",
    thumbnail: tror,
  },
  {
    title: "tror.ai",
    link: "https://tror.ai/",
    thumbnail: tror,
  },
  {
    title: "Hotel Bhabha",
    link: "https://hotelbhabha.com/",
    thumbnail: hotelBhabha,
  },
  {
    title: "Nike Store",
    link: "https://nike-limitless.vercel.app/",
    thumbnail: nikeStore,
  },
  {
    title: "tror.ai",
    link: "https://tror.ai/",
    thumbnail: tror,
  },

  
];

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon className="h-4 w-4 text-white" />
  },
  {
    name: "About",
    link: "/#about",
    icon: <UserIcon className="h-4 w-4 text-white" />
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <EnvelopeIcon className="h-4 w-4 text-white" />
  },
  {
    name: "Work",
    link: "/work",
    icon: <BriefcaseIcon className="h-4 w-4 text-white" />
    // icon: (
    //   <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    // ),
  },
];
function App() {


  return (
    <div className="">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar navItems={navItems} />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
    </div>
  )
}

export default App
