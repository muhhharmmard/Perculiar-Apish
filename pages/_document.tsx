import { Html, Head, Main, NextScript } from 'next/document'
import eruda from "eruda"
import Script from "next/script"
export default function Document() {
  return (
    <Html>
      <Head lang="en">
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          strategy="beforeInteractive"
        >
  {` const el = document.createElement('div');
document.body.appendChild(el);

eruda.init({
    container: el,
    //tool: ['console', 'elements'],
    useShadowDom: true,
    autoScale: true,
    defaults: {
        displaySize: 300,
        transparency: 0.9,
        theme: 'Monokai Pro'
    }
});`}

        </Script>
      </body>
    </Html>
  )
} 