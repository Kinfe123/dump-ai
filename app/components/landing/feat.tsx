"use client";
import { cn } from "@/lib/utils";
import { Check, Eye, Minus } from "lucide-react";
import Link from "next/link";
import { Fragment, useState } from "react";
import ReactWrapBalancer from "react-wrap-balancer";

import { Card } from "../card";

type Frequency = "monthly" | "annually";
type Tier = "free" | "startup" | "pro";
// const pricing: {
//   frequencies: { value: Frequency; label: string; priceSuffix: string }[];
//   tiers: {
//     tier: Tier;
//     name: string;
//     href: string;
//     description: string;
//     features: string[];
//     cta: string;
//     mostPopular?: boolean;
//     price?: Record<Frequency, string>;
//   }[];
// } = {
//   frequencies: [
//     { value: "monthly", label: "Monthly", priceSuffix: "/month" },
//     { value: "annually", label: "Annually", priceSuffix: "/year" },
//   ],
//   tiers: [
//     {
//       name: "Startup",
//       tier: "startup",
//       href: "/overview",
//       price: { monthly: "$10", annually: "$100" },
//       description: "For small teams and startups",
//       features: ["50k Events / month"],
//       mostPopular: true,
//       cta: "Get Started",
//     },
//     {
//       name: "Pro",
//       tier: "pro",
//       href: "/overview",
//       price: { monthly: "$50", annually: "$500" },
//       description: "For growing teams",
//       features: ["1M Events / month"],
//       mostPopular: false,
//       cta: "Get Started",
//     },
//   ],
// };

export const Pricing: React.FC = () => {
  return (
    <div className="">
      <div className="overflow-hidden bg-transparent">
        <div className="px-6 pt-24 mx-auto text-center max-w-7xl pb-96 sm:pt-32 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-base font-display leading-7  px-6 bg-gradient-to-t from-zinc-500/20 via-zinc-500/20 to-zinc-100 bg-clip-text text-transparent  sm:text-6xl md:text-8xl whitespace-nowrap">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
              <ReactWrapBalancer>
                The right price for any team
              </ReactWrapBalancer>
            </p>
          </div>
          <div className="relative mt-6">
            <p className="max-w-2xl mx-auto text-lg leading-8 text-white/60">
              Invite your whole team, we don't do seat based pricing here
            </p>
          </div>
        </div>
        <div className="mt-[-320px] font-display2 mb-20">
        <div className="w-[350px] rounded-2xl bg-gradient-to-tr from-zinc-400/20 via-transparent to-transparent mx-auto">

        <Card>
          <div>
            <article className="relative w-full  p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  <span className="text-md"> 
                  <Minus />
                  </span>
                </div>
            
              </div>

              <h2
                id="featured-post"
                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
              >
               Free Tier
              </h2>
              <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                
              </p>
              <ul className="flex font-heading2 text-sm flex-col justify-center gap-2 items-start">
                <li className="text-white/60 flex gap-2 justify-center items-center">
                    <Check />
                     <p className="inline">100% Free Usage</p>
                </li>
                <li className="text-white/60 flex gap-2 justify-center items-center">
                    <Check />
                     <p className="inline">Unlimited Chat</p>
                </li>
                <li className="text-white/60 flex gap-2 justify-center items-center">
                    <Check />
                     <p className="inline">Unlimited Exports</p>
                </li>
                <li className="text-white/60 flex gap-2 justify-center items-center">
                    <Check />
                     <p className="inline">Free Resend Integration</p>
                </li>
                <li className="text-white/60 flex gap-2 justify-center items-center">
                    <Check />
                     <p className="inline">10k req/s allowed</p>
                </li>
                <li className="text-white/60 flex gap-2 justify-center items-center">
                    <Check />
                     <p className="inline">Free Ingested Email</p>
                </li>
                

              </ul>
              <div className="absolute bottom-4 md:bottom-8">
                
              </div>
            </article>
          </div>
        </Card>
        </div>
        </div>
      </div>
    </div>
  );
};
