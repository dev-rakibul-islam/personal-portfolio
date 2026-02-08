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

export const metadata = {
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

export const viewport = {
  themeColor: "#0a0c10",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
