import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Button } from './button';

describe('Button tests', () => {
  it('should render a happy path button with simple props', () => {
    // Arrange
    const props = {
      label: 'Button',
      onClick: jest.fn(),
      className: 'button-style',
    };

    // Act
    const { getByTestId, asFragment } = render(<Button {...props} />);
    const buttonElement = getByTestId('mui-button') as HTMLButtonElement;
    //Assert

    expect(buttonElement).not.toBeUndefined();
    expect(buttonElement.type).toEqual('submit');
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call on click on button when event is fired', () => {
    // Arrange
    const props = {
      label: 'Button',
      onClick: jest.fn(),
      className: 'button-style',
    };

    // Act
    const { getByTestId } = render(<Button {...props} />);
    const buttonElement = getByTestId('mui-button') as HTMLButtonElement;
    fireEvent.click(buttonElement);

    // Assert
    expect(props.onClick).toHaveBeenCalled();
  });

});
