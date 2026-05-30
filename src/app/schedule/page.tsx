import { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { scheduleItems } from "@/data/schedule";
import { BannerSection } from "@/components/BannerSection";
import { RegistrationSection } from "@/components/RegistrationSection";

export const metadata: Metadata = {
  title: "Schedule",
};

export default function SchedulePage() {
  const groupedItems = scheduleItems.reduce<Record<string, typeof scheduleItems>>(
    (groups, item) => {
      const [day] = item.time.split(",");

      if (!groups[day]) {
        groups[day] = [];
      }

      groups[day].push(item);
      return groups;
    },
    {},
  );

  return (
    <>
    <BannerSection />
    <Section
      eyebrow="Schedule"
      title="General Spirit Weekend Schedule"
      intro="There will be plenty of good food, fun, Masculine competition, Saturday night FIRE, and Sunday final Circle."
    >
      <div className="day-groups">
        {Object.entries(groupedItems).map(([day, items]) => (
          <section className="day-block" key={day}>
            <div className="day-heading">
              <p className="eyebrow">{day}</p>
              <h3>{day} Schedule</h3>
            </div>
            <div className="schedule-list">
              {items.map((item) => (
                <article className={`schedule-row${item.image ? ' has-image' : ''}`} key={item.id}>
                  <div>
                    <p className="schedule-time">{item.time}</p>
                    <h3>{item.title}</h3>
                  </div>
                  <div>
                    <p className="schedule-location">{item.location}</p>
                    <p>{item.description}</p>
                  </div>
                  {item.image && (
                    <div className="schedule-image">
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        width={240}
                        height={160}
                      />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Section>
    <RegistrationSection />
    </>
  );
}
