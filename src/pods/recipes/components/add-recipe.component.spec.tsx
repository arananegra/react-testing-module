import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { AddRecipe } from './add-recipe.component';
import { history } from 'core/router';

describe('Add recipe tests', () => {
  it('should render a happy path button with simple props', () => {
    // Act
    const { getByTestId, asFragment } = render(<AddRecipe/>);
    const addRecipeElement = getByTestId('mui-button') as HTMLButtonElement;
    //Assert

    expect(addRecipeElement).not.toBeUndefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call history push when click is fired', () => {
    // Arrange
    const pushSpy = jest.spyOn(history, 'push');
    // Act
    const { getByTestId } = render(<AddRecipe/>);
    const addRecipeElement = getByTestId('mui-button') as HTMLButtonElement;
    fireEvent.click(addRecipeElement);
    //Assert

    expect(pushSpy).toHaveBeenCalled();
  });
});
