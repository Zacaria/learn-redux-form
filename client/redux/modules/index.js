import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import offer, * as fromOffer from './offer';

const reducers = combineReducers({
  offer,
  form
});

export const getOffer = state => fromOffer.getOffer(state.offer);

export default reducers;
