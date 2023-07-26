import { useState } from "react"

import { Games, GamePage } from "./components"
import { datas } from "./data"
import { Game } from "./types/data";

export function App() {

  const [isGame, setIsGame] = useState(false);

  const [game, setGame] = useState<Game>({} as Game)

  function handleGame(item: Game) {
    setGame({
      name: item.name,
      avatar: item.avatar,
      descricao: item.descricao,
      valor: item.valor,
      id: item.id
    })
  }

  return (
    <>
      <Games
        games={datas}
        isVisible={() => setIsGame(true)}
        onGame={handleGame}
      />

      {isGame && (<GamePage game={game}
        onClose={() => setIsGame(false)}
      />)}
    </>
  )
}

