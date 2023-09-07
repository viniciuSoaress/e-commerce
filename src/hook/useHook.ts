import { ChangeEvent, useState } from 'react'
import { datas, getGames } from '../data';
import { Game } from '../types';



export function useHook() {
  const [name, setName] = useState('')

  const result = getGames(datas, name);


  const [isGame, setIsGame] = useState('typing');

  const [game, setGame] = useState<Game>({} as Game);

  const [games, setGames] = useState<Game[]>([]);


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


  return {
    game,
    games,
    setGame,
    setGames,
    isGame,
    setIsGame,
    handleAddGameClick,
    handleDeleteGameClick,
    handleGame,
    handleNameChange,
    result
  }
}