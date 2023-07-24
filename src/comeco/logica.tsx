import { MouseEventHandler, useState } from "react"


const prods = [
  { id: 0, name: 'arroz', preco: 5.50, descricao: 'alimento' },
  { id: 1, name: 'fejao', preco: 8, descricao: 'alimento' },
  { id: 2, name: 'sabao', preco: 26, descricao: 'limpesa' },
  { id: 3, name: 'vasolra', preco: 12, descricao: 'limpesa' },
  { id: 4, name: 'detegente', preco: 1.99, descricao: 'limpesa' },
  { id: 5, name: 'ovos', preco: 22, descricao: 'alimento' },
  { id: 6, name: 'macarrao', preco: 3.24, descricao: 'alimento' },
  { id: 7, name: 'manteiga', preco: 8.54, descricao: 'alimento' },
  { id: 8, name: 'queijo', preco: 85, descricao: 'alimento' },
  { id: 9, name: 'farinha', preco: 4, descricao: 'alimento' },
  { id: 10, name: 'batata', preco: 2.8, descricao: 'alimento' },
  { id: 11, name: 'cebola', preco: 3, descricao: 'alimento' },

]


type Products = {
  id: number,
  name: string,
  preco: number,
  descricao: string,
}

export function Inplementacao() {

  const [products, setProducts] = useState<Products[]>([]);

  const [isCart, setIsCart] = useState(false);

  const [p, setP] = useState<Products>({} as Products);


  function handleIsCart(it: Products) {
    setIsCart(ic => !ic)
    setP({ id: it.id, name: it.name, preco: it.preco, descricao: it.descricao })
  }

  function handleAddClick(prod: Products) {
    setProducts([
      ...products,
      {
        id: prod.id,
        name: prod.name,
        preco: prod.preco,
        descricao: prod.descricao
      }
    ])
  }

  return (
    <>
      <h2>produtos da loja</h2>

      <main style={{ display: 'flex', flexFlow: ' row wrap', }}>

        {prods.map(p => (
          <Produtos
            key={p.id}
            p={p}
            onClick={() => handleAddClick(p)}
            onClickVisible={() => handleIsCart(p)}
          />
        ))}

        <hr />
        <hr />
        <hr />

        {/* {products.map(p => (
          <p key={p.id}>
            {p.name}{' '}
            {p.preco}{' '}
            {p.descricao}{' '}
          </p>
        ))} */}
      </main>
        <Sacola p={products}/>

      {isCart && (<Prod produtos={p} onClick={() => setIsCart(false)} />)}
    </>
  )
}


type ProductsProps = {
  p: {
    name: string,
    preco: number,
    descricao: string,
  }
  onClick: MouseEventHandler<HTMLButtonElement>,
  onClickVisible: MouseEventHandler<HTMLButtonElement>
}

function Produtos({ p, onClick, onClickVisible }: ProductsProps) {

  return (
    <div style={{ border: '1px solid ' }}>

      <p>nome: {p.name}</p>
      <small>preço: {p.preco}$</small>
      <br />
      <small>descrição: {p.descricao}</small>
      <br />
      <button onClick={onClick}>
        comprar
      </button>
      <button onClick={onClickVisible}>
        ver produto
      </button>
    </div>
  )
}

type ProdProps = {
  produtos: Products,
  onClick: MouseEventHandler<HTMLButtonElement>
}
function Prod({ produtos, onClick }: ProdProps) {


  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#6eac23', position: 'absolute', zIndex: 1, top: 0 }}>

      <button onClick={onClick}>
        x
      </button>
      <h3>{ }</h3>
      <p>{produtos.name}</p>
    </div>
  )
}


type SacolaProps = {
  p: Products[]
}
function Sacola({ p }: SacolaProps) {

  

  return (
    <div style={{ zIndex: 1, top: 0, right: 0}}>
      <h2>{p.length}</h2>
      <ul>
        {p.map(d => (
          <li key={d.id}>
            {d.name}
            {d.preco}
            
          </li>
      ))}
      </ul>

      <h4>preco:{}</h4>
    </div>
  )
}