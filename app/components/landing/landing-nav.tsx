/* eslint-disable tailwindcss/classnames-order */

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"


import { cn } from "@/lib/utils"
import { useScrollPosition } from "@/hooks/use-scrollable"
import Particles from "../particles"

const LandingNav = () => {
  const scrollable = useScrollPosition()
  const [currentSelection, setCurrentSelection] = useState("Home")
  const [currPath, setCurrPath] = useState("Home")
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/" && currentSelection !== "Home") {
      setCurrentSelection("Home")
    }
  }, [])
  useEffect(() => {
    let currpath = pathname?.slice(1, pathname.length)
    if (currpath) {
      let splitted = currpath.split("/")
      currpath = splitted[0][0].toUpperCase() + splitted[0].slice(1)

      setCurrentSelection(currpath)
      setCurrPath(currpath)
    } else {
      setCurrentSelection("Home")
      setCurrPath("Home")
    }
    // setCurrPath(currpath!)
  }, [pathname, scrollable])
  const handleMouseleave = () => {
    setCurrentSelection(currentSelection)
  }

  return (
    <div className=" py-4 font-heading2 rounded-full [--duration:500ms]  [transform:translateZ(0)]">
      <nav className="mx-auto bg-transparent relative backdrop-blur-lg rounded-full border border-black/10 p-0 px-[2px] pb-[3px] py-[2px] dark:border-gray-600 shadow-sm ">
        <div
          className={cn(
            "dark:bg-transparent dark:blur-xl absolute bottom-0 left-0 h-1/2 w-[var(--width)] translate-x-2 bg-transparent blur-2xl rounded-full transition-[width,transform] duration-500",
            pathname === "/" && "translate-x-2",
            pathname === "/career" && "translate-x-20",

            pathname?.includes("/blog") && "translate-x-44",
            pathname?.includes("/privacy") && "translate-x-72",
            pathname?.includes("/docs") && " translate-x-96"
          )}
          style={{
            width: "84.5px",
            left: "0px",
          }}
        ></div>
        <div className="absolute inset-0 rounded-full border-[0.2px] border-zinc-200/20 backdrop-blur-2xl "></div>
        
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={20}
        />
        <div className="relative">
          <div
            className={cn(
              //dark:from-purple-600 dark:to-orange-400   absolute bottom-0 left-[-40px] opacity-[10px]  h-2/4 w-10 translate-x-2  rounded-full blur-md transition-[width,transform]
              "dark:bg-gradient-to-tr  duration-500",
              pathname === "/" && "translate-x-2",
              pathname === "/career" && "translate-x-20",
              pathname?.includes("/blog") && "translate-x-44",
              pathname?.includes("/privacy") && "translate-x-72",
              pathname?.includes("/docs") && " translate-x-96"
            )}
            style={{
              width: "84.5px",
              left: "0px",
            }}
          ></div>
          <ul className="relative flex items-center gap-5">
            <li className="">
              <Link href="/">
                <button
                  type="button"
                  onMouseOver={() => setCurrentSelection("Home")}
                  onMouseLeave={() => setCurrentSelection(currPath)}
                  className={cn(
                    "relative px-5 py-3 text-sm font-light text-white/60 transition-[text-shadow,color] duration-200 hover:text-black/80 focus:outline-none dark:text-white/60 dark:hover:text-white/75",
                    pathname === "/" && "text-white/80 dark:text-white "
                  )}
                >
                  Home
                  {currentSelection === "Home" && (
                    <motion.div
                      layoutId="scroll-nav"
                      initial={{ y: 0, opacity: 0 }}
                      animate={{ y: 1, opacity: 1 }}
                      exit={{ y: -2, opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      // viewport={{ once: false }}
                      className=" absolute inset-0 -z-10 rounded-full  bg-gradient-to-tr from-zinc-400/50 to-zinc-200/20 border-0 pt-5 "
                    />
                  )}
                </button>
              </Link>
            </li>

            <li className="">
              <Link href="/docs">
                <button
                  onMouseOver={() => setCurrentSelection("Career")}
                  onMouseLeave={() => setCurrentSelection(currPath)}
                  type="button"
                  className={cn(
                    "relative  px-5 py-3 text-white/60  text-sm font-light transition-[text-shadow,color] duration-200 hover:text-black/80 focus:outline-none dark:text-white dark:hover:text-white/75 ",
                    pathname === "/docs" &&
                      " text-black/80  dark:text-white "
                  )}
                >
                  Docs{" "}
                  <span className=" inline text-mute-foreground dark:text-white rounded-full pt-5 mb-4 font-heading2">
                
                  </span>
                  {currentSelection === "Career" && (
                    <motion.div
                      layoutId="scroll-nav"
                      className="  absolute inset-0 -z-10 rounded-full  bg-gradient-to-tr from-zinc-400/50 to-zinc-200/20 border-0 pt-5  "
                    />
                  )}
                </button>
              </Link>
            </li>
            <li className="hidden md:block">
              <Link href="/blog">
                <button
                  onMouseOver={() => setCurrentSelection("Blog")}
                  onMouseLeave={() => setCurrentSelection(currPath)}
                  type="button"
                  className={cn(
                    "relative  px-5 py-3 text-sm font-light text-white/60 transition-[text-shadow,color] duration-200 hover:text-black/80 focus:outline-none dark:text-white/60 dark:hover:text-white/75",
                    pathname?.includes("/blog") &&
                      "text-black/80 dark:text-white/75"
                  )}
                >
                  Blog
                  {currentSelection === "Blog" && (
                    <motion.div
                      layoutId="scroll-nav"
                      className=" absolute inset-0 -z-10 rounded-full  bg-gradient-to-tr from-zinc-400/50 to-zinc-200/20 border-0 pt-5  "
                    />
                  )}
                </button>
              </Link>
            </li>

          
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default LandingNav