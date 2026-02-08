import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Rakibul Islam | Full Stack Web Developer",
  description:
    "Portfolio of Rakibul Islam - A passionate MERN stack developer building seamless, efficient, and impactful web applications with modern technologies.",
  keywords: [
    "Rakibul Islam",
    "Web Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Rakibul Islam" }],
  openGraph: {
    title: "Rakibul Islam | Full Stack Web Developer",
    description:
      "Portfolio of Rakibul Islam - A passionate MERN stack developer.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0c10",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
