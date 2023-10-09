import React, { useRef } from 'react';

function AccessDomElement() {
  
  const myRef = useRef();

  const handleButtonClick = () => {
    myRef.current.style.color = 'yellow';
  };

  return (
    <div>
      
      <p ref={myRef}>This is a DOM element.</p>
      <button onClick={handleButtonClick}>Change Color</button>

    </div>
  );
}

export default AccessDomElement;
