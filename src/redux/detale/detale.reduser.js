import DelatetActionTypes from './detale.types';
import { addItemToDetalet ,removeItemFromDetalet } from './detale.utils';
const INITIAL_STATE = {
  delatetItems: []
}

const delatetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DelatetActionTypes.ADD_ITEM:
      return {
        ...state,
        delatetItems: addItemToDetalet(state.delatetItems, action.payload)
      }
      case DelatetActionTypes.REMOVE_ITEM:
      return {
        ...state,
        delatetItems: removeItemFromDetalet(state.delatetItems, action.payload)
      }

    default:
      return state;
  }
}

export default delatetReducer;

