import s from './gameContent.module.css'


type GameContent = {
  children: React.ReactNode,
}


export function GameConent(
  { children }: GameContent
) {

  return (
    <>
      <div className={s.content}>
        <section className={s.container}>
          {children}
        </section>
      </div>
    </>
  )
}