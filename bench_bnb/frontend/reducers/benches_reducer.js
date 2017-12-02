import { RECEIVE_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';

export const benchesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_BENCHES:
      return action.benches;
    case RECEIVE_BENCH:
      newState.by_id[action.bench.id] = action.bench;
      newState.all_ids.push(action.bench.id);
      return newState;
    default:
      return state;
  }
}