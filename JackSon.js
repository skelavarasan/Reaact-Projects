import React, { useEffect, useState } from 'react';

function JackSon() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/employee')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setEmployees(data);
        } else {
          console.error(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Employee Information</h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <p>Name: {employee.name}</p>
            <p>Age: {employee.age}</p>
            <p>City: {employee.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JackSon;
