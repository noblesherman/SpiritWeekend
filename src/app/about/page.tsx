import { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Section
      eyebrow="About the Event"
      title="A clearer picture of what the weekend is meant to feel like."
      intro="This page should read less like a brochure and more like an honest invitation. A little context goes a long way."
    >
      <div className="editorial-grid">
        <article className="editorial-lead">
          <h3>Spirit Weekend is built around presence.</h3>
          <p>
            The idea is simple: gather students in one place, give the weekend a
            strong rhythm, and make space for both the planned moments and the
            unexpected conversations in between.
          </p>
        </article>
        <article className="note">
          <h3>What people can expect</h3>
          <p>
            A mix of large sessions, smaller breakouts, shared meals, and enough
            time to meet people without the schedule feeling packed every hour.
          </p>
        </article>
        <article className="note">
          <h3>Who it is for</h3>
          <p>
            Students, leaders, volunteers, and anyone helping shape the weekend.
            You can adjust the wording later once the real audience and tone are
            locked in.
          </p>
        </article>
      </div>
      <div className="rule-list">
        <div>
          <span className="rule-label">Setting</span>
          <p>Wooded grounds, shared meals, indoor sessions, outdoor breathing room.</p>
        </div>
        <div>
          <span className="rule-label">Tone</span>
          <p>Warm, grounded, and a little more thoughtful than flashy.</p>
        </div>
        <div>
          <span className="rule-label">Purpose</span>
          <p>Create a weekend people remember for how it felt, not just what was on stage.</p>
        </div>
      </div>
    </Section>
  );
}
