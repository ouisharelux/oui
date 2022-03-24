import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.module.css';

const CustomColorSelectFieldMaybe = props => {
  const { name, id, colors, intl } = props;
  const colorLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.colorLabel',
  });
  const colorPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.colorPlaceholder',
  });
  const colorRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.colorRequired',
    })
  );

  // TODO: Add swatches for colors
  return colors ? (
    <FieldSelect
      className={css.color}
      name={name}
      id={id}
      label={colorLabel}
      validate={colorRequired}
    >
      <option disabled value="">
        {colorPlaceholder}
      </option>
      {colors.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomColorSelectFieldMaybe;
