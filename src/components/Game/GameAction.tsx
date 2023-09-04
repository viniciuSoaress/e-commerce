import { Game } from "../../types"


type GameAction = {
  onClick: (item: Game) => void,
  children: React.ReactNode,
  game: Game
}


export function GameAction({
  onClick,
  children,
  game
}: GameAction) {

  return(
    <>
      <button onClick={() =>onClick(game)}>
        {children}
      </button>
    </>
  )
}