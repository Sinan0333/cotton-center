export const CATEGORIES = [
  { label: "Men", value: "Men" },
  { label: "Women", value: "Women" },
  { label: "Kids", value: "Kids" },
];

export const MEN_CATEGORIES = [
  { label: "Men's Shirts", value: "mens_shirts" },
  { label: "Men's Pants", value: "mens_pants" },
  { label: "Men's T-Shirts", value: "mens_tshirts" },
  { label: "Mundu", value: "mundu" },
  { label: "Innerwear", value: "mens_innerwear" },
];

export const WOMEN_CATEGORIES = [
  { label: "Sarees", value: "sarees" },
  { label: "Nighties", value: "nighties" },
  { label: "Churidar", value: "churidar" },
  { label: "Kurtis", value: "kurtis" },
  { label: "Leggings", value: "leggings" },
  { label: "Innerwear", value: "womens_innerwear" },
];

export const KIDS_CATEGORIES = [
  { label: "Girls Wear", value: "girls_wear" },
  { label: "Boys Wear", value: "boys_wear" },
  { label: "Baby Wear", value: "baby_wear" },
  { label: "School Uniforms", value: "school_uniforms" },
];

export const ALL_CATEGORIES = [
  ...MEN_CATEGORIES,
  ...WOMEN_CATEGORIES,
  ...KIDS_CATEGORIES,
];
