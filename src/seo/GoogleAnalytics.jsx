"use client";
import Script from "next/script";

export default function GoogleAnalytics() {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DM6L13TNHD"></Script>
            {/* <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
            </Script> */}

            <Script id="google-analytics" strategy="afterInteractive">

                {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DM6L13TNHD');`}

            </Script>
        </>
    );
}



