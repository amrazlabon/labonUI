import "../../src/index.scss";
import NoSsr from "@/utils/NoSsr";
import MainProvider from "./MainProvider";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/assets/images/Logo.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/assets/images/Logo.png" type="image/x-icon" />
        <title>Home Blood Test Booking | Labon.ai | Kerala | India</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet" />
        {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlc4qVGHgErq3Hngdi-XTpOPYlg9wox-I"></script> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KN7KEEJHQM" strategy="afterInteractive"></Script>
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KN7KEEJHQM');
          `}
        </Script>

        {/* Google Maps Script */}
        <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlc4qVGHgErq3Hngdi-XTpOPYlg9wox-I"></Script>
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Helvetica+Neue+Condensed:wght@700&display=swap" />

      </head>
      <body suppressHydrationWarning={true}>
        <NoSsr><MainProvider>{children}
          <ToastContainer />
          </MainProvider></NoSsr>
      </body>
    </html>
  );
}