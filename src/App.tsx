import { useState } from "react"

import { Games, GamePage, Header,Sacola } from "./components"
import { datas } from "./data"
import { Game } from "./types/data";

export function App() {

  const [isGame, setIsGame] = useState('typing');

  const [game, setGame] = useState<Game>({} as Game)

  const [games, setGames] = useState<Game[]>([])

  

  function handleGame(item: Game) {
    setGame({
      name: item.name,
      avatar: item.avatar,
      descricao: item.descricao,
      valor: item.valor,
      id: item.id
    })
  }

  function handleAddGameClick(item: Game){
    setGames([
      ...games,
      {
        id: item.id,
        name: item.name,
        avatar: item.avatar,
        descricao: item.descricao,
        valor: item.valor
      }
    ])
  }

  return (
    <>

    <Header games={games} onVisible={() => setIsGame('sacola')}/>
      <Games
        games={datas}
        isVisible={() => setIsGame('game')}
        onGame={handleGame}
        onAdd={handleAddGameClick}
      />

      {isGame === 'game' && (<GamePage game={game}
        onClose={() => setIsGame('typing')}
      />)}

      {isGame === 'sacola' && (
        <Sacola />
      )}
    </>
  )
}

