import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.module.css';

const CustomDesignerSelectFieldMaybe = props => {
  const { name, id, designers, intl } = props;
  const categoryLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.designerLabel',
  });
  const categoryPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.designerPlaceholder',
  });
  const categoryRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.designerRequired',
    })
  );
  return designers ? (
    <FieldSelect
      className={css.category}
      name={name}
      id={id}
      label={categoryLabel}
      validate={categoryRequired}
    >
      <option disabled value="">
        {categoryPlaceholder}
      </option>
      {designers.map(d => (
        <option key={d.key} value={d.key}>
          {d.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomDesignerSelectFieldMaybe;
