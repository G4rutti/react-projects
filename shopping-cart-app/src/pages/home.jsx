import React from 'react'
import { Circles } from "react-loader-spinner"
import { useState } from 'react'

import { useFetchProducts } from '../hooks/useFetchProducts.jsx'

// Components
import CardProducts from '../components/CardProducts.jsx'

const Home = () => {
  const { products, loading, error } = useFetchProducts()

  return (
    <div>
      {loading ? (
        <div className='min-h-screen w-full flex justify-center items-center'>
          <Circles
            height={"120"}
            width={"120"}
            color={"rgb(41,19,52)"}
            visible={true}
          />
        </div>
      ) : (
        <div className='mx-auto grid grid-cols-1 w-full justify-center items-center mt-5 md:grid-cols-2 md:mt-10 lg:grid-cols-3 xl:grid-cols-4'>
          {products && products.map((item) => (
            <div key={item.id} className="flex justify-center">
              <CardProducts
                id={item.id}
                titulo={item.title}
                image={item.image}
                categoria={item.category}
                price={item.price}
              />
            </div>
          ))}

        </div>
      )}
    </div>
  )
}

export default Home