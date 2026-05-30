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
              Spirit Weekend is a masculine, three-dimensional event for Sterling Men’s Weekend graduates only.<br /><br />
              It has a storied legacy and takes place on over 400 acres of Masculine Freedom.<br /><br />
              Spirit Weekend is a powerful two day camping experience with your Sterling brothers designed to ignite your enthusiasm and stoke your Spirit. You will have fun, feast, and engage in outrageous competition as only a Man can.
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
                <strong>Sat. August 15th to Sun. August 16th</strong>
              </div>
              <div>
                <span>Place</span>
                <strong>Sandisfield, MA 01255</strong>
              </div>
              <div>
                <span>Cost</span>
                <strong>$100</strong>
              </div>
              <div>
                <span>Context</span>
                <strong>I am a fucking Sterling Man!</strong>
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
                  href="https://app.tickettailor.com/events/spiritweekend20261/2222583"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary pay-here-btn"
                >
                  Pay Here
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
