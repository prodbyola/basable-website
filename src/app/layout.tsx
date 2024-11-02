import "../App.css";
import type { Metadata } from 'next'
 
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
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
