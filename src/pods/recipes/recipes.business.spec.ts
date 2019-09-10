import { mockRecipes } from './api/recipes.mock-data';
import { filterRecipes } from './recipes.business';

describe('Recipes business tests', () => {
  it('should return filtered recipes on happy path params', () => {
    // Arrange
    const recipes = mockRecipes;
    const searchedValue = 'eggs, salt';
    // Act
    const filteredRecipes = filterRecipes(recipes, searchedValue);
    // Assert
    expect(filteredRecipes).toEqual([recipes[0]]);
  });

  it('should return all the recipes if search is empty', () => {
    // Arrange
    const recipes = mockRecipes;
    const searchedValue = '';
    // Act
    const filteredRecipes = filterRecipes(recipes, searchedValue);
    // Assert
    expect(filteredRecipes).toEqual(recipes);
  });
});
