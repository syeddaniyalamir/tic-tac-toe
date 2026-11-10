
import { useState } from "react";
import Home from "./Components/Home";
import GameBoard from "./Components/GameBoard";

function App() {
  const [startGame, setStartGame] = useState(false);

  return (
    <>
      {startGame ? (
        <GameBoard onQuit={() => setStartGame(false)} />
      ) : (
        <Home onStart={() => setStartGame(true)} />
      )}
    </>
  );
}

export default App;
