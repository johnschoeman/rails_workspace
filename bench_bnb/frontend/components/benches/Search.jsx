import React, { Component } from 'react';

import BenchMap from './BenchMap';
import BenchesIndex from './BenchesIndex';

export default ({benches, fetchBenches}) => (
      <div>
        <BenchMap />
        <BenchesIndex 
          benches={benches}
          fetchBenches={fetchBenches}/>
      </div>
)

