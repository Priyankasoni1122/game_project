import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({toggle}) => {
  return (
    <Container>
    <img src= "/image/dice.jpg" />
    <div className="content">
        <h1> Dice Game </h1>
        <Button on onClick={toggle}> Play Now</Button>
    </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
max-width: 1250px;
gap : 100px;
display: flex;
margin: 100px 400px;
height: 60vh;
align-items: center;
.content {
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}

`;

