import React, { useState } from 'react';

function EmployeeManagement() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    age: '',
    city: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({
      ...newEmployee,
      [name]: value,
    });
  };

  const handleCreate = () => {
    
    if (newEmployee.name && newEmployee.age && newEmployee.city) {
      
      const updatedEmployees = [...employees, newEmployee];

      
      setEmployees(updatedEmployees);
      setNewEmployee({
        name: '',
        age: '',
        city: '',
      });

      console.log('Employee created:', newEmployee);
    } else {
      console.error('Please fill in all fields before creating an employee.');
    }
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newEmployee.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newEmployee.age}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={newEmployee.city}
          onChange={handleInputChange}
        />
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
}

export default EmployeeManagement;
