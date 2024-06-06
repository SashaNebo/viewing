"use client"
import { ReactNode, useEffect, useState } from "react"

export const Transition = ({ children }: { children: ReactNode }) => {
  const [displayChildren, setDisplayChildren] = useState(children)

  return <main className="main-transition">{displayChildren}</main>
}
