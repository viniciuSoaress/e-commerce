import { HeaderProps } from '../../types/header'
import s from './index.module.css'
import { ShoppingCart } from 'phosphor-react'

export function Header({ games, onVisible, onName }: HeaderProps) {

  return (
    <header className={s.header}>

      <div className={s.headerContent}>

        <h1>Games</h1>

        <input
          type="text"
          onChange={onName}
          placeholder='nome do jogo'
          className={s.input}
        />

      </div>

      <div className={s.cart} onClick={onVisible}>

        <span className={s.cartValue}>{games.length}</span>

        <p><ShoppingCart size={28} /></p>

      </div>
      
    </header>
  )
}