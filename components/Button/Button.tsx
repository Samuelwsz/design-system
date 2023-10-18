import React from "react"

export type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className }: ButtonProps) {
  return (
    <>
      <button
        className={`bg-primary bg-opacity-30 rounded-[8px] px-[32px] py-[12px] text-white ${className}`}
      >
        {children}
      </button>
    </>
  )
}
