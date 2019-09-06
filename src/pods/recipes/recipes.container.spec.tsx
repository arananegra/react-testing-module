import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { getRecipesRequest, recipesPodReducer } from './store';
import { RecipesContainer } from './recipes.container';
import { mockRecipes } from './api/recipes.mock-data';
import * as actions from './store';

const renderWithRedux = (
  component,
  { initialState = {}, reducer, store = createStore(reducer, initialState) },
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

describe('recipes container tests', () => {
  it('should render empty table when it feeds initial state', () => {
    // Arrange
    const initialState = {
      recipesPod: {
        recipes: [],
      },
    };

    // Act
    const { queryAllByTestId } = renderWithRedux(<RecipesContainer/>, {
      initialState,
      reducer: recipesPodReducer,
    });

    const tableRows = queryAllByTestId('table-cell');

    // Assert
    expect(tableRows).toHaveLength(0);
  });

  it('should render table with total amount of recipes from state', () => {
    // Arrange
    const initialState = {
      recipesPod: {
        recipes: mockRecipes,
      },
    };
    // Act
    const { queryAllByTestId } = renderWithRedux(<RecipesContainer/>, {
      initialState,
      reducer: recipesPodReducer,
    });
    const tableRows = queryAllByTestId('table-cell');
    // Assert
    expect(tableRows).toHaveLength(3);
  });

  it('should call loadRecipes when it mounts the component', async () => {
    // Arrange
    const initialState = {
      recipesPod: {
        recipes: [],
      },
    };
    //jest.spyOn(actions, 'getRecipesRequest');

    const getRecipesRequest = jest.spyOn(actions, 'getRecipesRequest');
    // Act
    const {} = renderWithRedux(<RecipesContainer/>, {
      initialState,
      reducer: recipesPodReducer,
    });

    // Assert
    expect(getRecipesRequest).toBeCalledTimes(1);
  });
});
