import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ringtones Glitch",
  description: "Welcome to RingtonesGlitch – Your Ultimate Destination for Free Ringtones!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4CMRN0LW75"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4CMRN0LW75');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-medium  bg-green-50/50 dark:text-white`}
        // {`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-green-50 to-green-100'}`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
