import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    links: [
      { title: "Donate", href: "/donate" },
      { title: "Ramadan", href: "/ramadan" },
      { title: "Our Programs", href: "/programs" },
      { title: "About Us", href: "/about" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
  {
    links: [
      { title: "Sunday School", href: "/programs/sunday-school" },
      { title: "Open Kitchen", href: "/programs/open-kitchen" },
      { title: "Youth Halaqa", href: "/programs/youth-halaqa" },
      { title: "Sports", href: "/programs/sports" },
    ],
  },
  {
    links: SocialMediaProfiles,
  },
];
