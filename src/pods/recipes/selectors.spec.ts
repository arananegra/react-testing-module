import { getRecipesVMSelector } from "./selectors";
import { State } from "core/store/root-reducer";
import { mockRecipes } from './api/recipes.mock-data';

describe('recipes root pods selectors tests', () => {
  describe('getRecipesVMSelector', () => {
    it('should return recipes mapped slice of the state', () => {
      // Arrange
      const state = {
        recipesPod: {
          recipes: mockRecipes
        }
      };
      // Act
      const recipesVM = getRecipesVMSelector(state as State);
      // Assert
      expect(recipesVM).toEqual(mockRecipes);
    })
  })
});
