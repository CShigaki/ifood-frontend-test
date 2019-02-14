import React from 'react';
import PropTypes from 'prop-types';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

const PickerFilter = ({ currentValue, values, label, id, setValue }) => {
  return (
    <React.Fragment>
      <InputLabel htmlFor={id} className="filter-field-label">{label}</InputLabel>
      <NativeSelect
        className="filter-field"
        onChange={setValue}
        value={currentValue}
        inputProps={{
          name: id,
          id,
        }}
      >
        <option value="">Choose an option</option>
        {Object.values(values).map((value) => (
          <option key={value.value} value={value.value}>{value.name}</option>
        ))}
      </NativeSelect>
    </React.Fragment>
  );
}

PickerFilter.propTypes = {
  currentValue: PropTypes.string,
  values: PropTypes.array,
  label: PropTypes.string,
  id: PropTypes.string,
  setValue: PropTypes.func,
};

export default PickerFilter;