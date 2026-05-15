import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
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
              <Button href="/schedule" variant="secondary">View the Schedule</Button>
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
                <strong>August 15 to 16</strong>
              </div>
              <div>
                <span>Place</span>
                <strong>Groman Site - Sandisfield, MA</strong>
              </div>
              <div>
                <span>Format</span>
                <strong>Boot Camp / Seminar / Party all roled into one event.</strong>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {/* ── Registration Section ── */}
      <section className="registration">
        <Container>
          <div className="registration-inner">
            <div className="registration-copy">
              <p className="eyebrow">Register</p>
              <h2>Secure Your Spot</h2>
              <p>Sterling Men's Weekend graduates only. Limited spots available.</p>
              <div className="registration-buttons">
                {/* Option A: Link button — opens Ticket Tailor in a new tab */}
                <a
                  href="https://buytickets.at/spiritweekend2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary"
                >
                  Register Now (Link)
                </a>
                {/* Option B: Embedded widget — opens Ticket Tailor in a popup overlay */}
                <a
                  href="https://buytickets.at/spiritweekend2026"
                  className="button button--primary tt-widget-button"
                >
                  Register Now (Widget)
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Ticket Tailor widget script — only needed for the embedded widget button */}
      <Script src="https://js.tickettailor.com/tt_widget.js" strategy="lazyOnload" />

    </>
  );
}
