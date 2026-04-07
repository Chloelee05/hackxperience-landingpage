"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface DecryptedTextProps extends HTMLMotionProps<"span"> {
  text: string
  speed?: number
  maxIterations?: number
  characters?: string
  className?: string
  encryptedClassName?: string
}

export default function DecryptedTimerText({
  text,
  speed = 40,
  maxIterations = 5, // Keep this low for seconds so it finishes fast
  characters = "0123456789%#$!",
  className = "",
  encryptedClassName = "",
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState<string>(text)
  const [isScrambling, setIsScrambling] = useState<boolean>(false)

  // Trigger scramble whenever the 'text' prop updates (every second)
  useEffect(() => {
    let iteration = 0
    setIsScrambling(true)

    const interval = setInterval(() => {
      setDisplayText(() => {
        return text
          .split("")
          .map((char, i) => {
            if (char === " ") return " "
            // Randomly pick from characters during scramble
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join("")
      })

      iteration++

      if (iteration >= maxIterations) {
        clearInterval(interval)
        setIsScrambling(false)
        setDisplayText(text)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, maxIterations, characters])

  return (
    <motion.span className="inline-block tabular-nums" {...props}>
      {displayText.split("").map((char, index) => (
        <span 
          key={index} 
          className={isScrambling ? encryptedClassName : className}
        >
          {char}
        </span>
      ))}
    </motion.span>
  )
}