import { GamePageProps } from "../../types";
import s from './index.module.css'
import { formt } from "../../utils/format";


export function GamePage({ game, onClose }: GamePageProps) {

  

  return (
    <div className={s.conteiner}>
      <section className={s.section}>

        <header>
          <h2>{game.name}</h2>

          <img
            src={game.avatar}
            alt={game.name}
            className={s.image}
          />

          <p>{game.descricao}</p>

        </header>

        <div className={s.buttonC}>

          <strong>Valor: {formt(game.valor)}</strong>

          <button onClick={onClose}>
            Fechar
          </button>

        </div>

      </section>
    </div>
  )
}