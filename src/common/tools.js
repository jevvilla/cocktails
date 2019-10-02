const getFilteredIngredients = ({ details }) => {
  const keys = Object.keys(details[0]);
  const ingredients = [];

  for (let i = 0; i <= keys.length; i += 1) {
    const ingredient = details[0][`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }

  return ingredients;
};

export default getFilteredIngredients;
