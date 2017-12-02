import React from 'react';
import { connect } from 'react-redux';

import Search from './Search';
import { fetchBenches } from '../../actions/bench_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    benches: state.entities.benches,
    minSeating: state.ui.filters.minSeating,
    maxSeating: state.ui.filters.maxSeating
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchBenches: () => dispatch(fetchBenches()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);