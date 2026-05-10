export type ScheduleItem = {
  id: number;
  time: string;
  title: string;
  location: string;
  description: string;
};

// Keeping event data in its own file makes the page components easier to read.
// Later, this could come from a CMS, API, or database.
export const scheduleItems: ScheduleItem[] = [
  {
    id: 3,
    time: "Saturday, 9:00 AM",
    title: "Registration",
    location: "Morning Admin Table",
    description:
      "Reg Form and Waiver.",
  },
  {
    id: 4,
    time: "Saturday, 2:00 AM",
    title: "Hit the Sack",
    location: "Tents",
    description:
      "Good night ladies.",
  },
  {
    id: 5,
    time: "Sunday, 5:00 AM",
    title: "Reveille",
    location: "Tents",
    description:
      "Drop your Cocks and grab your Socks!",
  },
  {
    id: 6,
    time: "Sunday, 12:00 PM",
    title: "Strike",
    location: "Site",
    description:
      "Leave it better than you found it.",
  },
];

