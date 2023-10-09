import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const greeting = 'Hello, React!';

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={greeting} />
    </div>
  );
}

export default ParentComponent;
