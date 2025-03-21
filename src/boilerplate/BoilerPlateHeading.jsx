import React from 'react'
import Boilerplate from './Boilerplate'

const BoilerPlateHeading = () => {
    const array = [1,2,1,1,1]
  return (
    <div>
      <Boilerplate display={"grid"} display1={"hidden"} h="h-6"/>
      <div className='grid grid-cols-2 h- lg:grid-cols-3 xl:grid-cols-4'>
        {array.map(() => (<Boilerplate h="h-36" display="grid"/>))}
      </div>
     </div>
  )
}

export default BoilerPlateHeading
