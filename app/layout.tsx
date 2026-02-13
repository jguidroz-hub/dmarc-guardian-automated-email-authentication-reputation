import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DMARC Guardian - Automated Email Authentication & Reputation',
  description: 'Value Proposition: Simplifies DMARC, SPF, and DKIM setup and continuous monitoring for small to medium businesses, preventing email spoofing, improving deliverability, and protecting sender reputation against cyber threats.

Target Customer: SMBs, e-commerce stores, marketing agencies, and solo founders who rely on email for communication and need to secure their domain.

---
Category: MarTech
Target Market: SMBs, e-commerce stores, marketing agencies, and solo founders who rely on email for communication and need to secure their domain.
Source Hypothesis ID: 28bd5406-713c-4c7f-a058-87bfb0a5def1
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">DMARC Guardian - Automated Email Authentication & Reputation</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
