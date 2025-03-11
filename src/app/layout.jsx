import RootLayout from "@/components/RootLayout";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: {
    template: "Rahma",
    default: "Rahma",
  },
  description: "A Vibrant Hub for Spiritual, Educational, and Community Growth!",
  openGraph: {
    title: "Rahma Community Center",
    description: "A Vibrant Hub for Spiritual, Educational, and Community Growth!",
    url: "https://rahmacc.com", // Replace with your actual URL
    siteName: "Rahma Community Center",
    images: [
      {
        url: "/og-image.jpg", // This image should be placed in the public folder
        width: 1200,
        height: 630,
        alt: "Rahma Community Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahma Community Center",
    description: "A Vibrant Hub for Spiritual, Educational, and Community Growth!",
    images: ["/og-image.jpg"], // Same image as OG
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        {/* Givebutter Scripts */}
        <Script id="givebutter-init" strategy="afterInteractive">
          {`
            window.Givebutter=window.Givebutter||function(){(Givebutter.q=Givebutter.q||[]).push(arguments)};Givebutter.l=+new Date;
            window.Givebutter('setOptions',
            {
                "accountId": "VDxtggmGKgHUa9Lh"
            });
          `}
        </Script>
        <Script 
          src="https://js.givebutter.com/elements/latest.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
