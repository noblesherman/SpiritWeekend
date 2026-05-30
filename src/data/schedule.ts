export type ScheduleItem = {
  id: number;
  time: string;
  title: string;
  location: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

// Keeping event data in its own file makes the page components easier to read.
// Later, this could come from a CMS, API, or database.
export const scheduleItems: ScheduleItem[] = [

// Sat. August 14th, 2026
  {
    id: 1,
    time: "Saturday, 07:00 AM",
    title: "Registration",
    location: "Morning Admin Table",
    description: ""
  },
  {
    id: 2,
    time: "Saturday, 08:00 AM",
    title: "Breakfast",
    location: "Mess Area",
    description: ""
  },
  {
    id: 3,
    time: "Saturday, 09:00 AM",
    title: "Circle Up",
    location: "Fire Circle",
    description: ""
  },
  {
    id: 4,
    time: "Saturday, 09:30 AM - 08:00 PM",
    title: "Day's Events",
    location: "everywhere",
    description: "masculine competition, events, a feast fit for a king"
  },
  {
    id: 5,
    time: "Saturday, 9:00 PM to 11:00 PM and beyond",
    title: "Jokes and Cigars",
    location: "Fire Circle",
    description: "Jokes and Cigars"
  },
// Sun. August 15th, 2026
  {
    id: 6,
    time: "Sunday, 07:00 AM",
    title: "Reveille",
    location: "",
    description: ""
  },

  {
    id: 7,
    time: "Sunday, 08:00 AM",
    title: "Breakfast",
    location: "Mess Area",
    description: ""
  },

  {
    id: 8,
    time: "Sunday, 09:00 AM",
    title: "Circle Up",
    location: "Fire Circle",
    description: ""
  },

  {
    id: 9,
    time: "Sunday, 9:30 AM to 12:30 PM",
    title: "",
    location: "",
    description: "Final Competition, Service Project, Packing and Strike"
  },
  {
    id: 10,
    time: "Sunday, 12:30 PM to 1:30 PM",
    title: "Passing of the Rock",
    location: "Fire Circle",
    description: "Passing of the Rock"
  },






  {
    id: 14,
    time: "Monday, 12:00 PM",
    title: "Strike",
    location: "Site",
    description:
      "Leave it better than you found it.",
    image: "/clean_up.jpg",
    imageAlt: "Clean up time",
  },
];

