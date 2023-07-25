import { MouseEventHandler, useState } from "react"


const prods = [
  { id: 0, name: 'arroz', preco: 5.50, descricao: 'alimento', quant: 0 },
  { id: 1, name: 'fejao', preco: 8, descricao: 'alimento', quant: 0 },
  { id: 2, name: 'sabao', preco: 26, descricao: 'limpesa', quant: 0 },
  { id: 3, name: 'vasolra', preco: 12, descricao: 'limpesa', quant: 0 },
  { id: 4, name: 'detegente', preco: 1.99, descricao: 'limpesa', quant: 0 },
  { id: 5, name: 'ovos', preco: 22, descricao: 'alimento', quant: 0 },
  { id: 6, name: 'macarrao', preco: 3.24, descricao: 'alimento', quant: 0 },
  { id: 7, name: 'manteiga', preco: 8.54, descricao: 'alimento', quant: 0 },
  { id: 8, name: 'queijo', preco: 85, descricao: 'alimento', quant: 0 },
  { id: 9, name: 'farinha', preco: 4, descricao: 'alimento', quant: 0 },
  { id: 10, name: 'batata', preco: 2.8, descricao: 'alimento', quant: 0 },
  { id: 11, name: 'cebola', preco: 3, descricao: 'alimento', quant: 0 },

]


type Products = {
  id: number,
  name: string,
  preco: number,
  descricao: string,
  quant: number
}

export function Inplementacao() {

  const [products, setProducts] = useState<Products[]>([]);

  const [isCart, setIsCart] = useState(false);

  const [p, setP] = useState<Products>({} as Products);


  let valor = 0;


  function handleIsCart(it: Products) {
    setIsCart(ic => !ic)
    setP({ id: it.id, name: it.name, preco: it.preco, descricao: it.descricao, quant: it.quant })
  }

  function handleAddClick(prod: Products, value: number) {
    setProducts([
      ...products,
      {
        id: prod.id,
        name: prod.name,
        preco: prod.preco,
        descricao: prod.descricao,
        quant: value,
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
            onClick={handleAddClick}
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
      {products.map(i => { valor += i.preco })}
      <Sacola p={products} value={valor} />

      {isCart && (<Prod produtos={p} onClick={() => setIsCart(false)} />)}
    </>
  )
}


type ProductsProps = {
  p: {
    name: string,
    preco: number,
    descricao: string,
    id: number, 
    quant: number,
  }
  onClick: (prod: Products, value: number) => void,
  onClickVisible: MouseEventHandler<HTMLButtonElement>
}

function Produtos({ p, onClick, onClickVisible }: ProductsProps) {

  const [isShow, setIsShow] = useState(false);

  const [quant, setQuant] = useState(0)


  function handleIsShowClick() {
    setIsShow(true)
  }

  if (isShow) {
    return (
      <div style={{ border: '1px solid ' }}>

        <p>nome: {p.name}</p>
        <small>preço: {p.preco}$</small>
        <br />
        <small>descrição: {p.descricao}</small>
        <br />
        <button onClick={() => setQuant(q => q + 1)}>
          adicionar
        </button>
        <button onClick={() => quant > 0 && setQuant(q => q - 1)}>
          remover
        </button>
        <button onClick={() => onClick(p, quant)}>
          conprar
        </button>

        {quant}
      </div>
    )
  }

  return (
    <div style={{ border: '1px solid ' }}>

      <p>nome: {p.name}</p>
      <small>preço: {p.preco}$</small>
      <br />
      <small>descrição: {p.descricao}</small>
      <br />
      <button onClick={(e) => {
        handleIsShowClick();
        // onClick(e)
      }}>
        adicionar produto
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
  p: Products[],
  value: number,
}
function Sacola({ p, value }: SacolaProps) {



  return (
    <div style={{ zIndex: 1, top: 0, right: 0 }}>
      <h2>{p.length}</h2>
      <ul>
        {p.map(d => (
          <li key={d.id}>
            {d.name}
            {d.preco}
            {d.quant}

          </li>
        ))}
      </ul>

      <h4>preco:{value.toFixed(2)}$</h4>
    </div>
  )
}