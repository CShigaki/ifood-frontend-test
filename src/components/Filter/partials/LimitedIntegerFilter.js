import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const LimitedIntegerFilter = ({ id, label, limits, setValue }) => {
  const [validationError, setValidationStatus] = useState(false);

  const onChange = (event) => {
    if (event.target.value > limits.top || event.target.value < limits.bottom) {
      setValidationStatus(true);
      return;
    }

    setValidationStatus(false);

    setValue(event);
  };

  return (
    <TextField
      className="filter-field"
      error={validationError}
      id={id}
      label={label}
      onChange={onChange}
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        name: id,
        id,
      }}
      margin="normal"
    />
  );
}

LimitedIntegerFilter.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  limits: PropTypes.object,
  setValue: PropTypes.func,
};

export default LimitedIntegerFilter;