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
      
      <div className="min-h-screen">
        <header className="border-b border-gray-700/30 header-gradient glass">
          <nav className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex flex-col items-center space-y-4">
              <Link href="/" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-300 hover:to-purple-300 transition-all float">
                ElPicza
              </Link>
              <div className="flex space-x-6">
                <a 
                  href="https://mastodon.social/@amazing_pizzadev" 
                  rel="me noopener noreferrer"
                  className="nav-link"
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
          <div className="fade-in">
            {children}
          </div>
        </main>

        <footer className="border-t border-gray-700/30 mt-12 header-gradient glass">
          <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} ElPicza. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
