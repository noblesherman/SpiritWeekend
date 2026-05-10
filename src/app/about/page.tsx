import { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Section
      eyebrow="About"
      title="What to Expect"
      intro="This page should read less like a brochure and more like an honest invitation. A little context goes a long way."
    >
      <div className="editorial-grid">
        <article className="editorial-lead">
          <h3>Purpose</h3>
          <p>
            Transform the men who participate and give them a weekend they'll never forget. Give the men a space to let go of the rules and what society tells us what we have to be. Understand the Three Dimensional man.
          </p>
        </article>
        <article className="note">
          <h3>Sterling Men's Weekend Graduates ONLY!</h3>
          <p>
            A Sterling Men's Weekend graduate ONLY event.
          </p>
        </article>
      </div>

      <div className="rule-list">

        <div className="rule-group-heading"><span>What to Expect</span></div>
        <div>
          <span className="rule-label">XXX</span>
          <div><h3>Weekend Technology</h3><p>Get your weekend! Bring it home and be the man you always wanted to be.</p></div>
        </div>
        <div>
          <span className="rule-label">XXX</span>
          <div><h3>Food</h3><p>Holy shit YES! Cheffy Shea is ON DUTY!</p></div>
        </div>
        <div>
          <span className="rule-label">XXX</span>
          <div><h3>Games</h3><p>Unpredictable Mothah-Fuckery.</p></div>
        </div>

        <div className="rule-group-heading"><span>What to Bring</span></div>
        <div>
          <span className="rule-label">XXX</span>
          <div><h3></h3><p></p></div>
        </div>

        <div className="rule-group-heading"><span>Logistics</span></div>
        <div>
          <span className="rule-label">XXX</span>
          <div><h3>Duration</h3><p>All day Saturday, half day Sunday.</p></div>
        </div>

      </div>

    </Section>
  );
}
