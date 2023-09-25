import './globals.css'
import React from "react";

import Navbar from "@/components/Navbar";


export const metadata = {
  title: 'My Bakery',
  description: 'Discover My Magnificent Bakery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
      <Navbar />
      {children}
      </body>
    </html>
  )
}
