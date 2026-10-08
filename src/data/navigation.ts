export interface NavItem {
  id: string;
  /** Anchor on the home page. */
  hash: string;
  /** Key into the dictionary's `nav` section. */
  labelKey: "work" | "services" | "experience" | "capabilities" | "about" | "contact";
}

export const navigation: NavItem[] = [
  { id: "work", hash: "#work", labelKey: "work" },
  { id: "services", hash: "#services", labelKey: "services" },
  { id: "experience", hash: "#experience", labelKey: "experience" },
  { id: "capabilities", hash: "#capabilities", labelKey: "capabilities" },
  { id: "about", hash: "#about", labelKey: "about" },
  { id: "contact", hash: "#contact", labelKey: "contact" },
];
