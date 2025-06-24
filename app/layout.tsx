import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aman Singh Negi - Full-Stack Developer | Java & Angular Specialist",
  description:
    "Portfolio of Aman, a passionate full-stack developer with 2.5+ years of experience in Java, Spring Boot, Angular, and AWS. Building scalable and intuitive digital solutions.",
  keywords: "Full-Stack Developer, Java Developer, Angular Developer, Spring Boot, AWS, Portfolio, Software Engineer",
  authors: [{ name: "Aman" }],
  creator: "Aman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aman-singh-negi-portfolio.vercel.app",
    title: "Aman Singh Negi - Full-Stack Developer Portfolio",
    description:
      "Passionate software developer specializing in Java and Angular, building scalable and intuitive digital solutions.",
    siteName: "Aman Singh Negi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Singh Negi - Full-Stack Developer",
    description: "Java & Angular Specialist building amazing digital experiences",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
