import React from 'react';
import { connect } from 'react-redux';

import BenchForm from './BenchForm';
import { createBench } from '../../actions/bench_actions';

const mapStateToProps = (state, { location }) => {
  return {
    lat: new URLSearchParams(location.search).get('lat'),
    lng: new URLSearchParams(location.search).get('lng')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBench: (bench) => dispatch(createBench(bench))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BenchForm);