import { Game } from "./data"

export type SacolaProps = {
  games: Game[],
  onClose: () => void,
  valor: number,
  onDelete: (id: number) => void,
}