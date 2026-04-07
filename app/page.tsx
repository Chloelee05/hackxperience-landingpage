"use client"
import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import PastEvents from "./components/pastEvents";
import TimeLine from './timeline'
import PreEvent from './pre_event'


export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <About></About>
      <PastEvents></PastEvents>
      <PreEvent />
      <TimeLine/>
    </main>
  )
}
