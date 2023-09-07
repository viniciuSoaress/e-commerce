import { Game } from "./data"

export type SacolaProps = {
  games: Game[],
  onClose: () => void,
  onDelete: (id: number) => void,
}