import { fetchBenches } from './bench_actions'; 

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const updateBounds = (bounds) => (dispatch, getState) => {
  dispatch({type: UPDATE_BOUNDS, bounds})
  console.log(getState)
  return fetchBenches(getState().ui.filters)(dispatch)
}