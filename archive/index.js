const foods = [
  {
    name: "nasgor",
    ingredients: ["nasi", "cabai", "bawang merah", "bawang putih", "kecap"],
  },
  {
    name: "ketoprak",
    ingredients: ["lontong", "cabai", "bawang merah", "bawang putih"],
  },
];

const input = ["nasi", "nasi", "bawang merah", "bawang putih", "lontong kupat"];

const results = foods.map((food) => ({
  name: food.name,
  result:
    (food.ingredients.filter((ingredient) =>
      input.some((word) =>
        word.split(" ").some((part) => ingredient.includes(part))
      )
    ).length /
      food.ingredients.length) *
    100,
}));

console.log(results);
