import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Navbar from "./components/landing/nav-bar";
import SocialMedia from "./components/landing/social";
import { Pricing } from "./components/landing/feat";
import { Features } from "./components/landing/feat2";
import CTA from "./components/cta";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-start w-screen h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-500/10 to-zinc-400/10">
        <nav className="my-16 animate-fade-in overflow-hidden">
          <Navbar />
          <ul className="flex items-center justify-center gap-4"></ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <div className="text-4xl mt-20 text-transparent">
          <h1 className="z-10 text-4xl text-transparent duration-1000 bg-gradient-to-tr from-zinc-400/70 via-white/80 to-white/10 cursor-default   font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
            Dump
            <span className= "text-edge-outline   bg-gradient-to-tr from-zinc-900/70 via-zinc-900/50 to-white/10 bg-clip-text text-edge-outline">
              ai
            </span>{" "}
            helps you <br />
          </h1>
          <h1 className="flex justify-center items-center bg-clip-text text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap">
            to{" "}
            <span className="px-6 bg-gradient-to-t from-zinc-700/20 via-zinc-500/20 to-zinc-100 bg-clip-text text-transparent">
              accelerate
            </span>
          </h1>
        </div>
        <div>
          <Link
            href={"/login"}
            className="font-display2  rounded-2xl text-2xl px-6 py-3 mx-20 border-2 bg-gradient-to-tr from-zinc-600/40 via-transparent to-transparent  text-zinc-200/40 flex justify-center items-center border-zinc-900/20 "
          >
            <Particles
              className="absolute inset-0 -z-10 animate-fade-in"
              quantity={100}
            />
            Join Waitlist
          </Link>
        </div>

        <div className="hidden w-screen h-1 animate-glow md:block  bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500 ">
            It is currently on dev't , till then Contact{" "}
            <Link
              target="_blank"
              href="https://t.me/Kinfe123"
              className="underline duration-500 hover:text-zinc-300"
            >
              Kinfe
            </Link>{" "}
            for further clarification and collaboration, He is happy to have you
            onboard
          </h2>
        </div>
        <CTA />
        <Features />
        <Pricing />
        <SocialMedia />
      </div>
    </div>
  );
}
