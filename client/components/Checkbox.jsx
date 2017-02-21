import React from 'react';
import CheckboxUI from 'react-ui-components/forms/Checkbox';

const Checkbox = ({input: {value, onChange, onBlur, onFocus}, meta:{error}}) => (
  <div>
    <CheckboxUI checked={value} onClick={onChange} onBlur={onBlur} onFocus={onFocus}/>
    {error && <span>{error}</span>}
  </div>
);

export default Checkbox;
