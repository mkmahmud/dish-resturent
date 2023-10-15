import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "Bacon Cheese Green",
    description: "This is the first product.",
    price: 10.99,
    img: "https://w7.pngwing.com/pngs/452/935/png-transparent-a-burger-food-a-clipart-burger-clipart.png",
    ingredients: ["apple", "banana", "orange", "orange"],
    tags: ["apple", "banana", "orange", "orange"],
  },
  {
    id: 2,
    name: "Bacon Cheese Green",
    description: "This is the first product.",
    price: 10.99,
    img: "https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg",
    ingredients: ["apple", "banana", "orange", "orange"],
    tags: ["apple", "banana", "orange", "orange"],
  },
  {
    id: 3,
    name: "Bacon Cheese Green",
    description: "This is the first product.",
    price: 10.99,
    img: "https://www.insidevancouver.ca/wp-content/uploads/2022/07/Praguery7.jpeg",
    ingredients: ["apple", "banana", "orange", "orange"],
    tags: ["apple", "banana", "orange", "orange"],
  },
  {
    id: 4,
    name: "Bacon Cheese Green",
    description: "This is the first product.",
    price: 10.99,
    img: "https://visitproseccoitaly.com/wp-content/uploads/2022/12/Fried-eggs.jpeg",
    ingredients: ["apple", "banana", "orange", "orange"],
    tags: ["apple", "banana", "orange", "orange"],
  },
  {
    id: 5,
    name: "Bacon Cheese Green",
    description: "This is the first product.",
    price: 10.99,
    img: "https://  /hmg-prod/images/comfort-food-recipes-chicken-pasta-salad-646670ff9c384.jpeg",
    ingredients: ["apple", "banana", "orange", "orange"],
    tags: ["apple", "banana", "orange", "orange"],
  },
];

export async function GET(req: any) {
  const { id } = req.query;
  console.log("id");
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return NextResponse.json({ message: " Product not found" });
  }

  return NextResponse.json(product);
}
