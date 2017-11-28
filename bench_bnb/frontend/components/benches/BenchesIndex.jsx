import React, { Component } from 'react'

import BenchIndexItem from './BenchIndexItem';

class BenchesIndex extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    const benchesById = this.props.benches.by_id
    const benchesAllIds = this.props.benches.all_ids
    if (benchesById) {
      return(
        <div>
          {benchesAllIds.map((benchId) => {
            let bench = benchesById[benchId]
            return <BenchIndexItem key={`bench-item-${benchId}`}bench={bench} />
          })}
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default BenchesIndex;