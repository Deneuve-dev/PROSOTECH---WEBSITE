import "./globals.css";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

export const metadata = {
  title: "PROSOTECH | Telecom, IT & Energy Solutions in Burundi",
  description:
    "PROSOTECH provides telecom infrastructure, IT systems, cybersecurity, renewable energy and technical training solutions in Bujumbura and across East Africa.",

  keywords: [
    "telecom Burundi",
    "IT company Burundi",
    "cybersecurity Burundi",
    "solar energy Burundi",
    "technical training Burundi",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "PROSOTECH Engineering Solutions",
    description:
      "Telecom, IT systems, cybersecurity and energy solutions in Burundi.",
    url: "https://Prosotech.netlify.app", // 👉 remplace par ton vrai domaine
    siteName: "PROSOTECH",
    images: [
      {
        url: "/images/prosotechlogo.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className="font-sans">
        <Navbar />
        <div className="">{children}</div>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#0F172A",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }}
        />
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
