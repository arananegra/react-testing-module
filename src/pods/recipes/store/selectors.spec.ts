import { State } from '../../../core/store/root-reducer';
import { mockRecipes } from '../api/recipes.mock-data';
import { getRecipesSelector } from './selectors';

describe('recipes selectors tests', () => {
  it('should return recipes slice of the state', () => {

    // Arrange
    const mockState = {
      recipesPod: {
        recipes: mockRecipes,
      },
    };
    // Act
    const slicedState = getRecipesSelector(mockState as State);
    // Assert
    expect(slicedState).toEqual(mockRecipes);

  });
});
