import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: 'services.html', label: 'Services' },
  { href: '/rebates', label: 'Rebates' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand">
          Apex Heat Pumps BC
        </Link>
        <nav aria-label="Main navigation">
          <ul className="site-nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="site-nav__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
