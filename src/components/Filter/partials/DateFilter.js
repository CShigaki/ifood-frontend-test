import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

const DateFilter = ({ value, label, id, setValue }) => {
  const alterAndSetValue = (event) => {
    const time = moment(event.target.value);
    const newEvent = Object.assign({}, event);

    newEvent.target.value = time.format('YYYY-MM-DDTHH:MM:SS');

    setValue(newEvent);
  }

  return (
    <TextField
      className="filter-field"
      id={id}
      type="datetime-local"
      label={label}
      value={value}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        name: id,
        id,
      }}
      onChange={alterAndSetValue}
    />
  );
}

DateFilter.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  setValue: PropTypes.func,
};

export default DateFilter;