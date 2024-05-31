import type { Metadata } from 'next';
// import { Inter } from "next/font/google";

// Import font from the font.ts file in the styles folder
import { neue } from './(root)/styles/fonts';
import { AuthProvider } from '@/context/AuthProvider';
import './globals.css';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Student Mentorship Platform',
  description: `Connect with experienced mentors in your field, gain valuable insights, 
  and explore exciting opportunities.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={neue.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
