import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultState = {
  bounds: {},
  minSeating: 1,
  maxSeating: 10
}

const filtersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_FILTER:
      newState[action.filter] = action.value;
      return newState;
    default:
      return state;
  }
}

export default filtersReducer;