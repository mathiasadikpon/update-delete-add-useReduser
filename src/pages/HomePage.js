import React from 'react'
import useFetch from '../utils/useFetch'

const HomePage = () => {
    const [data] = useFetch("https://api.data.gov/ed/collegescorecard/v1/schools");
    console.log(data);
  return (
    <div>
      {data}
    </div>
  )
}

export default HomePage
