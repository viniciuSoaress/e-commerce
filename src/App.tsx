
import { GamePage, Header, Sacola, GameC } from "./components"
import { useHook } from "./hook/useHook"


export function App() {

  const {
    game,
    games,
    handleAddGameClick,
    handleDeleteGameClick,
    handleGame,
    handleNameChange,
    isGame,
    setIsGame,
    result
  } = useHook()

  return (
    <>

      <main style={{ backgroundColor: '#151516', width: '100vw' }}>

        <Header
          onVisible={() => setIsGame('sacola')}
          onName={handleNameChange}
        />

        {isGame === 'typing' &&
          (<GameC.Content>
            {result.map(ga => (
              <GameC.Card
                value={ga.valor} key={ga.id}
                avatar={ga.avatar}
                name={ga.name}
              >
                <GameC.Action game={ga} onClick={handleAddGameClick}>
                  comprar
                </GameC.Action>
                <GameC.Action game={ga} onClick={() => {
                  handleGame(ga)
                  setIsGame('game')
                }}>
                  Produtor
                </GameC.Action>
              </GameC.Card>
            ))}
          </GameC.Content>)}

        {isGame === 'game' && (<GamePage game={game}
          onClose={() => setIsGame('typing')}
        />)}



        {isGame === 'sacola' && (
          <Sacola
            games={games}
            onClose={() => setIsGame('typing')}
            onDelete={handleDeleteGameClick}
          />
        )}



      </main>

      <footer style={{backgroundColor: '#151516', widows: '100vw', height:'2rem'}}>

      </footer>
    </>
  )
}

