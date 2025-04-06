import Head from 'next/head';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'ElPicza Blog' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Developer and Crypto Content Creator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="fediverse:creator" content="@amazing_pizzadev@mastodon.social" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
        <header className="border-b border-gray-700">
          <nav className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex flex-col items-center space-y-4">
              <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition-colors">
                ElPicza
              </Link>
              <div className="flex space-x-6">
                <a 
                  href="https://mastodon.social/@amazing_pizzadev" 
                  rel="me noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                  target="_blank"
                >
                  Mastodon
                </a>
              </div>
              <SocialLinks />
            </div>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="border-t border-gray-700 mt-12">
          <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} ElPicza. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
