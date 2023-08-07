import { SacolaProps } from '../../types/sacola'
import { Button } from '../Button'
import s from './index.module.css'


export function Sacola({ games, onClose, valor, onDelete }: SacolaProps) {

  const arry = games.filter((este, i) => {
    return games.indexOf(este) === i
  })
  return (
    <div className={s.conteiner}>

      <div className={s.header}>

        <h2>sacola</h2>

        <Button onClick={onClose}>
          Fechar
        </Button>

      </div>

      <ul>
        {arry.map(game => (

          <li key={game.id } className={s.card}>

            <img src={game.avatar} alt={game.name} />

            <div>
              <small>{game.name}</small>
              <br />
              <small>{game.valor}$</small>
            </div>

            <Button onClick={() => onDelete(game.id)}>
              x
            </Button>
            
          </li>

        ))}
      </ul>

      <h2 className={s.h2}>valor total: {valor.toFixed(2)}$</h2>
    </div>
  )
}