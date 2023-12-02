/* eslint-disable tailwindcss/classnames-order */
"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"


import { cn } from "@/lib/utils"
import { userAuthSchema } from "@/lib/validators/auth-schema"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "./icons"
// import GoogleIcons from "./google-icon"
// import {} from 'lucide-react'
// import SendEmail from "@/lib/send-email"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })
  
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)
  const searchParams = useSearchParams()
  // const session = getCurrentUser()

  async function onSubmit(data: FormData) {
    
    setIsLoading(true)
    
    const signInResult = await signIn("email", {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get("from") || "/dashboard",
    
    })

    
    
    setIsLoading(false)

    if (!signInResult?.ok) {
      
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      })
    }
    // sendEmail()
    
  
  
    return toast({
      title: "Check your email",
      description: "We sent you a login link. Be sure to check your spam too.",
    })
  }



  return (
    <div className={cn("grid gap-6 py-10 ", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              className="bg-transparent border-[0.5px] placeholder:text-zinc-300/20 placeholder:font-display2  border-zinc-400/10 outline-none rounded-xl px-10 py-7"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <button className={cn(  ' font-display2 rounded-2xl text-2xl px-6 py-3 mx-20 border-2 bg-gradient-to-tr from-zinc-600/40 via-transparent to-transparent  text-zinc-200/40 flex justify-center items-center border-zinc-900/20 ')} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </button>
        </div>
      </form>
      <div className="relative bg-transparent">
        <div className="absolute inset-0 flex items-center ">
          <span className="w-full border-" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="font-display2 bg-transparent px-2 text-zinc-400/50">
            Or continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        className={cn('font-display2 rounded-2xl text-2xl px-6 py-3 mx-20 border-2 bg-gradient-to-tr from-zinc-600/40 via-transparent to-transparent  text-zinc-200/40 flex justify-center items-center border-zinc-900/20 ')}
        onClick={() => {
          
          setIsGitHubLoading(true)
          signIn("github")
          // SendEmail()
          
          
          
        }}
        disabled={isLoading || isGitHubLoading}
      >
        {isGitHubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className='w-4 h-5 rounded-full mr-2 ' /> 
        )}{" "}
        Sign In With Github
      </button>
    </div>
  )
}