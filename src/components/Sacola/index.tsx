import { SacolaProps } from '../../types/sacola'
import { Button } from '../Button'
import s from './index.module.css'
import { formt } from "../../utils/format";





export function Sacola({ games, onClose, onDelete }: SacolaProps) {
  
  let arry = games.filter((este, i) => {
    return games.indexOf(este) === i
  })

  arry = arry.filter((value, index, self) => self.findIndex(item => item.id === value.id) === index)
  
  const value = arry.reduce((acc, int) => acc + int.valor, 0)

  


  return (
    <div className={s.conteiner}>

      <div className={s.header}>

        <h2 className={s.h2}>sacola</h2>

        <Button onClick={onClose}>
          Fechar
        </Button>

      </div>

      


      <ul className={s.ul}>
        {arry.map(game => (

          <li key={game.id} className={s.card}>

            <img src={game.avatar} alt={game.name} />

            <div>
              <small>{game.name}</small>
              <br />
              <small>{formt(game.valor)}</small>
            </div>

            <Button onClick={() => onDelete(game.id)}>
              x
            </Button>

          </li>

        ))}
      </ul>

      <h2 className={s.h2}>valor total: {formt(value)}</h2>
    </div>
  )
}