"use client";
import { cn } from "@/lib/utils";
import { Check, Eye, Minus } from "lucide-react";
import Link from "next/link";
import { Fragment, useState } from "react";
import ReactWrapBalancer from "react-wrap-balancer";
import { Card } from "../card";
import { MessageCircleIcon } from "lucide-react";
export const Features: React.FC = () => {
  return (
    <div className="">
      <div className="overflow-hidden bg-transparent f">
        <div className="px-6 pt-24 mx-auto text-center max-w-7xl pb-96 sm:pt-32 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-base font-display leading-7  px-6 bg-gradient-to-t from-zinc-500/20 via-zinc-500/20 to-zinc-100 bg-clip-text text-transparent  sm:text-6xl md:text-8xl whitespace-nowrap">
              Features
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight bg-gradient-to-tr from-zinc-400/50 via-white to-white/60 bg-clip-text text-transparent sm:text-5xl font-display">
              <ReactWrapBalancer>AI Tuned By Your Data</ReactWrapBalancer>
            </p>
          </div>
          <div className="relative mt-2">
              {/* <p className="max-w-2xl mx-auto text-lg leading-8 text-white/60">
                Invite your whole team, we don't do seat based pricing here
              </p> */}
          </div>
        </div>
        <div className="mt-[-340px] font-display2 mb-20  gap-6 grid sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 ">
          <Card>
            <div>
              <article className="relative w-[450px]  p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <span className="text-md">We help your website grows!</span>
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <div className="flex gap-2 justify-start items-center">
                    <span className="inine">
                      <MessageCircleIcon className="w-6 h-10 mt-[-10px]" />
                    </span>
                    <p>AI Powered</p>
                  </div>
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  We fined tuned AI models to be trained on your log from a
                  analytics tools
                </p>
                <div className="absolute bottom-4 md:bottom-8"></div>
              </article>
            </div>
          </Card>
          <Card>
            <div>
              <article className="relative w-[450px] p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <span className="text-md">We help your website grows!</span>
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <div className="flex gap-2 justify-start items-center">
                    <span className="inine">
                      <MessageCircleIcon className="w-6 h-10 mt-[-10px]" />
                    </span>
                    <p>Training Model</p>
                  </div>
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  We fined tuned AI models to be trained on your log from a
                  analytics tools
                </p>
                <div className="absolute bottom-4 md:bottom-8"></div>
              </article>
            </div>
          </Card>
          <Card>
            <div>
              <article className="relative w-[450px] p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <span className="text-md">We help your website grows!</span>
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <div className="flex gap-2 justify-start items-center">
                    <span className="inine">
                      <MessageCircleIcon className="w-6 h-10 mt-[-10px]" />
                    </span>
                    <p>Chat with AI</p>
                  </div>
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  We fined tuned AI models to be trained on your log from a
                  analytics tools
                </p>
                <div className="absolute bottom-4 md:bottom-8"></div>
              </article>
            </div>
          </Card>
          <Card>
            <div>
              <article className="relative w-[450px]  p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <span className="text-md">We help your website grows!</span>
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <div className="flex gap-2 justify-start items-center">
                    <span className="inine">
                      <MessageCircleIcon className="w-6 h-10 mt-[-10px]" />
                    </span>
                    <p>AI Powered</p>
                  </div>
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  We fined tuned AI models to be trained on your log from a
                  analytics tools
                </p>
                <div className="absolute bottom-4 md:bottom-8"></div>
              </article>
            </div>
          </Card>
          <Card>
            <div>
              <article className="relative w-[450px] p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <span className="text-md">We help your website grows!</span>
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <div className="flex gap-2 justify-start items-center">
                    <span className="inine">
                      <MessageCircleIcon className="w-6 h-10 mt-[-10px]" />
                    </span>
                    <p>Training Model</p>
                  </div>
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  We fined tuned AI models to be trained on your log from a
                  analytics tools
                </p>
                <div className="absolute bottom-4 md:bottom-8"></div>
              </article>
            </div>
          </Card>
          <Card>
            <div>
              <article className="relative w-[450px] p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <span className="text-md">We help your website grows!</span>
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <div className="flex gap-2 justify-start items-center">
                    <span className="inine">
                      <MessageCircleIcon className="w-6 h-10 mt-[-10px]" />
                    </span>
                    <p>Chat with AI</p>
                  </div>
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  We fined tuned AI models to be trained on your log from a
                  analytics tools
                </p>
                <div className="absolute bottom-4 md:bottom-8"></div>
              </article>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
