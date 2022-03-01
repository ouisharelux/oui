import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-newyork',
    predictionPlace: {
      address: 'New York, New York',
      bounds: new LatLngBounds(new LatLng(40.830104, -73.939626), new LatLng(40.701595, -74.015538)),
    },
  },
  {
    id: 'default-miami',
    predictionPlace: {
      address: 'Miami, Florida',
      bounds: new LatLngBounds( new LatLng(25.7616798, -80.1917902), new LatLng(25.7823907, -80.2994991)),
    },
  },
];
export default defaultLocations;