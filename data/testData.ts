export interface Recipe {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  mealType?: string;
  ingredients?: string[];
  cookingTime?: string;
  servings?: string;
  instructions?: string[];
  rating?: number;
  labels?: string[];
  likes?: number;
  comments?: string[];
  downloads?: number;
  chef?: {
    name: string;
    bio: string;
    avatarUrl?: string;
  };
}

export const recipes: Recipe[] = [
  {
    id: 1,
    chef: {
      name: "John Doe",
      bio: "A passionate chef with 10 years of experience.",
      avatarUrl: "@/assets/images/entry-bg.jpg",
    },
    name: "Salmon",
    description: "A delicious salmon dish",
    imageUrl: "@/assets/images/test-image.png",
    mealType: "Dinner",
    labels: ["Dinner", "Fish", "Healthy"],
    rating: 4.5,
    ingredients: ["Salmon", "Lemon", "Garlic", "Herbs"],
    cookingTime: "20 mins",
    servings: "2-3",
    instructions: [
      "Preheat the oven to 200°C (400°F).",
      "Place the salmon on a baking sheet.",
      "Season with lemon, garlic, and herbs.",
      "Bake for 20 minutes or until cooked through.",
      "Serve with a side of vegetables.",
    ],
    likes: 10,
    comments: ["Delicious!", "My family loved it!"],
    downloads: 100,
  },
  {
    id: 2,
    chef: {
      name: "Sarah Dane",
      bio: "Expert in grilling and outdoor cooking.",
      avatarUrl: "@/assets/images/entry-bg.jpg",
    },
    name: "Steak",
    description: "A juicy steak cooked to perfection",
    imageUrl: "@/assets/images/test-image.png",
    mealType: "Dinner",
    labels: ["Dinner", "Meat", "Grill"],
    rating: 4.8,
    ingredients: ["Steak", "Salt", "Pepper", "Olive Oil"],
    cookingTime: "15 mins",
    servings: "1-2",
    instructions: [
      "Season the steak with salt and pepper.",
      "Heat olive oil in a pan over high heat.",
      "Cook the steak for 3-4 minutes on each side for medium-rare.",
      "Let it rest for a few minutes before slicing.",
      "Serve with your favorite sides.",
    ],
    likes: 25,
    comments: ["Perfectly cooked!", "Will make again."],
    downloads: 250,
  },
  {
    id: 3,
    chef: {
      name: "Emily Clark",
      bio: "Loves creating quick and easy meals.",
      avatarUrl: "@/assets/images/entry-bg.jpg",
    },
    name: "Pasta",
    description: "A classic Italian pasta dish",
    imageUrl: "@/assets/images/test-image.png",
    mealType: "Lunch",
    labels: ["Lunch", "Italian", "Pasta"],
    rating: 4.2,
    ingredients: ["Pasta", "Tomato Sauce", "Basil", "Parmesan"],
    cookingTime: "15 mins",
    servings: "2",
    instructions: [
      "Boil water and cook the pasta according to package instructions.",
      "In a separate pan, heat the tomato sauce.",
      "Add cooked pasta to the sauce and mix well.",
      "Serve with fresh basil and grated Parmesan on top.",
    ],
    likes: 15,
    comments: ["Simple and tasty!", "A family favorite."],
    downloads: 150,
  },
  {
    id: 4,
    chef: {
      name: "Michael Brown",
      bio: "Specializes in healthy and nutritious meals.",
      avatarUrl: "@/assets/images/entry-bg.jpg",
    },
    name: "Salad",
    description: "A fresh and healthy salad",
    imageUrl: "@/assets/images/test-image.png",
    mealType: "Lunch",
    labels: ["Lunch", "Healthy", "Vegetarian"],
    rating: 4.0,
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Olive Oil"],
    cookingTime: "0 mins",
    servings: "1",
    instructions: [
      "Wash and chop the lettuce, tomato, and cucumber.",
      "Combine all ingredients in a bowl.",
      "Drizzle with olive oil and toss gently.",
      "Serve immediately.",
    ],
    likes: 8,
    comments: ["Very refreshing!", "Perfect for a light meal."],
    downloads: 80,
  },
  {
    id: 5,
    chef: {
      name: "Laura Wilson",
      bio: "Dessert enthusiast and baker.",
      avatarUrl: "@/assets/images/entry-bg.jpg",
    },
    name: "Death by Chocolate",
    description: "A sweet and indulgent dessert",
    imageUrl: "@/assets/images/test-image.png",
    mealType: "Dessert",
    labels: ["Dessert", "Ice Cream", "Chocolate"],
    rating: 3.9,
    ingredients: ["Chocolate", "Ice Cream", "Whipped Cream", "Chocolate Syrup"],
    cookingTime: "0 mins",
    servings: "1-2",
    instructions: [
      "Scoop chocolate ice cream into bowls.",
      "Drizzle with chocolate syrup.",
      "Top with whipped cream.",
      "Serve immediately.",
    ],
    likes: 5,
    comments: ["So rich and chocolatey!", "A chocolate lover's dream."],
    downloads: 50,
  },
  {
    id: 6,
    chef: {
      name: "David Lee",
      bio: "Loves creating classic desserts with a twist.",
      avatarUrl: "@/assets/images/entry-bg.jpg",
    },
    name: "Cheesecake",
    description: "A creamy and rich cheesecake",
    imageUrl: "@/assets/images/test-image.png",
    mealType: "Dessert",
    labels: ["Dessert", "Cheese", "Sweet"],
    rating: 4.7,
    ingredients: ["Cream Cheese", "Sugar", "Graham Cracker Crust", "Eggs"],
    cookingTime: "60 mins",
    servings: "8",
    instructions: [
      "Preheat the oven to 180°C (350°F).",
      "Mix cream cheese and sugar until smooth.",
      "Add eggs one at a time, mixing well after each addition.",
      "Pour the mixture into a graham cracker crust.",
      "Bake for 60 minutes or until set.",
      "Let it cool before serving.",
    ],
    likes: 30,
    comments: ["Best cheesecake ever!", "So creamy and delicious."],
    downloads: 300,
  },
  {
    id: 7,
    chef: {
      name: "Anna Smith",
      bio: "Breakfast lover and recipe creator.",
      avatarUrl: "@/assets/images/entry-bg.jpg",
    },
    name: "Omelette",
    description: "A fluffy omelette with cheese and herbs",
    imageUrl: "@/assets/images/test-image.png",
    mealType: "Breakfast",
    labels: ["Breakfast", "Eggs", "Quick"],
    rating: 4.3,
    ingredients: ["Eggs", "Cheese", "Herbs", "Salt", "Pepper"],
    cookingTime: "10 mins",
    servings: "1",
    instructions: [
      "Whisk eggs in a bowl with salt and pepper.",
      "Heat a non-stick pan over medium heat.",
      "Pour the eggs into the pan and cook until edges start to set.",
      "Sprinkle cheese and herbs on one half of the omelette.",
      "Fold the omelette in half and cook for another minute.",
      "Serve hot.",
    ],
    likes: 12,
    comments: ["Quick and easy!", "Perfect for breakfast."],
    downloads: 120,
  },
  {
    id: 8,
    chef: {
      name: "Tom Harris",
      bio: "Enjoys making hearty and satisfying breakfasts.",
      avatarUrl: "@/assets/images/entry-bg.jpg",
    },
    name: "Pancakes",
    description: "Fluffy pancakes served with maple syrup",
    imageUrl: "@/assets/images/test-image.png",
    mealType: "Breakfast",
    labels: ["Breakfast", "Pancakes", "Quick"],
    rating: 4.6,
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking Powder"],
    cookingTime: "15 mins",
    servings: "3-4",
    instructions: [
      "In a bowl, mix flour, sugar, and baking powder.",
      "In another bowl, whisk milk and eggs together.",
      "Combine the wet and dry ingredients until smooth.",
      "Heat a non-stick pan over medium heat.",
      "Pour batter onto the pan and cook until bubbles form on the surface.",
      "Flip and cook until golden brown.",
      "Serve with maple syrup or your favorite toppings.",
    ],
    likes: 20,
    comments: ["So fluffy and delicious!", "A weekend favorite."],
    downloads: 200,
  },
];

export const countries = [
  "United States",
  "Nigeria",
  "Norway",
  "Morocco",
  "Chile",
  "Australia",
  "Japan",
];
