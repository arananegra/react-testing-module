import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { mockRecipes } from '../api/recipes.mock-data';
import { TableComponent } from './table.component';
import { TableCell } from '@material-ui/core';
import { history } from 'core/router';

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
    const props = {
      recipes: mockRecipes,
    };
    const pushSpy = jest.spyOn(history, 'push');

    // Act
    render(<TableComponent {...props} />);
    const { getAllByTestId } = render(<TableCell/>);
    const tableCellComponent = getAllByTestId('table-cell');
    fireEvent.click(tableCellComponent[0]);
    //Assert

    expect(tableCellComponent).not.toBeUndefined();
    expect(pushSpy).toHaveBeenCalled();
  });
});
