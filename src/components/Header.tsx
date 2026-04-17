import Link from "next/link";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";

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
          <span className="site-title-mark">Spirit Weekend 2026</span>
          <span className="site-title-meta">Sat 09/12 & Sun 09/13, 2026</span>
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
        <ThemeToggle />
      </Container>
    </header>
  );
}
