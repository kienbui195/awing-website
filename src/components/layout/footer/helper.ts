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
        href: "#",
      },
      {
        label: "About us",
        href: "#",
      },
      {
        label: "Blog",
        href: "#",
      },
      {
        label: "Careers",
        href: "#",
      },
    ],
  },
  {
    title: "Navigation",
    children: [
      {
        label: "Our Platform",
        href: "#",
      },
      {
        label: "Our Advertisers",
        href: "#",
      },
      {
        label: "Our Wifi Partners",
        href: "#-partners",
      },
      {
        label: "Wifi Users",
        href: "#",
      },
    ],
  },
  {
    title: "Legal",
    children: [
      {
        label: "Terms & Conditions",
        href: "#",
      },
      {
        label: "Privacy Policy",
        href: "#",
      },
    ],
  },
];

export const LOCATION = [
  "Head Office: 11th Floor, King Building, 7 Chua Boc St., Dist. Dong Da, Ha Noi city",
  "Branch Office: 7th Floor, DC Tower, 111D Ly Chinh Thang St., Dist. 3, Ho Chi Minh City",
];

export const AWING_EMAIL = "contact@awing.vn";