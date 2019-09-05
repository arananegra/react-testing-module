import { actionTypes } from './action-types';
import { getRecipesRequest, updateRecipes } from './actions';
import { mockRecipes } from '../api/recipes.mock-data';

describe('recipes action tests', () => {
  it('should return getRecipesRequest action creator object', () => {
    // Arrange
    const mockAction = {
      type: actionTypes.GET_RECIPES_REQUEST,
    };
    // Act
    const actionResponse = getRecipesRequest();
    // Assert
    expect(actionResponse).toEqual(mockAction);
  });

  it('should return updateRecipes action creator object', () => {
    // Arrange
    const mockAction = {
      type: actionTypes.UPDATE_RECIPES,
      payload: mockRecipes,
    };
    // Act
    const actionResponse = updateRecipes(mockRecipes);
    // Assert
    expect(actionResponse).toEqual(mockAction);
  });
});
