import { GamePageProps } from "../../types";
import { Button } from "../Button";
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

        </header>

        <div className={s.buttonC}>

          <strong>Preço: {game.valor}$</strong>

          <Button onClick={onClose}>
            Fechar
          </Button>

        </div>

      </section>
    </div>
  )
}