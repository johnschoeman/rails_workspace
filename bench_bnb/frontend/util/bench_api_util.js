export const getBenches = ({bounds, minSeating, maxSeating}) => (
  $.ajax({
    method: "GET",
    url: "api/benches",
    data: {
      filter: {
        bounds,
        min_seating: minSeating,
        max_seating: maxSeating
      }
    },
    error: (err) => console.log(err)
  })
)

export const postBench = (bench) => (
  $.ajax({
    method: "POST",
    url: "api/benches",
    data: {bench},
    error: (err) => console.log(err)    
  })
)