import RootLayout from "@/components/RootLayout";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Rahma Community Center",
    default: "Rahma Community Center",
  },
  description: "A Vibrant Muslim Hub at Mill Creek, WA for Spiritual, Educational, and Community Growth!",
  keywords: ["Rahma community center", "islamic center", "RCC Mill Creek", "RCC spiritual growth", "Islamic education", "Mill creek community events"],
  metadataBase: new URL("https://rahmacc.com"),
  alternates: {
    canonical: "https://rahmacc.com", // This will be overridden by page-specific canonicals
  },
  openGraph: {
    title: "Rahma Community Center",
    description: "A Vibrant Muslim Hub at Mill Creek, WA for Spiritual, Educational, and Community Growth!",
    url: "https://rahmacc.com", // Replace with your actual URL
    siteName: "Rahma Community Center",
    images: [
      {
        url: "/og-image.jpg", // This image should be placed in the public folder
        width: 1200,
        height: 630,
        alt: "Rahma Community Center - Mill Creek's Islamic hub for spiritual and community growth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahma Community Center",
    description: "A Vibrant Muslim Hub at Mill Creek, WA for Spiritual, Educational, and Community Growth!",
    images: ["/og-image.jpg"], // Same image as OG
    creator: "@rahmacc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rahma Community Center",
              "url": "https://rahmacc.com",
              "logo": "https://rahmacc.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/rahmacc.wa"
              ],
            })
          }}
        />
      </head>
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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0FYLSYSDYW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0FYLSYSDYW');
          `}
        </Script>
      </body>
    </html>
  );
}
