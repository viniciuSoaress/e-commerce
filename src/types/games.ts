import { MouseEventHandler } from "react"
import { Game } from "./data"


export type GamesProps = {
  games: Game[],
  isVisible: MouseEventHandler<HTMLButtonElement>,
  onGame:(item: Game) => void,
  onAdd: (item: Game) => void,
}