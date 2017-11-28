import React from 'react'

export default ({bench}) => {
  console.log(bench)
  return (
    <div>
      <h3>Bench at {`lat: ${bench.lat}, lng: ${bench.lng}`}</h3>
      <div>
        Description: {bench.description}
      </div>
    </div>
  )
}