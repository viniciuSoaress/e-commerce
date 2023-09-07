import s from './gameCArd.module.css'
import { formt } from "../../utils/format";


type GameCard = {
  value: number,
  avatar: string,
  name: string,
  children: React.ReactNode
}

export function GameCard({
  value,
  children, 
  avatar ='',
  name = ''
}: GameCard
) {


 

  return (
    <section className={s.card}>
      <img src={avatar} alt={name}  width={76}/>
      <p>{name}</p>
      <p>{formt(value)}</p>

      <div className={s.actions}>{children}</div>
    </section>
  )
}