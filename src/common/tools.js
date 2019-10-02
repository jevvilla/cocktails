export const getFilteredIngredients = ({ details }) => {
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

export const getIngredientsAndMeasurements = item => {
  const ingredients = getFilteredIngredients(item);
  const keys = Object.keys(item.details[0]);
  const measurements = [];

  for (let i = 0; i <= keys.length; i += 1) {
    const measure = item.details[0][`strMeasure${i}`];
    if (measure) {
      measurements.push(`${measure} - ${ingredients[i]}`);
    }
  }

  return measurements;
};
