import { Container } from "@/components/Container";

export function RegistrationSection() {
  return (
    <section className="registration">
      <Container>
        <div className="registration-inner">
          <div className="registration-copy">
            <p className="eyebrow">Register</p>
            <h2>Secure Your Spot</h2>
            <p>Sterling Men&apos;s Weekend graduates only. Limited spots available.</p>
            <div className="registration-buttons">
              <a
                // href="https://app.tickettailor.com/events/spiritweekend20261/2222583"
                href="https://buy.stripe.com/28E14gdbTcM88Z4d643ks01"
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
  );
}
