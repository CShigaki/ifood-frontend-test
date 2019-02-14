import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const IntegerFilter = ({ label, id, setValue }) => {
  return (
    <TextField
      className="filter-field"
      id={id}
      label={label}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        name: id,
        id,
      }}
      onChange={setValue}
    />
  );
}

IntegerFilter.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  setValue: PropTypes.func,
};

export default IntegerFilter;