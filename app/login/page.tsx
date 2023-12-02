import { UserAuthForm } from "../components/use-auth-form";
import Particles from "../components/particles";
import { Check, Minus } from "lucide-react";
import { Card } from "../components/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
const Login = async () => {
  const res = await getCurrentUser()

  if(res) {
    redirect('/dashboard')
  }
  return (
    <div className="flex flex-col items-center justify-start w-screen h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-500/30 to-black">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex font-display flex-row justify-center items-center mx-auto mt-20">
        <h1 className="z-10 text-4xl t duration-1000 cursor-default text-edge-outline   sm:text-6xl md:text-9xl whitespace-nowrap  text-transparent bg-clip-text text-edge-outline">
          Start.
        </h1>{" "}
        <h1 className="z-10 text-4xl  duration-1000 cursor-default   sm:text-6xl md:text-9xl whitespace-nowrap bg-white text-transparent bg-clip-text text-edge-outline">
          Build.
        </h1>{" "}
        <h1 className="z-10 text-4xl bg-gradient-to-t from-zinc-700/10 via-zinc-500/20 to-zinc-100 bg-clip-text text-transparent sm:text-6xl md:text-9xl">
          Ship.
        </h1>{" "}
        {/* <div className="text-4xl mt-20 text-transparent">
            
        </div> */}
      </div>

      <div className="w-[500px] rounded-2xl bg-gradient-to-tr from-transparent via-transparent to-transparent mx-auto">
        <Card>
          <div>
            <article className="relative w-full  p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  <span className="text-md">
                    {/* <Minus /> */}
                  </span>
                </div>
              </div>

              <h2
                id="featured-post"
                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
              >
                _Create An Account
              </h2>
              <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300"></p>

              <div className="absolute bottom-4 md:bottom-8"></div>
            </article>

            <div className="flex flex-col justify-center items-center mx-auto">

            <UserAuthForm />
            </div>
            {/* <div className="flex flex-col justify-center items-center mx-3 gap-2 py-10 font-display2">
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                className="font-display2 focus:border-1 active:outline-none active:border-none  bg-transparent border-[0.5px] border-zinc-400/30 rounded-xl ml-1 px-2"
              />
                <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                className="font-display2 focus:border-1 active:outline-none active:border-none  bg-transparent border-[0.5px] border-zinc-400/30 rounded-xl ml-1 px-2"
              />
              <button className="bg-gradient-to-tr from-zinc-600/40 via-zinc-400/10 to-transparent  text-zinc-200/40 flex justify-center items-center border-zinc-500/50  px-5 py-3 rounded-2xl border-[0.5px]">LogIn</button>
            </div> */}
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Login;
