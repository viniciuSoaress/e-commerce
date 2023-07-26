import { GamePageProps } from "../../types/gamePage";



export function GamePage({ game,onClose }: GamePageProps) {

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#fff' }}>

      <button onClick={onClose} style={{width: 'auto'}}>
        close
      </button>
      <img src={game.avatar} alt="" width={100} />
    </div>
  )
}