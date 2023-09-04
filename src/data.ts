import { Game } from "./types/data";


export function getGames( games: Game[], state: string){
 
  state = state.toLocaleLowerCase();

  return games.filter(game => 
    game.descricao.split(' ').some(item => item.toLocaleLowerCase().startsWith(state))
  )
}


export const datas = [
  {
    id: 0, 
    name: 'Super Mario World',
    avatar: 'https://th.bing.com/th/id/R.a690f107545871b4c9750468ed0f30cd?rik=hs4tlEGYG2IyeQ&pid=ImgRaw&r=0',
    descricao: 'super mario world, jogo da empresa nintendo',
    valor: 45,
  },
  {
    id: 1, 
    name: 'Dragon Ball Fighter Z',
    avatar: 'https://cdn.shopify.com/s/files/1/0875/3268/products/Dragon-Ball-FighterZ-PC-Game-Steam-CD-Key_grande.jpg?v=1533782264',
    descricao: 'Dragon Ball Fighter Z, jogo de pc da empreja bandai',
    valor: 89.45, 
  },
  {
    id: 2,
    name: 'Naruto Storm 3',
    avatar: 'https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_NarutoShippudenUltimateNinjaStorm3FullBurstHd.jpg',
    descricao: 'Naruto storm 3, jogo multi plataforma do anime naruto shippuden',
    valor: 97.80
  },
  {
    id: 3,
    name: 'Grand Theft Auto V',
    avatar: 'https://www.nicemodz.com/wp-content/uploads/2017/07/grand-theft-auto-v-1.jpg',
    descricao: 'Grand Theft Auto V, jogo multi plataforma da rockstar',
    valor: 136.80
  },
  {
    id: 4,
    name: 'the legend of Zelda',
    avatar: 'https://th.bing.com/th/id/R.342ff9a48fa3b2cb06063e527c210357?rik=YkjojcNbjoEWBQ&pid=ImgRaw&r=0',
    descricao: 'The legend of zelda, jogo de nintendo ds, de aventura e esploração',
    valor: 276.80
  },
  {
    id: 5,
    name: 'the legend of Zelda',
    avatar: 'https://th.bing.com/th/id/R.342ff9a48fa3b2cb06063e527c210357?rik=YkjojcNbjoEWBQ&pid=ImgRaw&r=0',
    descricao: 'The legend of zelda, jogo de nintendo ds, de aventura e esploração',
    valor: 276.80
  },
  {
    id: 6,
    name: 'the legend of Zelda',
    avatar: 'https://th.bing.com/th/id/R.342ff9a48fa3b2cb06063e527c210357?rik=YkjojcNbjoEWBQ&pid=ImgRaw&r=0',
    descricao: 'The legend of zelda, jogo de nintendo ds, de aventura e esploração',
    valor: 276.80
  },
  {
    id: 7,
    name: 'Call Of Duty Black Ops III',
    avatar: 'https://th.bing.com/th/id/OIP.4mZU1PU7MR3-kpSBL6EzAQHaHa?pid=ImgDet&w=1080&h=1080&rs=1',
    descricao: 'Call Of Duty Black Ops III, jogo de ação e sobrevivencias',
    valor: 126.00
  },
]