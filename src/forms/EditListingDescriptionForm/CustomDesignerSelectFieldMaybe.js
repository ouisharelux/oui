import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.module.css';

const CustomDesignerSelectFieldMaybe = props => {
  const { name, id, designers, intl } = props;
  const designerLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.designerLabel',
  });
  const designerPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.designerPlaceholder',
  });
  const designerRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.designerRequired',
    })
  );
  return designers ? (
    <FieldSelect
      className={css.designer}
      name={name}
      id={id}
      label={designerLabel}
      validate={designerRequired}
    >
      <option disabled value="">
        {designerPlaceholder}
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
