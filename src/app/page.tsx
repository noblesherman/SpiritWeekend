import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { scheduleItems } from "@/data/schedule";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  const featuredEvents = scheduleItems.slice(0, 3);

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

      <Section
        eyebrow="The Weekend"
        title="Simple structure, a little warmth, and plenty of room to grow."
        intro="The goal here is not to make the site feel overdesigned. It should feel calm, clear, and like a real event people would want to show up for."
      >
        <div className="note-grid">
          <article className="note">
            <h3>Shared time</h3>
            <p>
              The best parts of a weekend like this usually happen between the
              big moments, so the schedule leaves room for both.
            </p>
          </article>
          <article className="note">
            <h3>Good pacing</h3>
            <p>
              Mornings can feel focused, afternoons can open up, and the
              evenings can carry a little more energy.
            </p>
          </article>
          <article className="note">
            <h3>Easy to adapt</h3>
            <p>
              The content here is intentionally plain enough that you can swap
              in the real details without untangling a complicated design.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Weekend Preview"
        title="A few moments from the current sample schedule."
        intro="The homepage pulls directly from the schedule data file, so the preview stays tied to the real schedule page."
      >
        <div className="timeline-preview">
          {featuredEvents.map((item) => (
            <article className="timeline-item" key={item.id}>
              <p className="schedule-time">{item.time}</p>
              <div>
                <h3>{item.title}</h3>
                <p className="schedule-location">{item.location}</p>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Next Step"
        title="Start with the public site, then add registration."
        intro="The cleanest way to build this is to make the pages feel right first, then move into Prisma, Stripe Checkout, and the payment webhook."
      >
        <div className="callout">
          <div>
            <p>
              A good first pass is simple: tighten the copy, add a register
              page, and keep the visual language restrained.
            </p>
          </div>
          <Button href="/contact">Contact the Team</Button>
        </div>
      </Section>
    </>
  );
}
