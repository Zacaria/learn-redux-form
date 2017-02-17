export const SUBMIT_OFFER_REQUEST = 'SUBMIT_OFFER_REQUEST';
export const SUBMIT_OFFER_SUCCESS = 'SUBMIT_OFFER_SUCCESS';
export const SUBMIT_OFFER_ERROR = 'SUBMIT_OFFER_ERROR';

export default function offer(state = {}, action) {
  switch (action.type) {
    case SUBMIT_OFFER_SUCCESS:
      return Object.assign(state, action.newOffer);
    default:
      return state;
  }
}

export function submit(newOffer) {
  return (dispatch) => {
    dispatch({
      type: SUBMIT_OFFER_REQUEST,
      newOffer
    });
    setTimeout(() => {
      dispatch({
        type: SUBMIT_OFFER_SUCCESS,
        newOffer
      });
    }, 1500);
  };
}

export function getOffer(state) {
  return state;
}
