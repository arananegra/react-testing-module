import { getRecipesRequestSaga, watchRecipesPodSagas } from './sagas';
import { actionTypes } from './action-types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { mockRecipes } from '../api/recipes.mock-data';
import { getRecipes } from '../api';
import { updateRecipes } from './actions';

describe('recipes sagas tests', () => {
  describe('watchRecipesPodSagas', () => {
    it('should wait for expected action (GET_RECIPES_REQUEST) and execute the expected worker', () => {
      //Arrange
      const saga = watchRecipesPodSagas();
      //Act
      const result = saga.next();
      //Assert
      expect(result.value).toEqual(takeLatest(actionTypes.GET_RECIPES_REQUEST, getRecipesRequestSaga));

    });
  });

  describe('should put updateRecipes with recipes from API', () => {
    it('', () => {
      // Arrange
      const saga = getRecipesRequestSaga();
      const recipes = mockRecipes;
      // Act & Assert
      expect(saga.next().value).toEqual(call(getRecipes));
      expect(saga.next(recipes).value).toEqual(put(updateRecipes(recipes)));
    });
  });

});
