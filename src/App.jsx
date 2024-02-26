import React from "react";
import { useState } from "react";
import GamePlay from "./components/GamePlay";
import StartGmae from "./components/StartGame";


function App() {
   const [isGameStarted, setisGameStarted] = useState(false);

   const toggleGamePlay = () => {
     setisGameStarted((prev) => !prev);
   }
 

  return (<>
      {
        isGameStarted ? <GamePlay /> : <StartGmae toggle={toggleGamePlay} />
      }
    {/* <StartGmae /> */}
    </>
  )
}

export default App
