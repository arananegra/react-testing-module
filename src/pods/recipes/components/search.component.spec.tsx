import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { SearchComponent } from './search.component';
import { TextField } from 'common/components/text-field';

describe('Search component tests', () => {
  it('should render a happy search component', () => {
    // Arrange
    const props = {
      onSearch: jest.fn(),
    };

    // Act
    const { getByTestId, asFragment } = render(<SearchComponent {...props} />);
    const searchComponent = getByTestId('search-component') as HTMLInputElement;
    //Assert
    expect(searchComponent).not.toBeUndefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onSearch when event is fired', () => {
    // Arrange
    const externalProps = {
      onSearch: jest.fn(),
    };
    // Act
    const { getByTestId } = render(<SearchComponent {...externalProps} />);
    const textFieldElement = getByTestId('mui-textfield') as HTMLInputElement;
    fireEvent.change(textFieldElement, { target: { value: 'John' } });
    // Assert
    expect(externalProps.onSearch).toHaveBeenCalled();
  });
});
