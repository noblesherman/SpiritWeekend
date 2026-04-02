import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <div>
          <p className="footer-title">Spirit Weekend 2026</p>
          <p className="footer-copy">
            Cedar Ridge Conference Grounds · October 16 to 18
          </p>
        </div>
        <p className="footer-copy">
          Built as a clean starting point for the event site.
        </p>
      </Container>
    </footer>
  );
}
