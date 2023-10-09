// src/components/EmployeeDetails.js
import React from "react";
import { useLocation } from "react-router-dom";

const EmployeeDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  const email = searchParams.get("email");

  return (
    <div>
      <h2>Employee Details</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default EmployeeDetails;
