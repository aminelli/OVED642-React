import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo Api",
  description: "Demo Api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>

        <nav className="nav">
          <div className="nav-container">
            <h1>Demo Api</h1>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/streaming">Streaming</Link> 
              <Link href="/posts">Posts</Link>   
              <Link href="/todos">Todos</Link> 
              <Link href="/users">Users</Link>              
            </div>
          </div>
        </nav>

        <main className="main">
          {children}
        </main>
      </body>
    </html>
  );
}
