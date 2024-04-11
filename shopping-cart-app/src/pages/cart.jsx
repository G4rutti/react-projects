import React from 'react'
import { useSelector } from "react-redux"
import { useState, useEffect } from 'react'

import CartInCards from "../components/CardInCarts.jsx"

const Cart = () => {
  const { cart } = useSelector(state => state)
  const [totalCart, setTotalCart] = useState(0)

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])

  return (
    <div className='flex flex-col'>
      <div className='mx-auto mt-5 text-center'>
        <p>Quantidade de produtos no carrinho: <span className='font-bold'>{cart.length}</span></p>
        <p>Preço final: <span className='font-bold'>{totalCart}R$</span></p>
      </div>
      <div className='mx-auto grid grid-cols-1 w-full justify-start items-center mt-5 md:grid-cols-2 md:mt-10 lg:grid-cols-3 xl:grid-cols-4'>
        {cart.map((item) => (
          <div className='flex justify-center'>
            <CartInCards
              key={item.id} // Certifique-se de definir uma chave única para cada componente na iteração
              id={item.id}
              titulo={item.titulo}
              image={item.image}
              categoria={item.categoria}
              price={item.price}
            />
          </div>

        ))}


      </div>
    </div>

  )
}

export default Cart