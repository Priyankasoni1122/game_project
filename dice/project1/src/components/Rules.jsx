import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play Dice Game</h2>
      <div className='text'>
        <p>1. Select any number</p>
        <p>2. Click on dice image</p>
        <p>
            3. After click on dice if selected number is equal to dice number you will get same point as dice{" "}
        </p>
        <p>4. if you get wrong then 2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #ecf2f7;
padding: 20px;
margin-top: 20px;
border-radius: 10px;
h2 {
    font-size: 24px;
}
.text {
    margin-top: 24px;
}
`;
