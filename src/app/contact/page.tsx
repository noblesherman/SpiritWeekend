import { Metadata } from "next";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="A simple contact page with enough detail to feel real."
      intro="The form is front-end only for now, but the layout is ready for a real contact flow later."
    >
      <div className="contact-layout">
        <div className="contact-copy">
          <h3>Need a few details before the weekend?</h3>
          <p>
            Reach out about registration, volunteer opportunities, travel
            details, or what to expect when you arrive.
          </p>
          <div className="rule-list compact">
            <div>
              <span className="rule-label">Email</span>
              <p>hello@spiritweekend2026.com</p>
            </div>
            <div>
              <span className="rule-label">Phone</span>
              <p>(555) 123-2026</p>
            </div>
            <div>
              <span className="rule-label">Response time</span>
              <p>Usually within one or two business days.</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Your name" type="text" />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="you@example.com"
            type="email"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="How can we help?"
            rows={6}
          />

          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </Section>
  );
}
