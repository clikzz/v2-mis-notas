import { Nunito } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
