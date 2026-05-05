export interface LocationHours {
  dayRange: string;
  time: string;
}

export interface Location {
  id: string;
  name: string;
  suburb: string;
  mall?: string;
  phone?: string;
  hours: LocationHours[];
  latitude?: number;
  longitude?: number;
  comingSoon: boolean;
}

export const locations: Location[] = [
  {
    id: "winston-hills",
    name: "Winston Hills",
    suburb: "Winston Hills Mall",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "8:30AM-5:45PM" },
      { dayRange: "Thurs", time: "8:30AM-8:30PM" },
      { dayRange: "Fri", time: "8:30AM-5:45PM" },
      { dayRange: "Sat", time: "8AM-5:30PM" },
      { dayRange: "Sun", time: "8:30AM-5PM" },
    ],
  },
  {
    id: "melrose-park",
    name: "Melrose Park",
    suburb: "Melrose Park",
    comingSoon: true,
    hours: [],
  },
  {
    id: "meadowbank",
    name: "Meadowbank",
    suburb: "Meadowbank",
    comingSoon: true,
    hours: [],
  },
  {
    id: "westfield-miranda",
    name: "Westfield Miranda",
    suburb: "Miranda",
    phone: "(02) 9584 0560",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "9AM-6PM" },
      { dayRange: "Thurs", time: "9AM-9PM" },
      { dayRange: "Fri", time: "9AM-8PM" },
      { dayRange: "Sat", time: "8:30AM-6PM" },
      { dayRange: "Sun", time: "9AM-5PM" },
    ],
  },
  {
    id: "the-mills-north-parramatta",
    name: "The Mills",
    suburb: "North Parramatta",
    phone: "(02) 9684 1368",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "8:30AM-6PM" },
      { dayRange: "Thurs", time: "8:30AM-8:30PM" },
      { dayRange: "Fri", time: "8:30AM-6PM" },
      { dayRange: "Sat", time: "8:30AM-6PM" },
      { dayRange: "Sun", time: "8:30AM-6PM" },
    ],
  },
  {
    id: "leichhardt-norton-plaza",
    name: "Leichhardt Norton Plaza",
    suburb: "Leichhardt",
    phone: "(02) 9150 8108",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "8:30AM-6PM" },
      { dayRange: "Thurs", time: "8:30AM-9PM" },
      { dayRange: "Fri", time: "8:30AM-6PM" },
      { dayRange: "Sat", time: "8AM-6PM" },
      { dayRange: "Sun", time: "8:30AM-6PM" },
    ],
  },
  {
    id: "rouse-hill-town-centre",
    name: "Rouse Hill Town Centre",
    suburb: "Rouse Hill",
    phone: "(02) 9679 8286",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "8:30AM-6PM" },
      { dayRange: "Thurs", time: "8:30AM-9PM" },
      { dayRange: "Fri", time: "8:30AM-6PM" },
      { dayRange: "Sat", time: "8AM-6PM" },
      { dayRange: "Sun", time: "8:30AM-5PM" },
    ],
  },
  {
    id: "oran-park-podium",
    name: "Oran Park Podium",
    suburb: "Oran Park",
    phone: "0415 340 292",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "8:30AM-6PM" },
      { dayRange: "Thurs", time: "8:30AM-8:30PM" },
      { dayRange: "Fri", time: "8:30AM-6PM" },
      { dayRange: "Sat", time: "8AM-5:30PM" },
      { dayRange: "Sun", time: "8:30AM-5PM" },
    ],
  },
  {
    id: "silverdale",
    name: "Silverdale",
    suburb: "Silverdale",
    phone: "(02) 4774 9103",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "8:30AM-5:45PM" },
      { dayRange: "Thurs", time: "8:30AM-8:30PM" },
      { dayRange: "Fri", time: "8:30AM-5:45PM" },
      { dayRange: "Sat", time: "8AM-5:30PM" },
      { dayRange: "Sun", time: "8:30AM-5PM" },
    ],
  },
  {
    id: "box-hill",
    name: "Box Hill",
    suburb: "Carmel Village Box Hill",
    phone: "(02) 9835 4971",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "8:30AM-5:45PM" },
      { dayRange: "Thurs", time: "8:30AM-9PM" },
      { dayRange: "Fri", time: "8:30AM-5:45PM" },
      { dayRange: "Sat", time: "8AM-5:30PM" },
      { dayRange: "Sun", time: "8:30AM-5PM" },
    ],
  },
  {
    id: "fairfield",
    name: "Fairfield",
    suburb: "Fairfield City Central",
    phone: "(02) 9723 1147",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "8:30AM-5:45PM" },
      { dayRange: "Thurs", time: "8:30AM-9PM" },
      { dayRange: "Fri", time: "8:30AM-6PM" },
      { dayRange: "Sat", time: "8AM-5:45PM" },
      { dayRange: "Sun", time: "8:30AM-5PM" },
    ],
  },
  {
    id: "burwood",
    name: "Burwood",
    suburb: "Westfield Burwood",
    phone: "(02) 9715 1600",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "8:30AM-5:45PM" },
      { dayRange: "Thurs", time: "8:30AM-9PM" },
      { dayRange: "Fri", time: "8:30AM-5:45PM" },
      { dayRange: "Sat", time: "8AM-5:45PM" },
      { dayRange: "Sun", time: "9AM-5:45PM" },
    ],
  },
  {
    id: "mt-annan",
    name: "Mt. Annan",
    suburb: "Mount Annan Market Place",
    phone: "(02) 4646 1666",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "8:30AM-5:45PM" },
      { dayRange: "Thurs", time: "8:30AM-9PM" },
      { dayRange: "Fri", time: "8:30AM-5:45PM" },
      { dayRange: "Sat", time: "8AM-5:30PM" },
      { dayRange: "Sun", time: "8:30AM-5PM" },
    ],
  },
  {
    id: "schofields",
    name: "Schofields",
    suburb: "Schofields Village",
    phone: "(02) 9626 6682",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "8:30AM-5:45PM" },
      { dayRange: "Thurs", time: "8:30AM-9PM" },
      { dayRange: "Fri", time: "8:30AM-5:45PM" },
      { dayRange: "Sat", time: "8AM-5:30PM" },
      { dayRange: "Sun", time: "8:30AM-5PM" },
    ],
  },
  {
    id: "marsden-park",
    name: "Marsden Park",
    suburb: "Elara Village",
    phone: "(02) 9838 1811",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "8:30AM-5:45PM" },
      { dayRange: "Thurs", time: "8:30AM-9PM" },
      { dayRange: "Fri", time: "8:30AM-5:45PM" },
      { dayRange: "Sat", time: "8AM-5:30PM" },
      { dayRange: "Sun", time: "8:30AM-5PM" },
    ],
  },
  {
    id: "minchinbury",
    name: "Minchinbury",
    suburb: "Great Western Centre Minchinbury",
    phone: "(02) 9677 1662",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "8:30AM-5:45PM" },
      { dayRange: "Thurs", time: "8:30AM-9PM" },
      { dayRange: "Fri", time: "8:30AM-5:45PM" },
      { dayRange: "Sat", time: "8AM-5:30PM" },
      { dayRange: "Sun", time: "8:30AM-5PM" },
    ],
  },
  {
    id: "eastern-creek",
    name: "Eastern Creek",
    suburb: "Eastern Creek Quarter Shopping Centre",
    phone: "(02) 9677 1338",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "8:30AM-5:45PM" },
      { dayRange: "Thurs", time: "8:30AM-9PM" },
      { dayRange: "Fri", time: "8:30AM-5:45PM" },
      { dayRange: "Sat", time: "8AM-5:30PM" },
      { dayRange: "Sun", time: "8:30AM-5PM" },
    ],
  },
  {
    id: "north-rocks",
    name: "North Rocks",
    suburb: "North Rocks Shopping Centre",
    phone: "(02) 9873 4223",
    comingSoon: false,
    hours: [
      { dayRange: "Mon-Wed", time: "8:30AM-5:45PM" },
      { dayRange: "Thurs", time: "8:30AM-9PM" },
      { dayRange: "Fri", time: "8:30AM-5:45PM" },
      { dayRange: "Sat", time: "8AM-5:30PM" },
      { dayRange: "Sun", time: "8:30AM-5PM" },
    ],
  },
];
