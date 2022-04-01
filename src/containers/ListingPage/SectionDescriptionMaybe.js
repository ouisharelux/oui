import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { richText } from '../../util/richText';

import css from './ListingPage.module.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionDescriptionMaybe = props => {
  const { description, designer, color, retailPrice } = props;
  return description ? (
    <div className={css.sectionDescription}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="ListingPage.descriptionTitle" />
      </h2>
      <p className={css.description}>
        {richText(description, {
          longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
          longWordClass: css.longWord,
        })}
      </p>
      <div className={css.descriptionBrand}>
          <h3>
            <FormattedMessage id="ListingPage.descriptionBrand" />
          </h3>
            {designer}
      </div>
      <div className={css.descriptionColor}>
          <h3>
            <FormattedMessage id="ListingPage.descriptionColor" />
          </h3>
            {color}
      </div>
      {retailPrice && (
        <div className={css.descriptionRetailPrice}>
          <h3>
            <FormattedMessage id="ListingPage.descriptionRetailPrice" />
          </h3>
          <span className={css.descriptionRetailPriceValue}>
            {retailPrice}
          </span>
        </div>
      )}
    </div>
  ) : null;
};

export default SectionDescriptionMaybe;
