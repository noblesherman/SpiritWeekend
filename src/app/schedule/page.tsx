import { Metadata } from "next";
import { Section } from "@/components/Section";
import { scheduleItems } from "@/data/schedule";

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
    <Section
      eyebrow="Event Schedule"
      title="A sample rhythm for the weekend."
      intro="The schedule is still hardcoded for now, but the structure is already separated from the page so it stays easy to edit."
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
                <article className="schedule-row" key={item.id}>
                  <div>
                    <p className="schedule-time">{item.time}</p>
                    <h3>{item.title}</h3>
                  </div>
                  <div>
                    <p className="schedule-location">{item.location}</p>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Section>
  );
}
