"use client"

import { useParams } from "next/navigation"
import { Gallery } from "@/components/gallery"
import type { EP_VALUES } from "@/types"

export default function Page() {
  const { id }: { id: EP_VALUES } = useParams()

  return <Gallery categoryId={id} />
}
