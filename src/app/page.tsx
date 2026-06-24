import { Metadata } from "next";
import Image from "next/image";
import { BannerSection } from "@/components/BannerSection";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { RegistrationSection } from "@/components/RegistrationSection";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <BannerSection />

      <div className="home-image-pair">
        <div className="home-image-pair-inner">
          <div className="home-image-pair-item">
            <Image
              src="/Three_Vikings.JPG"
              alt="Three douche bags - Kellerman's ides"
              width={641}
              height={335}
              className="home-image-pair-img"
            />
          </div>
          <div className="home-image-pair-item">
            <Image
              src="/Three_Douche_Bags.JPG"
              alt="Three vikings"
              width={945}
              height={495}
              className="home-image-pair-img"
            />
          </div>
        </div>
      </div>

      <section className="hero">
        <Container className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Spirit Weekend 2026</p>
            <h1>Spirit Weekend 2026</h1>
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

      <RegistrationSection />

    </>
  );
}
