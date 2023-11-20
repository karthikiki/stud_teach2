import React from 'react'
import Base from '../Base/Base'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const NoPage = () => {
    const history = useHistory();
  return (
  <Base title="404"
  description={`This page doesn't exist.`}>
  <Button onClick={()=>history.push("/")}>Back</Button>
  </Base>
  )
}

export default NoPage