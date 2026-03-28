import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trivoya Travels | Taj Mahal & Golden Triangle Tours",
  description: "Explore India with Trivoya Travels. Private Taj Mahal tours, Golden Triangle packages and guided experiences across Agra, Delhi and Jaipur.",
  keywords:[
    "Taj Mahal tours",
    "Golden Triangle tour",
    "Agra tour packages",
    "India travel tours",
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
