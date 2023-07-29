import { useState } from "react";

import { GamesProps } from "../../types";
import { Button } from "../Button";
import s from './index.module.css'


export function Games({ games, isVisible, onGame, onAdd }: GamesProps) {
  
  const [is, setIs] = useState(false)

  return (
    <section className={s.section}>
      {games.map(game => (
        <div key={game.id} className={s.cardGame}>
          <img src={game.avatar} alt={game.name}  />
          <p>{game.name}</p>

          <p className={s.valor}>Valor: {game.valor}$</p>

          <article className={s.article}>

           {!is && <Button onClick={(e) => {
              isVisible(e)
              onGame(game)
            }}>
              Produto
            </Button>}

            <Button onClick={() => {
              onAdd(game)
                setIs(true)
              }}>
                Comprar
            </Button>
          </article>
        </div>
      ))}
    </section>
  )
}