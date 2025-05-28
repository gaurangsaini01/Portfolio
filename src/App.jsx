import { BriefcaseIcon, EnvelopeIcon, HomeIcon, UserIcon } from '@heroicons/react/20/solid';
import './App.css'
import React from 'react';
import { buysellplatform, cineview, nikeStore, studynotion } from './assets';
import {  Navbar, StarsCanvas } from "./components";
import ScrollToTop from './scrollToTop';
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const Experience = React.lazy(() => import('./components/Experience'));
const Hero = React.lazy(() => import('./components/Hero'));
const Tech = React.lazy(() => import('./components/Tech'));
const Works = React.lazy(() => import('./components/Works'));

export const products = [
  {
    title: "Nike Store",
    link: "https://nikeshopease.netlify.app/",
    thumbnail: nikeStore,
  },
  {
    title: "Buy-Sell-Platform",
    link: "https://github.com/gaurangsaini01/Buyer-Seller-Portal",
    thumbnail: buysellplatform,
  },
  
  {
    title: "StudyNotion",
    link: "https://study-notion-ed-t.vercel.app",
    thumbnail: studynotion,
  },
  {
    title: "Cineview",
    link: "https://cineview-app.netlify.app",
    thumbnail: cineview,
  },
  {
    title: "StudyNotion",
    link: "https://study-notion-ed-t.vercel.app",
    thumbnail: studynotion,
  },
  {
    title: "Nike Store",
    link: "https://nikeshopease.netlify.app/",
    thumbnail: nikeStore,
  },
  {
    title: "Cineview",
    link: "https://cineview-app.netlify.app/",
    thumbnail: cineview,
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
    link: "/about",
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
        <ScrollToTop/>
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
