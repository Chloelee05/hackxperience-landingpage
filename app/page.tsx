"use client"
import Hero from "./components/hero";
import About from "./components/about";
import PastEvents from "./components/pastEvents";
import TimeLine from './timeline'
import PreEvent from './pre_event'
import TimelineCta from "./components/timelineCta";
import Faq from "./components/faq";
import Committee from "./components/committee";
import Footer from "./components/footer";


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <PastEvents/>
      <PreEvent/>
      <TimeLine/>
      <Faq/>
      <Committee/>
      <TimelineCta/>
      <Footer/>
    </main>
  )
}
