import React from 'react'

function Desturcturing() {
    const a = [7,12,3,4,5];

    const [second,first] = a;

    console.log("First:",first);
    console.log("Second:",second);

  return (
    <div>
      <h2>First: {first}</h2>
      <h2>Second: {second}</h2>    </div>
  )
}

export default Desturcturing