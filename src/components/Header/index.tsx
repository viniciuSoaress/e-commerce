import { HeaderProps } from '../../types/header'
import s from './index.module.css'

export function Header({ games, onVisible }: HeaderProps) {

  return (
    <header className={s.header}>
      <h2>loja de games</h2>

      <input type="text" />

      <div className={s.cart} onClick={onVisible}>
        <p className={s.top}>{games.length}</p>
        <p>cart</p>
      </div>
    </header>
  )
}