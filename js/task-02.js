const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('ul');
for (let i = 0; i < ingredients.length; i++) {
  const listElement = document.createElement('li');
  listElement.textContent = ingredients[i];
  listElement.classList.add('item');
  ingredientsList.append(listElement);
}
