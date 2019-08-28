import * as vm from './recipes.view-model';
import { mapRecipeFromApiToVm } from './recipes.mappers';

describe('Recipes mapper tests', () => {
  it('should return default recipe when no valid arameter is passed', () => {
    // Arrange
    const defaultRecipe: vm.Recipe = vm.createEmptyRecipe();

    // Act
    const resultUndefined: vm.Recipe = mapRecipeFromApiToVm(undefined);

    // Assert
    expect(resultUndefined).toEqual(defaultRecipe);

    // Act
    const resultNull: vm.Recipe = mapRecipeFromApiToVm(null);

    // Assert
    expect(resultNull).toEqual(defaultRecipe);
  });

  it('should return mapped recipe when valid recipe is passed', () => {
    // Arrange
    const recipe: vm.Recipe = { id: '3', ingredients: ['tomato', 'onio'], name: 'simple salad' };

    // Act
    const result: vm.Recipe = mapRecipeFromApiToVm(recipe);

    // Assert
    expect(result).toEqual(recipe);
  });
});
