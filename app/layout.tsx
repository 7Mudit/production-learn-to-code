import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/context/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Learn To Code - Programming Help, Freelancing, and Developer Resources",
  description:
    "Join our community-driven platform for programming solutions, freelancing services, developer documentation, and AI-powered Q&A. Collaborate and learn with developers worldwide.",
  manifest: "/site.webmanifest",
  publisher: "Mudit Kapoor",
  openGraph: {
    title:
      "Learn To Code - Programming Help, Freelancing, and Developer Resources",
    description:
      "Join our community-driven platform for programming solutions, freelancing services, developer documentation, and AI-powered Q&A. Collaborate and learn with developers worldwide.",
    images: "https://thelearntocode.com/newLogo.png",
    type: "website",
    url: "https://thelearntocode.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>
          Learn To Code - Programming Help, Freelancing, and Developer Resources
        </title>
        <meta
          name="description"
          content="Join our community-driven platform for programming solutions, freelancing services, developer documentation, and AI-powered Q&A. Collaborate and learn with developers worldwide."
        />
        <link rel="icon" href="/newLogo.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          property="og:title"
          content="Learn To Code - Programming Help, Freelancing, and Developer Resources"
        />
        <meta
          property="og:description"
          content="Join our community-driven platform for programming solutions, freelancing services, developer documentation, and AI-powered Q&A. Collaborate and learn with developers worldwide."
        />
        <meta
          property="og:image"
          content="https://thelearntocode.com/newLogo.png"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thelearntocode.com/" />{" "}
        {/* Replace with your site's full URL */}
        <meta
          property="og:title"
          content="Learn To Code - Programming Help, Freelancing, and Developer Resources"
        />
        <meta
          property="og:description"
          content="Join our community-driven platform for programming solutions, freelancing services, developer documentation, and AI-powered Q&A. Collaborate and learn with developers worldwide."
        />
        <meta
          property="og:image"
          content="https://thelearntocode.com/newLogo.png"
        />
        <meta
          name="twitter:card"
          content="Join our community-driven platform for programming solutions, freelancing services, developer documentation, and AI-powered Q&A. Collaborate and learn with developers worldwide."
        />
        <meta name="twitter:url" content="https://thelearntocode.com/" />{" "}
        {/* Replace with your site's full URL */}
        <meta
          name="twitter:title"
          content="Learn To Code - Programming Help, Freelancing, and Developer Resources"
        />
        <meta
          name="twitter:description"
          content="Join our community-driven platform for programming solutions, freelancing services, developer documentation, and AI-powered Q&A. Collaborate and learn with developers worldwide."
        />
        <meta
          name="twitter:image"
          content="https://thelearntocode.com/newLogo.png"
        />{" "}
        {/* Replace with the full URL to the image */}
      </Head>
      <body className={urbanist.className}>
        <Toaster />
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
