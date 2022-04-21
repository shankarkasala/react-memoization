import React, { useState, useCallback } from 'react';
import './style.css';
import Tiltle from './Tiltle';
import Count from './Count';
import Button from './Button';
export default function App() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  const incrementAge = useCallback(() => {
    if (age < 100) {
      setAge(age + 1);
    }
  }, [age]);
  const incrementSalary = useCallback(() => {
    if (salary < 1000000) {
      setSalary(salary + 100000);
    }
  }, [salary]);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Tiltle />
      <Count text="age" count={age} />
      <Button handleclick={incrementAge}>increment Age</Button>
      <Count text="salary" count={salary} />
      <Button handleclick={incrementSalary}>incrementSalary</Button>
    </div>
  );
}
