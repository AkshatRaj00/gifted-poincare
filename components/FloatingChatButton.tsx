// src/app/layout.tsx
import './globals.css'; // Global styles import
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Default font, can be changed later
import Header from '../components/Header'; // Header component import karo
import Footer from '../components/Footer'; // Footer component import karo
import { AuthProvider } from '../components/AuthContext'; // AuthProvider import karo

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'OnePersonAI',
  description: 'Your Mind\'s Mirror. Authentic AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AuthProvider> {/* AuthProvider ko poori body ke content ko wrap karna hai */}
          <Header /> {/* Header component ab AuthProvider ke andar hai */}
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}