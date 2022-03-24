/*
 * Marketplace specific configuration.
 *
 * Every filter needs to have following keys:
 * - id:     Unique id of the filter.
 * - label:  The default label of the filter.
 * - type:   String that represents one of the existing filter components:
 *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
 *           SelectSingleFilter, SelectMultipleFilter.
 * - group:  Is this 'primary' or 'secondary' filter?
 *           Primary filters are visible on desktop layout by default.
 *           Secondary filters are behind "More filters" button.
 *           Read more from src/containers/SearchPage/README.md
 * - queryParamNames: Describes parameters to be used with queries
 *                    (e.g. 'price' or 'pub_amenities'). Most of these are
 *                    the same between webapp URLs and API query params.
 *                    You can't change 'dates', 'price', or 'keywords'
 *                    since those filters are fixed to a specific attribute.
 * - config: Extra configuration that the filter component needs.
 *
 * Note 1: Labels could be tied to translation file
 *         by importing FormattedMessage:
 *         <FormattedMessage id="some.translation.key.here" />
 *
 * Note 2: If you need to add new custom filter components,
 *         you need to take those into use in:
 *         src/containers/SearchPage/FilterComponent.js
 *
 * Note 3: If you just want to create more enum filters
 *         (i.e. SelectSingleFilter, SelectMultipleFilter),
 *         you can just add more configurations with those filter types
 *         and tie them with correct extended data key
 *         (i.e. pub_<key> or meta_<key>).
 */

export const filters = [
  {
    id: 'dates',
    label: 'Dates',
    type: 'BookingDateRangeFilter',
    group: 'primary',
    // Note: BookingDateRangeFilter is fixed filter,
    // you can't change "queryParamNames: ['dates'],"
    queryParamNames: ['dates'],
    config: {},
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 1000,
      step: 5,
    },
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
  {
    id: 'category',
    label: 'Category',
    type: 'SelectSingleFilter',
    group: 'secondary',
    queryParamNames: ['pub_category'],
    config: {
      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'smoke', label: 'Smoke' },
        { key: 'electric', label: 'Electric' },
        { key: 'wood', label: 'Wood' },
        { key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'designer',
    label: 'Designers',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_designers'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',

      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        {
          key: 'alexander_wang',
          label: 'Alexander Wang',
        },
        {
          key: 'amina_muaddi',
          label: 'Amina Muaddi',
        },
        {
          key: 'balenciaga',
          label: 'Balenciaga',
        },
        {
          key: 'bottega_veneta',
          label: 'Bottega Veneta',
        },
        {
          key: 'by_far',
          label: 'By Far',
        },
        {
          key: 'celine',
          label: 'Celine',
        },
        {
          key: 'chanel',
          label: 'Chanel',
        },
        {
          key: 'chloe',
          label: 'Chloe',
        },
        {
          key: 'christian_dior',
          label: 'Christian Dior',
        },
        {
          key: 'cult_gaia',
          label: 'Cult Gaia',
        },
        {
          key: 'dolce_gabbana',
          label: 'Dolce & Gabbana',
        },
        {
          key: 'fendi',
          label: 'Fendi',
        },
        {
          key: 'givenchy',
          label: 'Givenchy',
        },
        {
          key: 'goyard',
          label: 'Goyard',
        },
        {
          key: 'gucci',
          label: 'Gucci',
        },
        {
          key: 'hermes',
          label: 'Hermes',
        },
        {
          key: 'jacquemus',
          label: 'Jacquemus',
        },
        {
          key: 'jimmy_choo',
          label: 'Jimmy Choo',
        },
        {
          key: 'loewe',
          label: 'Loewe',
        },
        {
          key: 'louis_uitton',
          label: 'Louis Vuitton',
        },
        {
          key: 'mansur_gavriel',
          label: 'Mansur Gavriel',
        },
        {
          key: 'prada',
          label: 'Prada',
        },
        {
          key: 'saint_laurent',
          label: 'Saint Laurent',
        },
        {
          key: 'staud',
          label: 'Staud',
        },
        {
          key: 'telfar',
          label: 'Telfar',
        },
        {
          key: 'the_attico',
          label: 'The Attico',
        },
        {
          key: 'valentino',
          label: 'Valentino',
        },
        {
          key: 'versace',
          label: 'Versace',
        },
      ],
    },
  },
  {
    id: 'color',
    label: 'Color',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_color'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',

      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        {
          key: "beige",
          label: "Beige",
        },
        {
          key: "black",
          label: "Black",
        },
        {
          key: "blue",
          label: "Blue",
        },
        {
          key: "brown",
          label: "Brown",
        },
        {
          key: "burgundy",
          label: "Burgundy",
        },
        {
          key: "camel",
          label: "Camel",
        },
        {
          key: "ecru",
          label: "Ecru",
        },
        {
          key: "gold",
          label: "Gold",
        },
        {
          key: "gray",
          label: "Gray",
        },
        {
          key: "green",
          label: "Green",
        },
        {
          key: "metallic",
          label: "Metallic",
        },
        {
          key: "multicolor",
          label: "Multicolor",
        },
        {
          key: "navy",
          label: "Navy",
        },
        {
          key: "orange",
          label: "Orange",
        },
        {
          key: "pink",
          label: "Pink",
        },
        {
          key: "purple",
          label: "Purple",
        },
        {
          key: "red",
          label: "Red",
        },
        {
          key: "silver",
          label: "Silver",
        },
        {
          key: "turquoise",
          label: "Turquoise",
        },
        {
          key: "white",
          label: "White",
        },
        {
          key: "yellow",
          label: "Yellow",
        },
        {
          key: "other",
          label: "Other",
        },
      ],
    },
  }
];

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Flex API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Keyword filter is sorting the results already by relevance.
  // If keyword filter is active, we need to disable sorting.
  conflictingFilters: ['keyword'],

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};
