import { ButtonProps } from "../../types";

import s from './index.module.css'


export function Button({children, onClick}: ButtonProps){

  return(
    <>
      <button 
      className={s.button}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}