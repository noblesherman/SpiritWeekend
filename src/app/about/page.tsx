import { Metadata } from "next";
import { Section } from "@/components/Section";
import { BannerSection } from "@/components/BannerSection";
import { RegistrationSection } from "@/components/RegistrationSection";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
    <BannerSection />
    <Section
      eyebrow="About"
      title="What to Expect"
      intro="Connect with Sterling men, Celebrate the Well-Diggers, and Honor our Fallen Warriors in a camping weekend that will bring you face to face with your power, your sense of connection to your Men, and your drive to be the Man You Always Wanted to Be..  Practice the principles of the Sterling Men’s Weekend on over 400 acres of Masculine Freedom."
    >
      <div className="editorial-grid">
        <article className="editorial-lead">
          <h3>Purpose</h3>
          <p>
            Transform the Men who participate with a weekend they'll never forget. Give the Men a space to let go of the rules and what society tells us we have to be. Understand and become the Three Dimensional Man. Bring the FIRE home to light up your families, friends, and communities.
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

        <div className="rule-group-heading"><span>What to Bring</span></div>
        <div>
          <span className="rule-label">Highly Recommended</span>
          <div><h3>The List</h3><ul>
            <li>Tent</li>
            <li>Sleeping bag or blankets</li>
            <li>Folding camp chair</li>
            <li>Bug repellant</li>
            <li>Extra sanitizer / disinfectant wipes / vagisil</li>
            <li>Your Balls (All of them)</li>
            <li>Bathing suit or Birthday suit</li>
            <li>Towel</li>
            <li>Musical instruments (guitar, bongos, etc)</li>
            <li>1 gallon drinking water (no water on the site)</li>
            <li>Pocket knife</li>
            <li>Work gloves</li>
            <li>Water shoes</li>
            <li>Spare socks</li>
            <li>Blindfold</li>
            <li>Flashlight</li>
            <li>Sun screen</li>
            <li>Snacks</li>
          </ul></div>
        </div>

        <div className="rule-group-heading"><span>Additionally</span></div>
        <div>
          <span className="rule-label">Do Your Best</span>
          <div><h3>The Short List</h3><p>You are encouraged to bring tools for landscaping work, including a sharpened chainsaw, loppers, brush cutters, a gas-powered weed whacker, or any other brush clearing equipment to facilitate our site cleanup.
</p></div>
        </div>

      </div>

    </Section>
    <RegistrationSection />
    </>
  );
}
