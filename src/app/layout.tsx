import "../scss/main.scss"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Viewing",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
