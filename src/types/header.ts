import { ChangeEvent, MouseEventHandler } from "react"
import { Game } from "./data"


export type HeaderProps = {
  games: Game[],
  onVisible: MouseEventHandler<HTMLDivElement>,
  onName: (e: ChangeEvent<HTMLInputElement>) => void,
}