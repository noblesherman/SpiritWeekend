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
    id: 1,
    time: "Friday, 6:00 PM",
    title: "Welcome Rally",
    location: "Main Arena",
    description:
      "Kick off the weekend with music, introductions, and a quick look at what is ahead.",
  },
  {
    id: 2,
    time: "Friday, 8:00 PM",
    title: "Team Mixer",
    location: "River Hall",
    description:
      "Meet other students, leaders, and volunteers in a relaxed social space with snacks and games.",
  },
  {
    id: 3,
    time: "Saturday, 9:00 AM",
    title: "Morning Session",
    location: "Main Arena",
    description:
      "Start the day with a keynote message, live music, and community announcements.",
  },
  {
    id: 4,
    time: "Saturday, 1:30 PM",
    title: "Workshops and Breakouts",
    location: "Learning Center",
    description:
      "Choose from hands-on sessions covering leadership, service, creativity, and team building.",
  },
  {
    id: 5,
    time: "Saturday, 7:00 PM",
    title: "Evening Celebration",
    location: "Outdoor Stage",
    description:
      "A high-energy night event with music, stories, and a shared celebration under the lights.",
  },
  {
    id: 6,
    time: "Sunday, 10:00 AM",
    title: "Closing Gathering",
    location: "Main Arena",
    description:
      "Wrap up the weekend with final reflections, thank-yous, and a clear sendoff for the road home.",
  },
];

