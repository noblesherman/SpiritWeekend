import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Container className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Spirit Weekend 2026</p>
            <h1>Spirit Weekend 2026</h1>
            <div className="hero-image">
              <Image
                src="/paul-revere.jpg"
                alt="Paul Revere galloping on horseback — The Midnight Ride"
                width={480}
                height={508}
                priority
              />
            </div>
            <p className="hero-text">
              Spirit Weekend brings students together for three days of sessions,
              music, workshops, and space to actually slow down long enough to
              connect.
            </p>
            <div className="hero-actions">
              <Button href="/schedule">View the Schedule</Button>
              <Button href="/about" variant="secondary">
                About the Weekend
              </Button>
              <Button href="/contact" variant="secondary">
                Contact the Team
              </Button>
            </div>
          </div>
          <aside className="hero-panel">
            <p className="hero-panel-label">At a glance</p>
            <div className="hero-facts">
              <div>
                <span>Date</span>
                <strong>October 16 to 18</strong>
              </div>
              <div>
                <span>Place</span>
                <strong>Cedar Ridge Conference Grounds</strong>
              </div>
              <div>
                <span>Format</span>
                <strong>Sessions, workshops, meals, and late-night hangs</strong>
              </div>
            </div>
          </aside>
        </Container>
      </section>

    </>
  );
}
