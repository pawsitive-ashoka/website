import type { Metadata } from "next";
import { Modak, Varela_Round, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const modak = Modak({
  variable: "--font-modak",
  subsets: ["latin"],
  weight: "400",
});

const varelaRound = Varela_Round({
  variable: "--font-varela-round",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pawsitive | Animal Club at Ashoka University",
  description: "Pawsitive is an animal welfare and appreciation club at Ashoka University, dedicated to creating a compassionate community for all creatures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${modak.variable} ${varelaRound.variable} ${montserrat.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
