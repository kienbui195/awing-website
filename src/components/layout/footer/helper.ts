export interface INavItem {
  title: string;
  children: {
    label: string;
    href: string;
  }[];
}

export const NAV_MENU: INavItem[] = [
  {
    title: "AWING",
    children: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About us",
        href: "/about-us",
      },
      {
        label: "Blog",
        href: "/blogs",
      },
      {
        label: "Careers",
        href: "/careers",
      },
    ],
  },
  {
    title: "Navigation",
    children: [
      {
        label: "Our Platform",
        href: "/our-platform",
      },
      {
        label: "Our Advertisers",
        href: "/our-advertisers",
      },
      {
        label: "Our Wifi Partners",
        href: "/our-wifi-partners",
      },
      {
        label: "Wifi Users",
        href: "/wifi-users",
      },
    ],
  },
  {
    title: "Legal",
    children: [
      {
        label: "Terms & Conditions",
        href: "/terms-and-conditions",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
    ],
  },
];

export const LOCATION = [
  "Head Office: 11th Floor, King Building, 7 Chua Boc St., Dist. Dong Da, Ha Noi city",
  "Branch Office: 7th Floor, DC Tower, 111D Ly Chinh Thang St., Dist. 3, Ho Chi Minh City",
];

export const AWING_EMAIL = "contact@awing.vn";