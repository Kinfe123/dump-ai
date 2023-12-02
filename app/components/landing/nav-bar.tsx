/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable tailwindcss/classnames-order */
"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { useScrollPosition } from "@/hooks/use-scrollable"

// import logodarkish from "../public/logo-darkish.png"
import LandingNav from "./landing-nav"


import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function Navbar({ currentUser }: any) {
  
  const scrollable = useScrollPosition()
  const {theme} = useTheme()
  

  return (
    <div className="w-full">
      {scrollable === 0 ? (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 0.8 }}
          className="hidden md:flex w-screen z-30  fixed top-0 left-0 justify-between  p-1  bg-transparent border-gray-600  animate-header-slide-down-fade"
        >
          <div className="mx-auto sm:hidden md:flex justify-center items-center">
            <LandingNav />
          </div>
        </motion.nav>
      ) : (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 0.8 }}
          className="hidden md:flex wpt-1 w-full z-30 backdrop-blur-lg fixed top-0 left-0 justify-between  p-1 border-b dark:border-gray-200 bg-transparent  md:backdrop-blur-md animate-header-slide-down-fade"
        >
          <div className="relative bg-transparent md:max-w-ful lg:max-w-7xl mx-auto py-10 w-full px-6 h-[58px] hidden md:flex flex-row justify-between items-center align-center">
            <div className="absolute">
              <div className="flex  ">
                <Link
                  href="/"
                  className="flex flex-row ml-[-100px] justify-start items-center gap-2"
                >
                  {/* <Image
                    src={logodarkish}
                    alt="arez-armada logo"
                    className="w-12 h-12  rounded-full "
                  /> */}
                  <span className="inline-flex font-heading">Arez Armada</span>
                </Link>
              </div>
            </div>

            <div className="mx-auto flex justify-center items-center">
              <LandingNav />
            </div>
         
            <div className="absolute right-0">
              <div className="flex  ">
                <Button className="ml-4 bg-gray-800 text-white   transition ease-in-out duration-150 dark:bg-white  dark:text-black w-fit">
                  <Link href="/login">Sign In</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.nav>
      )}

      <div className="md:hidden w-full">
    
      </div>
    </div>
  )
}
