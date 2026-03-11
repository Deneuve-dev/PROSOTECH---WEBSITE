import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
