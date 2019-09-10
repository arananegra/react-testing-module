import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { mockRecipes } from '../api/recipes.mock-data';
import { TableComponent } from './table.component';
import { TableCell } from '@material-ui/core';
import { history } from 'core/router';

describe('Table component tests', () => {
  it('should render table and call handleNavigation when row is clicked', () => {
    // Arrange
    const props = {
      recipes: mockRecipes,
    };
    const pushSpy = jest.spyOn(history, 'push');

    // Act
    const { getByTestId, asFragment } = render(<TableComponent {...props} />);
    const { getAllByTestId } = render(<TableCell/>);
    const tableElement = getByTestId('mui-table');
    const tableCellComponent = getAllByTestId('table-cell');
    fireEvent.click(tableCellComponent[0]);

    //Assert
    expect(asFragment()).toMatchSnapshot();
    expect(tableElement).not.toBeUndefined();
    expect(tableCellComponent).not.toBeUndefined();
    expect(pushSpy).toHaveBeenCalled();
  });
});
