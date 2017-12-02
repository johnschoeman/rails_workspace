import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";

export const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
})

export const receiveBench = (bench) => ({
  type: RECEIVE_BENCH,
  bench
})

export const fetchBenches = (filters = {}) => dispatch => (
  APIUtil.getBenches(filters).then(
    benches => dispatch(receiveBenches(benches)),
    err => console.log(err)
  )
)

export const createBench = (bench) => dispatch => (
  APIUtil.postBench(bench).then(
    bench => dispatch(receiveBench(bench)),
    err => console.log(err)
  )
)
