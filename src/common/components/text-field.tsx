import * as React from 'react';
import MaterialTextField, { TextFieldProps as MaterialTextFieldProps } from '@material-ui/core/TextField';
//Removed due to tests conflicts
//import { Overwrite } from '@material-ui/types';

export interface TextFieldProps {
  name: string;
  label: string;
  value?: string;
  onChange: (field: string, value, event?) => void;
  error?: string;
  type?: string;
  onBlur?: (field: string, value, event?) => void;
  className?: string;
}

export const TextField: React.FC<TextFieldProps> = props => {
  const {
    name,
    label,
    onChange,
    value,
    error,
    type,
    onBlur,
    className,
    ...otherProps
  } = props;
  const hasError = Boolean(error);

  const handleChange = e => {
    onChange(name, e.target.value, e);
  };

  const handleBlur = e => {
    if (onBlur) {
      onBlur(name, e.target.value, e);
    }
  };

  return (
    <MaterialTextField
      {...otherProps}
      className={className}
      label={label}
      margin="normal"
      value={value}
      type={type}
      onChange={handleChange}
      inputProps={
        { ['data-testid']: 'mui-textfield' }
      }
      onBlur={handleBlur}
      error={hasError}
      helperText={hasError && error}
    />
  );
};

TextField.defaultProps = {
  type: 'text',
};
