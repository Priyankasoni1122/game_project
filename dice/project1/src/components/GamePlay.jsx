import {useState} from 'react'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { Button, OutLineButton } from "../styled/Button";
import Rules from './Rules';

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber , setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
 const [showRules, setShowRules] = useState(false);
  
  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const roleDice = () => {
  if(!selectedNumber) 
  {
   setError("YOU HAVE NOT SELECTED ANY NUMBER");
    return;
  }
  setError("");
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);

    if(!selectedNumber) return;

    if(selectedNumber== randomNumber)
    {
      setScore((prev) => prev + randomNumber);
    }
    else{
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
};

const resetScore = () => {
  setScore(0);
}

  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore  score = {score}/>
        <NumberSelector 
        error = {error}
        setError = {setError}
        selectedNumber={selectedNumber} 
        setSelectedNumber={setSelectedNumber}/>
      </div>
      <RoleDice currentDice={currentDice}
      roleDice={roleDice}/>
      <div className='btns'>
        <OutLineButton on onClick={resetScore}>RESTART</OutLineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "HIDE" : "SHOW"} RULES</Button>
      </div>
     {showRules && <Rules />} 
       </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
padding-top: 70px;
.top_section {
  display: flex;
  justify-content: space-around;
  align-items: end;
}
.btns{
  gap: 10px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
`;
