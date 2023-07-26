import { MouseEventHandler } from "react"


export type GamesProps = {
  games: {
    id: number,
    name: string,
    avatar: string,
    descricao: string,
    valor: number
  }[],
  isVisible: MouseEventHandler<HTMLButtonElement>,
  onGame:(item: {
    id: number,
    name: string,
    avatar: string,
    descricao: string,
    valor: number
  }) => void,
}