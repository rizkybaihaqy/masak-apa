export const judge = (foods) => (input) =>
  foods.map((food) => ({
    title: food.title,
    score:
      (food.ingredients.filter((ingredient) =>
        input.some((word) =>
          word
            .split(" ")
            .some((part) =>
              ingredient.toLowerCase().includes(part.toLowerCase())
            )
        )
      ).length /
        food.ingredients.length) *
      100,
  }));
