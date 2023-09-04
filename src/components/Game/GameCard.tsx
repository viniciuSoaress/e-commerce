import s from './gameCArd.module.css'

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


  function formt(num: number){
   return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
   }).format(num)
  }

  return (
    <section className={s.card}>
      <img src={avatar} alt={name}  width={76}/>
      <p>{name}</p>
      <p>{formt(value)}</p>

      <div className={s.actions}>{children}</div>
    </section>
  )
}