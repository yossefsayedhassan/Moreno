export interface MenuItem {
  name: string;
  price: number;
}

export interface MenuCategory {
  slug: string;
  label: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    slug: "hot-drinks",
    label: "Hot Drinks",
    items: [
      { name: "Espresso Single", price: 75 },
      { name: "Espresso Double", price: 95 },
      { name: "American Coffee", price: 100 },
      { name: "Espresso Macchiato", price: 90 },
      { name: "Double Espresso Macchiato", price: 110 },
      { name: "Caramel Macchiato", price: 130 },
      { name: "Latte", price: 120 },
      { name: "Cappuccino", price: 120 },
      { name: "Cappuccino Flavored", price: 130 },
      { name: "Lotus Cappuccino", price: 150 },
    ],
  },
  {
    slug: "coffee",
    label: "Coffee",
    items: [
      { name: "Salted Caramel", price: 130 },
      { name: "Flat White", price: 120 },
      { name: "Cortado", price: 120 },
      { name: "Spanish Latte", price: 130 },
      { name: "Mocha Dark", price: 130 },
      { name: "Mocha White", price: 130 },
      { name: "Turkish Coffee", price: 70 },
      { name: "Double Turkish Coffee", price: 90 },
      { name: "French Coffee", price: 100 },
      { name: "Honey Cinnamon Latte", price: 130 },
    ],
  },
  {
    slug: "non-coffee",
    label: "Non-Coffee",
    items: [
      { name: "Hot Chocolate", price: 130 },
      { name: "Strawberry Hot Chocolate", price: 130 },
      { name: "Apple Cider", price: 100 },
      { name: "Cinnamon Milk", price: 110 },
      { name: "Tea", price: 65 },
      { name: "Flavored Tea", price: 90 },
      { name: "Green Tea", price: 70 },
      { name: "Herbal", price: 70 },
      { name: "Sweet Potato", price: 130 },
    ],
  },
  {
    slug: "cafe-frappe",
    label: "Café Frappe",
    items: [
      { name: "Classic Frappe", price: 120 },
      { name: "Oreo Frappe", price: 150 },
      { name: "Vanilla Frappe", price: 130 },
      { name: "Caramel Frappe", price: 130 },
      { name: "Hazelnut Frappe", price: 130 },
      { name: "Lotus Frappe", price: 150 },
      { name: "Salted Caramel", price: 130 },
      { name: "White Mocha", price: 130 },
      { name: "Chocolate Frappe", price: 130 },
      { name: "Pistachio Frappe", price: 150 },
    ],
  },
  {
    slug: "iced-coffee",
    label: "Iced Coffee",
    items: [
      { name: "Iced American Coffee", price: 110 },
      { name: "Iced Latte", price: 120 },
      { name: "Iced Latte Flavored", price: 130 },
      { name: "Mocha Dark/White", price: 130 },
      { name: "Spanish Latte", price: 130 },
      { name: "Honey Cinnamon Latte", price: 130 },
    ],
  },
  {
    slug: "milkshakes",
    label: "Milkshakes",
    items: [
      { name: "Lotus Milkshake", price: 150 },
      { name: "Strawberry Milkshake", price: 130 },
      { name: "Blueberry Milkshake", price: 130 },
      { name: "Vanilla Milkshake", price: 130 },
      { name: "Chocolate Milkshake", price: 130 },
      { name: "Oreo Milkshake", price: 150 },
      { name: "Pistachio Milkshake", price: 150 },
      { name: "Sweet Potato", price: 130 },
    ],
  },
  {
    slug: "sunshine",
    label: "Sunshine",
    items: [
      { name: "Lemon Mint", price: 120 },
      { name: "Cherry", price: 120 },
      { name: "Blue Curaçao", price: 120 },
      { name: "Strawberry", price: 120 },
      { name: "Watermelon", price: 120 },
      { name: "Blueberry", price: 120 },
      { name: "Peach", price: 120 },
      { name: "Kiwi", price: 120 },
    ],
  },
  {
    slug: "moreno-specials",
    label: "Moreno Specials",
    items: [
      { name: "Mixed Strawberry", price: 130 },
      { name: "Golden Juice", price: 130 },
      { name: "Blueberry Colada", price: 130 },
      { name: "Pink Lemon", price: 130 },
      { name: "Juicy Beach", price: 130 },
      { name: "Banana Coconut", price: 130 },
      { name: "Guava Mint", price: 130 },
      { name: "Mango Colada", price: 130 },
      { name: "Mango Kiwi", price: 130 },
      { name: "Blue Hawaii", price: 130 },
    ],
  },
  {
    slug: "juices",
    label: "Juices",
    items: [
      { name: "Mango", price: 110 },
      { name: "Strawberry", price: 110 },
      { name: "Orange", price: 110 },
      { name: "Guava", price: 110 },
    ],
  },
  {
    slug: "matcha",
    label: "Matcha",
    items: [
      { name: "Classic Matcha", price: 120 },
      { name: "Matcha Passion Fruit", price: 140 },
      { name: "Matcha Strawberry", price: 140 },
      { name: "Matcha Mango", price: 140 },
      { name: "Matcha Peach", price: 140 },
      { name: "Matcha Blueberry", price: 140 },
      { name: "Matcha Watermelon", price: 140 },
      { name: "Matcha Coconut", price: 140 },
    ],
  },
  {
    slug: "ice-tea",
    label: "Ice Tea",
    items: [
      { name: "Classic Ice Tea", price: 110 },
      { name: "Ice Tea Passion Fruit", price: 120 },
      { name: "Ice Tea Strawberry", price: 120 },
      { name: "Ice Tea Peach", price: 120 },
      { name: "Ice Tea Mango", price: 120 },
      { name: "Ice Tea Strawberry Vanilla", price: 120 },
      { name: "Karkade", price: 110 },
    ],
  },
  {
    slug: "energy-drinks",
    label: "Energy Drinks",
    items: [
      { name: "Red Bull Flavored", price: 140 },
      { name: "Red Bull", price: 110 },
      { name: "Red Bull White", price: 110 },
      { name: "Red Bull Sugar Free", price: 110 },
      { name: "Espresso Red Bull", price: 150 },
      { name: "Red Bull Berries", price: 140 },
      { name: "Tropical Island", price: 140 },
    ],
  },
  {
    slug: "smoothies",
    label: "Smoothies",
    items: [
      { name: "Mango", price: 110 },
      { name: "Strawberry", price: 110 },
      { name: "Blueberry", price: 120 },
      { name: "Pina Colada", price: 130 },
      { name: "Pineapple", price: 120 },
      { name: "Lemon Mint", price: 110 },
      { name: "Watermelon", price: 110 },
    ],
  },
  {
    slug: "cake-pastry",
    label: "Cake & Pastry",
    items: [
      { name: "Lotus Flat Croissant", price: 90 },
      { name: "Brownie Chocolate", price: 80 },
      { name: "Plain Cheese Cake", price: 110 },
      { name: "Blueberry Cheese Cake", price: 140 },
      { name: "Strawberry Cheese Cake", price: 140 },
      { name: "Lotus Cheese Cake", price: 150 },
      { name: "Honey Cake", price: 120 },
      { name: "Cookies", price: 70 },
    ],
  },
  {
    slug: "bakery-sandwiches",
    label: "Bakery & Sandwiches",
    items: [
      { name: "Plain Croissant", price: 65 },
      { name: "Cheese Croissant", price: 80 },
      { name: "Halloumi Sandwich", price: 150 },
      { name: "Chicken Pesto Sandwich", price: 170 },
      { name: "Tuna Sandwich", price: 170 },
      { name: "Roast Beef Sandwich", price: 190 },
    ],
  },
  {
    slug: "salads",
    label: "Salads",
    items: [
      { name: "Chicken Caesar Salad", price: 160 },
      { name: "Tuna Salad", price: 170 },
    ],
  },
  {
    slug: "extras",
    label: "Extras",
    items: [
      { name: "Flavor", price: 30 },
      { name: "Espresso Shot", price: 35 },
      { name: "Lotus", price: 35 },
      { name: "Milk Alternatives", price: 50 },
    ],
  },
  {
    slug: "soft-drinks",
    label: "Soft Drinks",
    items: [
      { name: "Water", price: 20 },
      { name: "Sparkling Water", price: 40 },
    ],
  },
];
