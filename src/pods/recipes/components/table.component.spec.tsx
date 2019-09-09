import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { mockRecipes } from '../api/recipes.mock-data';
import { TableComponent } from './table.component';

describe('Table component tests', () => {
  it('should render a happy table with simple props', () => {
    // Arrange
    const props = {
      recipes: mockRecipes,
    };

    // Act
    const { getByTestId, asFragment } = render(<TableComponent {...props} />);
    const tableElement = getByTestId('mui-table');
    //Assert

    expect(tableElement).not.toBeUndefined();
    expect(asFragment()).toMatchSnapshot();
  });


  it('should call handleNavigation when row is clicked', () => {
    // Arrange
/*    const props = {
      recipes: mockRecipes,
    };

    // Act
    const { getByTestId, asFragment } = render(<TableComponent {...props} />);
    const tableElement = getByTestId('mui-table');
    const textFieldElement = getByTestId('mui-textfield');
    fireEvent.change(textFieldElement, { target: { value: 'John' } });
    //Assert

    expect(tableElement).not.toBeUndefined();
    expect(asFragment()).toMatchSnapshot();*/
  });
});
