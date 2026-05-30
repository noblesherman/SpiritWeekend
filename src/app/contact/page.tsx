import { Metadata } from "next";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { BannerSection } from "@/components/BannerSection";
import { RegistrationSection } from "@/components/RegistrationSection";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
    <BannerSection />
    <Section
      eyebrow="Contact"
      title="Questions? Get in touch."
      intro="Reach out about registration, volunteer opportunities, or clarification."
    >
      <div className="contact-layout">
        <div className="contact-copy">
          <h3></h3>
          <p>
            Reach out about registration, volunteer opportunities, travel
            details, or what to expect when you arrive.
          </p>
          <div className="rule-list compact">
            <div>
              <span className="rule-label">Email:</span>
              <p></p>
              <p>robkellerman@gmail.com<br />
              derek.ottman@zenfuzz.net</p>
            </div>
            <div>
              <span className="rule-label">Response Time:</span>
              <p>Within 24 hours.</p>
            </div>
            <div>
              <span className="rule-label">Refunds:</span>
              <p>None. Your payment is an unalterable commitment. Support Spirit Weekend!</p>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/meenpkol"
          method="POST"
        >
          <input type="hidden" name="_next" value="https://spiritweekend2026.com/contact" />
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
    <RegistrationSection />
    </>
  );
}
