import { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 min-h-[48px] min-w-[48px]">
              <img
                src="/mely/logo.png"
                alt="Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">Pizzalabs Blog</span>
            </Link>
            <div className="flex space-x-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900 min-h-[48px] min-w-[48px] flex items-center justify-center"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-gray-900 min-h-[48px] min-w-[48px] flex items-center justify-center"
              >
                About
              </Link>
              <a 
                href="https://mastodon.social/@amazing_pizzadev" 
                rel="me"
                className="text-gray-600 hover:text-gray-900 min-h-[48px] min-w-[48px] flex items-center justify-center"
              >
                Mastodon
              </a>
              <a 
                href="https://me.pizza.blog" 
                rel="me"
                className="text-gray-600 hover:text-gray-900 min-h-[48px] min-w-[48px] flex items-center justify-center"
              >
                Me
              </a>
            </div>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} Pizzalabs Blog. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://mastodon.social/@amazing_pizzadev" 
                rel="me"
                className="text-gray-500 hover:text-gray-900"
              >
                Mastodon
              </a>
              <a 
                href="https://me.pizza.blog" 
                rel="me"
                className="text-gray-500 hover:text-gray-900"
              >
                Me
              </a>
              <a 
                href="https://pizzalabs.blog" 
                className="text-gray-500 hover:text-gray-900"
              >
                Main Site
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Nostr: npub1vpld3kt3w4l86ajhzn6jklfmc3uerhgn8dxa9g02yqgxekhl808qd4vy6g
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
