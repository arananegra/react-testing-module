import { getRecipesSelector } from './store';
import { createSelector } from 'reselect';
import { mapToCollection } from 'common/mappers/collection';
import { mapRecipeFromApiToVm } from './recipes.mappers';

export const getRecipesVMSelector = createSelector(
  getRecipesSelector,
  recipes => mapToCollection(recipes, mapRecipeFromApiToVm)
);
