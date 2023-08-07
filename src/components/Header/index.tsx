import { HeaderProps } from '../../types/header'
import s from './index.module.css'
import { ShoppingCart } from 'phosphor-react'

export function Header({ games, onVisible, onName }: HeaderProps) {

  return (
    <header className={s.header}>

      <div className={s.text}>

        <h2>Vin Games</h2>

        <input
          type="text"
          onChange={onName}
          placeholder='nome do jogo'
          className={s.input}
        />
      </div>

      <div className={s.cart} onClick={onVisible}>

        <p className={s.top}>{games.length}</p>

        <p>
          <ShoppingCart size={32}/>
        </p>

      </div>
    </header>
  )
}