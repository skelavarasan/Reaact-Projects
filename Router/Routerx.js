import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: yellowgreen;
  padding: 16px;
`;

const StyledTitle = styled.h1`
  font-size: 24px;
  color: #333;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function StyledComponentExample() {
  return (
    <StyledContainer>
      <StyledTitle>Welcome to Styled Components Example
      <p>This is a simple React component styled using styled-components.</p>
      </StyledTitle>
      <StyledButton>Click Me</StyledButton>
    </StyledContainer>
  );
}

export default StyledComponentExample;
