import React from "react";
import styled from "styled-components";
import { Button } from "../Styled/Button";

const StartGmae = ({toggle}) => {
    return (
        <Container>
            <div>
            <img src="/images/dices.png" />
            </div>
            <div>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGmae;

const Container = styled.div`
max-width: 1180px;
height:100vh;
display: flex;
margin: 0 auto;
align-item: center;

.content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
