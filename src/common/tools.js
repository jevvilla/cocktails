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
  const measurements = getFilteredMeasures(item);
  const measuresAndIngredients = [];

  for (let i = 0; i < ingredients.length; i += 1) {
    measuresAndIngredients.push(`${measurements[i].trim()} - ${ingredients[i].trim()}`);
  }

  return measuresAndIngredients;
};

export const getFilteredMeasures = item => {
  const keys = Object.keys(item.details[0]);
  const measurements = [];

  for (let i = 1; i < keys.length; i += 1) {
    const measure = item.details[0][`strMeasure${i}`];
    if (measure) {
      measurements.push(measure);
    }
  }

  return measurements;
};
