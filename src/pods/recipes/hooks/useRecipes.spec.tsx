import * as React from 'react';
import { mockRecipes } from '../api/recipes.mock-data';
import { useRecipes } from './useRecipes';
import { act, renderHook } from '@testing-library/react-hooks';

describe('useRecipes tests', () => {
  it('should filter recipes by valid string search', () => {
    // Arrange
    const recipesCollection = mockRecipes;
    const resultRecipe = recipesCollection[2];
    // Act
    const { result } = renderHook(() => useRecipes(recipesCollection));

    act(() => {
      result.current.handleFilter('oregano');
    });
    //Assert
    expect(result.current.filteredRecipes).toEqual([resultRecipe]);
  });

  it('should return all recipes when empty search parameter is used', () => {
    // Arrange
    const recipesCollection = mockRecipes;
    // Act
    const { result } = renderHook(() => useRecipes(recipesCollection));

    act(() => {
      result.current.handleFilter('');
    });
    //Assert
    expect(result.current.filteredRecipes).toEqual(recipesCollection);
  });

  it('should return reflected invalid value', () => {
    // Act
    const { result } = renderHook(() => useRecipes(undefined));

    act(() => {
      result.current.handleFilter('');
    });
    //Assert
    expect(result.current.filteredRecipes).toEqual(undefined);
  });
});
