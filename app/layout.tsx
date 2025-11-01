// app/layout.tsx
import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Ahnaf Farooq',
  description: 'Professional photography portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="scroll-smooth dark:bg-black bg-white min-h-screen">
        {children}
      </body>
    </html>
  );
}