// import type React from "react";
// import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
// import { Analytics } from "@vercel/analytics/next";
// import { Suspense } from "react";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "HIG Production House - Professional Video & Photography Services",
//   description:
//     "Premium film shooting, wedding films, music videos, and photography services in Dehradun. Book your professional production today.",
//   generator: "v0.app",
//   keywords: "video production, wedding films, music videos, photography, Dehradun, film shooting",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Google tag (gtag.js) */}
//         <script async src="https://www.googletagmanager.com/gtag/js?id=G-M8M4TJ4Q75"></script>
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-M8M4TJ4Q75');
//             `,
//           }}
//         />
//       </head>
//       <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
//         <Suspense fallback={null}>{children}</Suspense>
//         <Analytics />
//       </body>
//     </html>
//   );
// }















import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "HIG Production House - Professional Video & Photography Services",
  description:
    "Premium film shooting, wedding films, music videos, and photography services in Dehradun. Book your professional production today.",
  generator: "v0.app",
  keywords:
    "video production, wedding films, music videos, photography, Dehradun, film shooting",

  // ✅ Added favicon + PWA icons
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" }, // browser tab favicon
      { url: "/favicon.ico", sizes: "any" },   // fallback for older browsers
    ],
    apple: { url: "/logo.png", sizes: "180x180" }, // iOS home screen
    shortcut: "/logo.png",
  },

  // ✅ Optional: manifest.json for PWA support
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M8M4TJ4Q75"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M8M4TJ4Q75');
            `,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
