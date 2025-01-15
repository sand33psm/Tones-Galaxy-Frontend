import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import AdSense from "@/components/AdSense/AdSense";

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
  title: "Ringtones Glitch - Free Ringtones for Everyone!!!!!",
  description: "Explore Ringtones Glitch – your ultimate destination to find and download free ringtones. Download, upload, and share the best ringtones online!",
  keywords: "free ringtones, ringtone downloads, upload ringtones, ringtone website, mobile ringtones",
  url: "https://www.ringtonesglitch.com",
  image: "/meta-image.png", // Replace with the actual path to your logo or banner.
  image: "/ringtonesglitch-logo.jpeg"
};

export default function RootLayout({ children, metadata: pageMetadata = {}}) {
  const mergedMetadata = {
    ...metadata,
    ...pageMetadata,
    title: pageMetadata.title || metadata.title.default,
  };

  return (
    <html lang="en">
      <head>
        <AdSense pId="6105325142498306"/>
        <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={mergedMetadata.description} />
          <meta name="keywords" content={mergedMetadata.keywords} />
          <meta name="author" content="Ringtones Glitch Team" />
          <meta name="robots" content="index, follow" />
          
          {/* Open Graph Metadata */}
          <meta property="og:title" content={mergedMetadata.title} />
          <meta property="og:description" content={mergedMetadata.description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={mergedMetadata.url} />
          <meta property="og:image" content={mergedMetadata.url + mergedMetadata.image} />

          {/* Twitter Card Metadata */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={mergedMetadata.title} />
          <meta name="twitter:description" content={mergedMetadata.description} />
          

          {/* Google Analytics */}
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-medium bg-green-50/50 dark:text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
