import "./globals.css";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

export const metadata: Metadata = {
  title: "PROSOTECH | Engineering Reliable Infrastructure",
  description:
    "PROSOTECH delivers telecom, IT systems, cybersecurity, and renewable energy solutions from Bujumbura.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
