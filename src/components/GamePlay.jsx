import React from "react";
import { useState } from "react";
import styled from "styled-components";
import NumberSelcter from "./NumberSelecter";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";

const GamePlay = () => {

    const [score, setscore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);


    // const RoleDice = ({roleDice, currentDice}) => {
          const generateRandomNumber = (min, max) => {
              const val =  Math.floor(Math.random() * (max - min) * min);
              if(!val){

                 return generateRandomNumber(1,7)

              }
              return val;
          };
        
          const roleDice = () => {
            if (!selectedNumber) {
                setError("you have not selected any number");
                return
            }
              const randmonNumber = generateRandomNumber(1,7);
              console.log(randmonNumber)
               setCurrentDice((prev) => randmonNumber);
               


               if(selectedNumber == randmonNumber){
                   setscore((prev) => prev + randmonNumber)
               }else{
                   setscore((prev) => prev - 2)
               }

               setSelectedNumber(undefined);
          };

          const resetScore = () =>{
              setscore (0);
          }

    return (
        <MainContainer>
            <div className="top_section">
            <TotalScore score={score}/>
            <NumberSelcter 
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            />
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice}
            />
            <div className="btns">
                {/* <Button>Reset score</Button> */}
             <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
             <Button onClick={() => setShowRules((prev) => !prev)}>
               {showRules ? "Hide" : "Show"} Rules
              </Button>
            </div>
            {showRules && <Rules />}
        </MainContainer>
    )
}

export default GamePlay;

const MainContainer = styled.main`
padding-top:70px;
.top_section{
    display: flex;
    justify-content:space-around;
}
.btns{
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
`;
