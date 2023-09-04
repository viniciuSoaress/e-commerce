import { ChangeEvent, useState } from "react"

import { Games, GamePage, Header, Sacola, GameC } from "./components"
import { datas, getGames } from "./data"
import { Game } from "./types/data";

export function App() {

  const [name, setName] = useState('')

  const result = getGames(datas, name);


  const [isGame, setIsGame] = useState('typing');

  const [game, setGame] = useState<Game>({} as Game);

  const [games, setGames] = useState<Game[]>([]);

  let valor = 0;

  games.map(i => valor += i.valor)

  function handleGame(item: Game) {
    setGame({
      name: item.name,
      avatar: item.avatar,
      descricao: item.descricao,
      valor: item.valor,
      id: item.id
    })
  }

  function handleAddGameClick(item: Game) {
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


  function handleDeleteGameClick(id: number) {
    setGames(games.filter(game => game.id !== id))
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  return (
    <main style={{ backgroundColor: '#151516', minHeight: '100vh' }}>

      {/* <Header
        games={games}
        onVisible={() => setIsGame('sacola')}
        onName={handleNameChange}
      /> */}

      {/* {isGame !== 'games' && (<Games
        games={result}
        isVisible={() => setIsGame('game')}
        onGame={handleGame}
        onAdd={handleAddGameClick}
      />)} */}

      <GameC.Content>
        {result.map(ga => (
          <GameC.Card
            value={ga.valor} key={ga.id}
            avatar={ga.avatar}
            name={ga.name}
          >
            <GameC.Action game={ga} onClick={handleAddGameClick}>
              comprar
            </GameC.Action>
            <GameC.Action game={ga} onClick={handleGame}>
              Produtor
            </GameC.Action>
          </GameC.Card>
        ))}
      </GameC.Content>

      {/* {isGame === 'game' && (<GamePage game={game}
        onClose={() => setIsGame('typing')}
      />)} */}



      {isGame === 'sacola' && (
        <Sacola
          games={games}
          onClose={() => setIsGame('typing')}
          valor={valor}
          onDelete={handleDeleteGameClick}
        />
      )}

        {/* <footer 
        style={{width: '100%', height: 18, backgroundColor: 'rgb(182, 237, 236)'}}
        >
            s
        </footer> */}

    </main>
  )
}

