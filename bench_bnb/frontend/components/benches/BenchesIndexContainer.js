import React from 'react';
import { connect } from 'react-redux';

import BenchesIndex from './BenchesIndex';
import { fetchBenches } from '../../actions/bench_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    benches: state.entities.benches
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchBenches: () => dispatch(fetchBenches())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BenchesIndex);