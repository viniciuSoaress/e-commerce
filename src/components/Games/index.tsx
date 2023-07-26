import { GamesProps } from "../../types";
import s from './index.module.css'


export function Games({ games, isVisible,onGame }: GamesProps) {

  return (
    <section className={s.section}>
      {games.map(game => (
        <div key={game.id} className={s.cardGame}>
          <img src={game.avatar} alt={game.name} width={80} />
          <p>name: {game.name}</p>

          <p>preço: {game.valor}$</p>

          <article>
            <button onClick={(e) => {
              isVisible(e)
              onGame(game)
            }}>
              ver
            </button>
            <button>comprar</button>
          </article>
        </div>
      ))}
    </section>
  )
}