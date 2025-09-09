import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import ErrorBoundary from "@/components/ErrorBoundary";
 
export const metadata: Metadata = {
  title: "Demo componenti",
  description: "Demo componenti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="bg-gray-50 min-h-screen">
        <ErrorBoundary>
          <header className="bg-white shadow-md border-b">  
            Demo componenti
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between py-4">
                <h1 className="text-2xl font-bold text-gray-900">
                Test Componenti
                </h1>
                <nav className="flex space-x-4">
                <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
                <Link href="/posts" className="text-blue-600 hover:text-blue-800">Posts</Link>
                <Link href="/users" className="text-blue-600 hover:text-blue-800">Utenti</Link>
                </nav>
              </div>
            </div>
          </header>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </main>          
        </ErrorBoundary>
      </body>
    </html>
  );
}
