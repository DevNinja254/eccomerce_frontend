import React from 'react'
import Newsletter from '../footer/Newsletter'
import Brag from '../footer/Brag'
import CartegoriesLink from '../footer/CartegoriesLink'
import { Apk } from '../footer/Apk'

const Footer = () => {
  return (
    <div>
      <Newsletter/>
      <Brag/>
      <CartegoriesLink/>
      <Apk/>
    </div>
  )
}

export default Footer
