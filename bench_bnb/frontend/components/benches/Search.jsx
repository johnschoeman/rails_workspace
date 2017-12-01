import React, { Component } from 'react';

import BenchMap from './BenchMap';
import BenchesIndex from './BenchesIndex';

export default ({benches, fetchBenches, updateBounds}) => {
  return (
      <div>
        <BenchMap 
          benches={benches}
          updateBounds={updateBounds}
         />
        <BenchesIndex 
          benches={benches}
          fetchBenches={fetchBenches}/>
      </div>
  )
}

