import React from "react"

export type TypographyProps = {
  children: React.ReactNode
  element?: keyof JSX.IntrinsicElements
} & JSX.IntrinsicElements["p"]

const Typography = ({
  children,
  element = "p",
  className,
  ...rest
}: TypographyProps) => {
  const Element = element as any
  return (
    <Element
      className={`text-gray-primary text-sm font-normal ${className}`}
      {...rest}
    >
      {children}
    </Element>
  )
}

export default Typography
