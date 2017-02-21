import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { FORM_NAME } from '../../containers/OfferForm';

import offer, * as fromOffer from './offer';

const reducers = combineReducers({
  offer,
  form: formReducer.plugin({
    [FORM_NAME]: (state, action) => { // <------ 'account' is name of form given to reduxForm()
      switch (action.type) {
        case fromOffer.SUBMIT_OFFER_SUCCESS:
          return undefined;       // <--- blow away form data
        default:
          return state;
      }
    }
  })
});

export const getOffer = state => fromOffer.getOffer(state.offer);

export default reducers;
