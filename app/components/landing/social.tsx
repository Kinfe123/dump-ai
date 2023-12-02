import Link from "next/link";
import Image from "next/image";
import githubIcon from "../../../public/social-media/github.webp";
import Particles from "../particles";
const SocialMedia = () => {
  return (
    <div className="flex font-sans flex-col justify-center items-center">
      <div className="border-2 border-white/20 rounded-2xl flex flex-col gap-2">
        <Image src={githubIcon} alt="Github icon" className="" />
      </div>
      <div className=" mt-[-200px] ">
        <h1 className=" mb-3 flex font-display justify-center items-center  sm:text-4xl md:text-5xl whitespace-nowrap bg-clip-text bg-white/40 via-transparent to-white/10 text-transparent">
          Proudly Open Source
        </h1>
        <Link
          href={"https://github.com/Kinfe123/dumpai"}
          className="font-display2 rounded-2xl text-2xl px-6 py-3 mx-20 border-2 bg-gradient-to-tr from-zinc-600/10 via-transparent to-transparent  text-zinc-200/40 flex justify-center items-center border-zinc-900/80 "
        >
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          View on Github
        </Link>
      </div>
    </div>
  );
};
export default SocialMedia;
