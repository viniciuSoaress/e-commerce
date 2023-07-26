import { MouseEventHandler } from "react"
import { Game } from "./data"


export type GamePageProps = {
  game: Game
  onClose: MouseEventHandler<HTMLButtonElement>
}