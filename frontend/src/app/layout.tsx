import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Food Rescue | Save Food, Feed People',
  description: 'Connecting restaurants with NGOs and volunteers to reduce food waste.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Header />
        <main className="min-h-screen pt-20 pb-16 px-4 md:px-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
