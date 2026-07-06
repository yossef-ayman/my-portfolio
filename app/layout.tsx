import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "Youssef Ayman Mohamed | Software Engineer & Systems Architect",
  description: "Specializing in C++, .NET Core, Full-Stack React development, cryptographic VPN networks, and ONNX AI intrusion gateways.",
  keywords: [
    "Youssef Ayman Mohamed",
    "Software Engineer",
    "Full-Stack Developer",
    "C++ Developer",
    ".NET Architect",
    "AI Anomaly Detection",
    "Cybersecurity Engineer",
    "Secure VPN Gateway",
    "ONNX Runtime",
    "React Engineer"
  ],
  authors: [{ name: "Youssef Ayman Mohamed" }],
  creator: "Youssef Ayman Mohamed",
  metadataBase: new URL("https://yossef-ayman.github.io/my-portfolio/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Youssef Ayman Mohamed | Software Engineer",
    description: "Highly capable systems engineer specializing in high-throughput C++, enterprise C#/.NET Core APIs, AI pipelines, and network security tunnels.",
    url: "https://yossef-ayman.github.io/my-portfolio/",
    siteName: "Youssef Ayman Mohamed Portfolio",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Youssef Ayman Mohamed - Software Engineer Portfolio Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Ayman Mohamed | Software Engineer",
    description: "Enterprise backend, network cryptography, and AI pipeline specialist.",
    images: ["/placeholder.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Structured Schema data for SEO crawlers (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Youssef Ayman Mohamed",
    "jobTitle": "Software Engineer",
    "url": "https://yossef-ayman.github.io/my-portfolio/",
    "sameAs": [
      "https://github.com/yossef-ayman",
      "https://www.linkedin.com/in/yossef-ayman-357b15304/"
    ],
    "colleague": [],
    "worksFor": {
      "@type": "Organization",
      "name": "Endoura Soft"
    },
    "knowsAbout": [
      "Software Engineering",
      "Backend Architecture",
      "C++ Systems Programming",
      "ASP.NET Core APIs",
      "React Frontend Architecture",
      "Network Cryptography (AES-256-GCM, X25519)",
      "ONNX Machine Learning Pipelines"
    ],
    "description": "Professional Software Engineer focusing on secure tunnels, C++ packet inspection gateways, and enterprise web solutions."
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${cairo.variable} antialiased selection:bg-indigo-500 selection:text-white`}>
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange={false}
          >
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
