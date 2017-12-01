import React from 'react';
import { connect } from 'react-redux';

import Search from './Search';
import { fetchBenches } from '../../actions/bench_actions';
import { updateBounds } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    benches: state.entities.benches
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchBenches: () => dispatch(fetchBenches()),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);