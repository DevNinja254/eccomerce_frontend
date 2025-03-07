import React from 'react'
import Exclusiveoffer from './main/Exclusiveoffer'
import Bestsellers from './main/Bestsellers'
import Takencare from './main/Takencare'
import Hotproduct from "./main/Hotproduct"
import Superdiscount  from "./main/Superdiscount"
import Newproducts from './main/Newproducts'
import Discount from './main/Discount'
import Special from './main/Special'
import Onmarket from './main/Onmarket'
import Download from './main/Download'
import Trending from './main/Trending'
import Comment from './main/Comment'
import Cartegories from './main/Cartegories'
const Main = () => {
  return (
    <main className='sm:w-full w-5/6 m-auto sm:mx-auto md:grid md:grid-cols-6 gap-4 lg:grid-cols-6 lg:w-4/5 lg:m-auto xl:grid-cols-7'>
      <div className='col-start-2 col-end-6 lg:hidden'>

        <Exclusiveoffer/>
      </div>
      <div className='md:col-span-4 lg:col-span-5 '>
        <Bestsellers/>
        <Takencare/>
        <Hotproduct/>
        <Superdiscount/>
        <Newproducts/>
        <Discount/>
      </div>
      <div className='md:col-span-2'>
        <Special/>
        <Onmarket/>
        <Download/>
        <Trending/>
        <Comment/>
      </div>
      <div className='md:col-span-7'>
      <Cartegories/>
      </div>
    </main>
  )
}

export default Main
