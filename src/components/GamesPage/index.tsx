import { GamePageProps } from "../../types/gamePage";
import s from './index.module.css'


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
          <strong>Preço: {game.valor}$</strong>
        </header>

        <button className={s.buttonClose} onClick={onClose}>
          fechar
        </button>


      </section>
    </div>
  )
}