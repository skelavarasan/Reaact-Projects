import React from 'react'
import styled from 'styled-components'
function StyledComponents() {

    const StyledContainer = styled.div`
    background-color : yellow;
    padding : 16px;
    `

    const StyledTitle = styled.h1`
    font-size: 24px;
    color: #333;
    `

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
`  

  return (
    <div>
        <StyledContainer>
            <StyledTitle>
                Hey Bruh Welcome to Styled Components
            </StyledTitle>
            <StyledButton onClick={(touch)=>{alert("Haha Joker")}}>Touch Me</StyledButton>
        </StyledContainer>
    </div>
  )
}

export default StyledComponents