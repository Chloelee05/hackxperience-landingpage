"use client"
import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import PastEvents from "./components/pastEvents";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <PastEvents></PastEvents>
    </div>
    
  );
}
