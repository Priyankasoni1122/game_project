
import styled from 'styled-components';

const RoleDice = ({roleDice, currentDice}) => {
   
    
  return (
    <DiceContainer>
        <div className='dice' onClick={roleDice}>
             <img src = {`/image/dice/dice_${currentDice}.jpg`}alt="dice 1" />
        </div>
        <p> CLICK ON DICE TO ROLL </p>
    </DiceContainer>
    
  )
}

export default RoleDice;

const DiceContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 30px;

P{
    font-size: 24PX;
}

.dice{
    cursor: pointer;
}
`;
