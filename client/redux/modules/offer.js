export const FETCH_OFFER = 'FETCH_OFFER';
export const EDIT_OFFER = 'EDIT_OFFER';

export default function offer(state = {}, action) {
  switch (action.type) {
    case EDIT_OFFER:
      return Object.assign(state, action.offer);
    default:
      return state;
  }
}

export function edit(newOffer) {
  return {
    type: EDIT_OFFER,
    newOffer
  };
}

export function getOffer(state) {
  return state;
}
