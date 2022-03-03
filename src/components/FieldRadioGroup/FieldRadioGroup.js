/*
 * Renders a group of radio that can be used to select
 * a single values from a set of options.
 *
 * The corresponding component when rendering the selected
 * values is PropertyGroup.
 *
 */

import React from 'react';
import { arrayOf, bool, node, shape, string } from 'prop-types';
import classNames from 'classnames';
import { FieldArray } from 'react-final-form-arrays';
import { FieldRadioButton, ValidationError } from '../../components';

import css from './FieldRadioGroup.module.css';

const FieldRadioRenderer = props => {
  const { className, rootClassName, label, twoColumns, id, fields, options, meta } = props;

  const classes = classNames(rootClassName || css.root, className);
  const listClasses = twoColumns ? classNames(css.list, css.twoColumns) : css.list;

  return (
    <fieldset className={classes}>
      {label ? <legend>{label}</legend> : null}
      <ul className={listClasses}>
        {options.map((option, index) => {
          const fieldId = `${id}.${option.key}`;
          return (
            <li key={fieldId} className={css.item}>
              <FieldRadioButton
                id={fieldId}
                name={fields.name}
                label={option.label}
                value={option.key}
              />
            </li>
          );
        })}
      </ul>
      <ValidationError fieldMeta={{ ...meta }} />
    </fieldset>
  );
};

FieldRadioRenderer.defaultProps = {
  rootClassName: null,
  className: null,
  label: null,
  twoColumns: false,
};

FieldRadioRenderer.propTypes = {
  rootClassName: string,
  className: string,
  id: string.isRequired,
  label: node,
  options: arrayOf(
    shape({
      key: string.isRequired,
      label: node.isRequired,
    })
  ).isRequired,
  twoColumns: bool,
};

const FieldRadioGroup = props => <FieldArray component={FieldRadioRenderer} {...props} />;

// Name and component are required fields for FieldArray.
// Component-prop we define in this file, name needs to be passed in
FieldRadioGroup.propTypes = {
  name: string.isRequired,
};

export default FieldRadioGroup;
