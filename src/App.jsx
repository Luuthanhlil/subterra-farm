import React from "react";
import CharacterSprite from "./CharacterSprite";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <CharacterSprite animationRow={1} />
    </div>
  );
}

export default App;
