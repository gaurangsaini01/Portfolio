import { BriefcaseIcon, EnvelopeIcon, HomeIcon, UserIcon } from '@heroicons/react/20/solid';
import './App.css'
import { chefkart, hotelBhabha, nikeStore, tror } from './assets';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { HeroParallax } from './components/HeroParallex';


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
    icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
  },
  {
    name: "About",
    link: "/#about",
    icon: <UserIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <EnvelopeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
  },
  {
    name: "Work",
    link: "/work",
    icon: <BriefcaseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
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
