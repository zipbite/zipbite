import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Zipbyte",
  description: "I'm a developer, designer, and creator. I make things for the web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`antialiased`}
      >
        <main className="max-w-7xl mx-auto">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
