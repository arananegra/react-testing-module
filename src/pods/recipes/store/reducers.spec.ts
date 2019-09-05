import { createDefaultState, recipesPodReducer, RecipesPodState } from './reducers';
import { getRecipesRequest, updateRecipes } from './actions';
import deepFreeze from 'deep-freeze';
import { mockRecipes } from '../api/recipes.mock-data';
import { Recipe } from '../api';

describe('Recipes reducer tests', () => {
  it('should return initial state when passing undefined state and some action type', () => {
    // Arrange
    const state = undefined;
    const action = { type: 'some type' };
    let newRecipesPodState: RecipesPodState = deepFreeze(createDefaultState());
    // Act
    const nextState = recipesPodReducer(state, action);

    // Assert
    expect(nextState).toEqual(newRecipesPodState);
  });

  it('state is not updated when getRecipesRequest is called', () => {
    // Arrange
    const state = undefined;
    let newRecipesPodState: RecipesPodState = deepFreeze(createDefaultState());
    // Act
    const nextState = recipesPodReducer(state, getRecipesRequest());
    // Assert
    expect(nextState).toEqual(newRecipesPodState);
  });

  it('should return updated recipes when updateRecipes is called', () => {
    // Arrange
    const initialState: RecipesPodState = deepFreeze({
      recipes: mockRecipes,
    });

    const recipes: Recipe[] = [{
      id: '4',
      name: 'Test recipe',
      ingredients: [
        'test1',
        'test2',
      ],
    }];

    const updatedState: RecipesPodState = {
      ...initialState,
      recipes,
    };
    // Act
    const nextState = recipesPodReducer(initialState, updateRecipes(recipes));
    // Assert
    expect(nextState).toEqual(updatedState);
  });
});
