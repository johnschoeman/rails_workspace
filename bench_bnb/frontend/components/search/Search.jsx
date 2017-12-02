import React, { Component } from 'react';

import BenchMap from '../bench_map/BenchMap';
import BenchesIndex from './BenchesIndex';
import FilterForm from './FilterForm';

export default ({benches, minSeating, maxSeating, fetchBenches, updateFilter}) => {
  return (
      <div>
        <BenchMap 
          benches={benches}
          updateFilter={updateFilter}
         />
        <FilterForm 
          updateFilter={updateFilter}
          minSeating={minSeating}
          maxSeating={maxSeating}
        />
        <BenchesIndex 
          benches={benches}
          fetchBenches={fetchBenches}/>
      </div>
  )
}

