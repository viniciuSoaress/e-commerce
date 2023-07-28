import { SacolaProps } from '../../types/sacola'
import s from './index.module.css'


export function Sacola({ games, onClose, valor, onDelete }: SacolaProps) {

  return (
    <div className={s.conteiner}>

      <div className={s.header}>
        <h2>sacola</h2>
        <button className={s.button} onClick={onClose}>
          X
        </button>
      </div>

      <ul>
        {games.map(game => (
          <li key={game.id} className={s.card}>
            <img src={game.avatar} alt={game.name} />
            <div>
              <small>{game.name}</small>
              <br />
              <small>{game.valor}$</small>
            </div>
            <button onClick={() => onDelete(game.id)}>
              x
            </button>
          </li>
        ))}
      </ul>

      <h2>valor total: {valor.toFixed(2)}$</h2>
    </div>
  )
}