import Link from 'next/link';

const socialLinks = [
  {
    name: 'ENS',
    url: 'https://app.ens.domains/piczadev.eth',
    icon: '🌐'
  },
  {
    name: 'Base',
    url: 'https://www.base.org/name/piczadev',
    icon: '🔷'
  },
  {
    name: 'SNS',
    url: 'https://sns.id/domain?domain=pizzalabs',
    icon: '🔗'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/PiczaDev',
    icon: '📱'
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/PiczaDev',
    icon: '𝕏'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/NON-TITTLE',
    icon: '💻'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yahir-pizzadev',
    icon: '👔'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/yha.piczadev/',
    icon: '📸'
  },
  {
    name: 'Warpcast',
    url: 'https://warpcast.com/piczadev.eth',
    icon: '🎭'
  }
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-sm shadow-lg hover:shadow-blue-500/20"
          title={link.name}
        >
          <span className="text-lg">{link.icon}</span>
          <span className="hidden md:inline">{link.name}</span>
        </a>
      ))}
    </div>
  );
} 