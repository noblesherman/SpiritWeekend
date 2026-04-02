import Link from "next/link";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section
      eyebrow="Page Not Found"
      title="That page does not exist"
      intro="If you typed the address manually, check the URL and try again."
    >
      <div className="callout">
        <p>
          Head back to the homepage and continue exploring the Spirit Weekend
          starter site.
        </p>
        <Button href="/">Return Home</Button>
        <p>
          Or visit the <Link href="/schedule">schedule page</Link>.
        </p>
      </div>
    </Section>
  );
}

