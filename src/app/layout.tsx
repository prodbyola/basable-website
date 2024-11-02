import "../App.css";
import type { Metadata } from 'next'
import Header from "../components/common/Header";
import Footer from "../components/common/footer";
import { Analytics } from "@vercel/analytics/react";
 
export const metadata: Metadata = {
  title: 'Basable — Free Data Management and Visualization Software',
  description: 'Basable is an open-source software designed to provide comprehensive data management, data visualization, and business insights.',
  applicationName: 'Basable'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <Header />
          {children}
          <Footer />
          <Analytics />
          </div>
      </body>
    </html>
  );
}
