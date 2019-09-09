import * as React from 'react';
import { render } from '@testing-library/react';
import { AddRecipe } from './add-recipe.component';

describe('Add recipe tests', () => {
  it('should render a happy path button with simple props', () => {
    // Act
    const { getByTestId, asFragment } = render(<AddRecipe/>);
    const addRecipeElement = getByTestId('mui-button') as HTMLButtonElement;
    //Assert

    expect(addRecipeElement).not.toBeUndefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
