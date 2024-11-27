import "./globals.css";
import { Layout } from "@/components/layouts";

export const metadata = {
  title: "Zipbyte",
  description: "Full stack web developer & Tech enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
