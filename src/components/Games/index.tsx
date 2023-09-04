import { MouseEventHandler, useState } from "react";

import { Game, GamesProps } from "../../types";
import { Button } from "../Button";
import s from './index.module.css'


export function Games({ games, isVisible, onGame, onAdd }: GamesProps) {


  return (
    <section className={s.section}>
      {games.map(game => (
        <div key={game.id} className={s.cardGame}>
          <img src={game.avatar} alt={game.name} />
          <p>{game.name}</p>

          <p className={s.valor}>Valor: {game.valor}$</p>

          <article className={s.article}>
            <ButtonConteiner
              game={game}
              onAdd={onAdd}
              onGame={onGame}
              isVisible={isVisible}
            />


          </article>
        </div>
      ))}
    </section>
  )
}

type ButtoCProps = {
  isVisible: MouseEventHandler<HTMLButtonElement>,
  onGame: (item: Game) => void,
  onAdd: (item: Game) => void,
  game: Game
}


function ButtonConteiner({ onGame, onAdd, game, isVisible }: ButtoCProps) {

  const [is, setIs] = useState(false)

  return (
    <>
      <Button onClick={(e: any) => {
        isVisible(e)
        onGame(game)
      }}>
        Produto
      </Button>

      {!is && <Button onClick={() => {
        onAdd(game)
        setIs(true)
      }}>
        Comprar
      </Button>}
    </>
  )

}


function Card(){
  
}