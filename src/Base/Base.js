import { Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'

const Base = ({title,description,children}) => {
  return (
    <div  className='main-component base-component' >
        <Navbar/>
        <div className='nav-bar'>
          
        </div>
        <header>
            <Typography variant='h4' component="h2">{title}</Typography>
        </header>
        <main className='main-segment'>
            <h2>{description}</h2>
            <div className='gap'>
                {children}</div>
        </main>
    </div>
  )
}
//

export default Base