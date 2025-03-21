import React from 'react'
import Boilerplate from './Boilerplate'
const Product = () => {
    const array = [1,1,1,1,1,1]
  return (
    <div className='grid grid-cols-2 h- lg:grid-cols-3 xl:grid-cols-4'>
    {array.map(() => (<Boilerplate h="h-36" display="grid"/>))}
  </div>
  )
}

export default Product
