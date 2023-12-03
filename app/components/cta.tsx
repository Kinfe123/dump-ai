import Link from "next/link";
import { Button } from "@/components/ui/button";
import Particles from "./particles";

const CTA = () => {
  return (
    <div>
      <div className="text-4xl text-transparent duration-1000 bg-white   font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text dark:text-white font-heading relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]">
        <div>
          <h2 className="text-gradient mb-11 translate-y-[40%] text-center text-4xl  md:text-5xl lg:text-8xl [transition:transform_1000ms_cubic-bezier(0.3,1.17,0.55,0.99)0s] [.is-visible_&]:translate-y-0">
            <span className="text-edge-outline">Accelerate your</span>{" "}
            <span className=" ml-1 bg-gradient-to-t  stroke-transparent from-zinc-700/20 via-zinc-500/20 to-zinc-100 bg-clip-text text-transparent">
              grows{" "}
            </span>{" "}
            <br />
            <span className="bg-gradient-to-tr from-zinc-400/50 via-white to-white/60 bg-clip-text text-transparent">
              with AI-Powered Platform.
            </span>
          </h2>
        </div>
      </div>
        <div className="max-w-7xl mt-20">
          <p className="text-center text-3xl font-display2  bg-gradient-to-tr from-zinc-400/50 via-white to-white/60 bg-clip-text text-transparent">
            Dumpai will be feeding your website log or any analytics data to AI
            which makes it to be traind and gives you a sharp and consise answer
            absout everythig about your website
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 cursor-pointer">
          <div>
            <Link
              href={"/login"}
              className=" font-display2  rounded-2xl text-2xl px-6 py-3 mx-20  bg-gradient-to-tr from-zinc-600/50  via-transparent to-transparent  text-zinc-200/60 flex justify-center items-center border-zinc-900/40 border-[0.5px] cursor-pointer "
            >
              Get started
            </Link>
          </div>
        </div>
    </div>
  );
};
export default CTA;
