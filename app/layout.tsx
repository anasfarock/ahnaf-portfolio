// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Ahnaf Farooq - Photography Portfolio',
  description: 'Professional photography portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scroll-smooth dark:bg-black bg-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
