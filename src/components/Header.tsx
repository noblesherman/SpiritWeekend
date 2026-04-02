import Link from "next/link";
import { Container } from "@/components/Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link className="site-title" href="/">
          <span className="site-title-mark">Spirit Weekend</span>
          <span className="site-title-meta">October 16 to 18, 2026</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="site-nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
