// function DataFetchingExample() {
//   const [data, setData] = useState(null);
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts/12')
//       .then((response) => response.json()).then((json) => {
//                   setData(json);
//                   setLoading(false);
//       }
//       )
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []); 
//   return (
//     <div>
//       <h1>Data Fetching Example</h1>
//       {isLoading ? (
//         <p>Loading...</p>) : data ? (
//               <div>
//                     <h2>Title: {data.title}</h2>
//                     <p>Body: {data.body}</p>
//                     <p>ID: {data.id}</p>
//               </div>) : (
//                  <p>No data available</p>
//                 )}
//     </div>
//   );
// }

// export default DataFetchingExample;






import React, { useState, useEffect } from 'react';

export default function Joker(){

  const[data,setData] = useState(null);
  const[isLoading,setLoading] = useState(true);

  useEffect(
    ()=>{
      fetch('https://jsonplaceholder.typicode.com/posts/3').
      then((response)=>response.json()).
      then((json)=>{
        setData(json);
        setLoading(false);
        console.log(data);
      })
      .catch((error)=>{
        console.log("Of Course an Error Occcured",error);
        setLoading(false);
      });
    },[]
  )

  return(
    <div>
        {
          isLoading ? (<p>Loading...</p>) : data ? (
            <div>
                <h2>Title : {data.title}</h2>
                <p> Id : {data.id}</p>
                <p> Body : {data.body}</p>
                {/* <p> Yahoo : {data.yahoo}</p> */}
            </div>
          ) : (<p> There is no fucking datas </p>)
        } 
    </div>
  )

}

