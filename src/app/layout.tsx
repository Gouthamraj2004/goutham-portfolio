import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gouthamraj — 3D Artist & 3D Animator",
  description:
    "Portfolio of Gouthamraj R, an aspiring 3D Artist and 3D Animator focused on Blender, 3D modeling, hard-surface modeling, materials, lighting, rendering and game-ready assets.",
  keywords: [
    "Gouthamraj",
    "Gouthamraj R",
    "3D Artist",
    "3D Animator",
    "Blender",
    "3D Modeling",
    "Hard-Surface Modeling",
    "Materials & Shaders",
    "Lighting & Rendering",
    "Modifiers",
    "3D Animation",
    "Game-Ready Assets",
    "Portfolio",
  ],
  authors: [{ name: "Gouthamraj R" }],
  openGraph: {
    title: "Gouthamraj — 3D Artist & 3D Animator",
    description:
      "Portfolio of Gouthamraj R, an aspiring 3D Artist and 3D Animator focused on Blender, 3D modeling, hard-surface modeling, materials, lighting, rendering and game-ready assets.",
    type: "website",
    locale: "en_US",
    siteName: "Gouthamraj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gouthamraj — 3D Artist & 3D Animator",
    description:
      "Portfolio of Gouthamraj R, an aspiring 3D Artist and 3D Animator focused on Blender, 3D modeling, hard-surface modeling, materials, lighting, rendering and game-ready assets.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg-primary text-text-primary font-body">
        {children}
      </body>
    </html>
  );
}
