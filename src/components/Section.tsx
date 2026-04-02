import { ReactNode } from "react";
import { Container } from "@/components/Container";

type SectionProps = {
  title?: string;
  eyebrow?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  title,
  eyebrow,
  intro,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`section ${className}`.trim()}>
      <Container>
        {(eyebrow || title || intro) && (
          <div className="section-heading">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? <h2>{title}</h2> : null}
            {intro ? <p className="section-intro">{intro}</p> : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

