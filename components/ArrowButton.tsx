
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ArrowButton = ({ children,link,className,variant="default"  }: { children: React.ReactNode,link:string,className?:string,variant?:string }) => {

  const buttonVariants: Record<string, string> = {
    default: "bg-primary text-secondary border rounded-lg",
    outline: "border border-primary text-primary",
    ghost: "text-primary"  ,
  } 

  return (
    <Link href={link} className='group'>
    <button className={`${buttonVariants[variant]} px-4 py-2 rounded-md flex items-center justify-center ${className}`}>
      {children}
      <span className='ml-2 group-hover:translate-x-2 transition-all duration-300'>
        <ArrowRight className='w-4 h-4' />
      </span>
    </button>
    </Link>
  )
}

export default ArrowButton