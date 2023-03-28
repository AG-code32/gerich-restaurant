import React from 'react'

import { images } from '../../constants'

function SubHeading({ title }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className='p__cormorant'>{title}</p>
      <img src={images.spoon} alt="spoon" className='spoon__img' />
    </div>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default SubHeading