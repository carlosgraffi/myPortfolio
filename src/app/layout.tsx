import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const thunder = localFont({
  src: "../../public/fonts/right-grotesk/RightGrotesk-Black.woff2",
  variable: "--font-thunder",
  weight: "900",
});

const thunderFine = localFont({
  src: "../../public/fonts/right-grotesk/RightGrotesk-Fine.woff2",
  variable: "--font-thunder-fine",
  weight: "300",
});

const thunderLight = localFont({
  src: "../../public/fonts/right-grotesk/RightGrotesk-Light.woff2",
  variable: "--font-thunder-light",
  weight: "200",
});

const tostada = localFont({
  src: "../../public/fonts/TOSTADA.woff2",
  variable: "--font-tostada",
  weight: "400",
});

const rethink = localFont({
  src: "../../public/fonts/RethinkSans-Regular.woff2",
  variable: "--font-rethink",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Carlos Graffi - Designer & Climate Tech Builder",
  description: "Designer who builds things with a purpose. Leading product design at Open Earth Foundation, developing tools for climate action.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${thunder.variable} ${thunderFine.variable} ${thunderLight.variable} ${tostada.variable} ${rethink.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}