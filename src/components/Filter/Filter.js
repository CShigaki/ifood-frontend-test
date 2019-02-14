import React from 'react';
import PropTypes from 'prop-types';
import DateFilter from './partials/DateFilter';
import IntegerFilter from './partials/IntegerFilter';
import LimitedIntegerFilter from './partials/LimitedIntegerFilter';
import PickerFilter from './partials/PickerFilter';
import Grid from '@material-ui/core/Grid';

import './Filter.scss';

const Filter = ({ filters, defaultFilterValues, setValue }) => {
  return (
    <div className="filters">
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
      >
        {filters.map((filter) => {
          switch (filter.id) {
            case 'country':
            case 'locale':
              return (
                <Grid item xs={6}>
                  <PickerFilter
                    key={filter.id}
                    values={filter.values}
                    label={filter.name}
                    id={filter.id}
                    setValue={setValue}
                    currentValue={defaultFilterValues[filter.id]}
                  />
                </Grid>
              );
            case 'timestamp':
              return (
                <Grid item xs={6}>
                  <DateFilter
                    key={filter.id}
                    label={filter.name}
                    id={filter.id}
                    setValue={setValue}
                  />
                </Grid>
              );
            case 'limit':
              return (
                <Grid item xs={6}>
                  <LimitedIntegerFilter
                    key={filter.id}
                    id={filter.id}
                    label={filter.name}
                    limits={{
                      top: filter.validation.max,
                      bottom: filter.validation.min,
                    }}
                    setValue={setValue}
                  />
                </Grid>
              );
            case 'offset':
              return (
                <Grid item xs={6}>
                  <IntegerFilter
                    key={filter.id}
                    id={filter.id}
                    label={filter.name}
                    setValue={setValue}
                  />
                </Grid>
              );
          };
        })}
      </Grid>
    </div>
  );
}

Filter.propTypes = {
  filters: PropTypes.array,
  defaultFilterValues: PropTypes.object,
  setValue: PropTypes.func,
};

export default Filter;