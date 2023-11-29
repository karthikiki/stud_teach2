import React from 'react'
import Base from '../Base/Base'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const StudentDashboard = () => {
    const history = useHistory();
  return (
   <Base 
   description={"Student Dashboard"}>
    <div className='.nav-bar'>
        <Button onClick={()=>history.push("/students")}>Student's List</Button>
        <Button onClick={()=>history.push("/add")}>Add - Student</Button>
    </div>
//
   </Base>
  )
}

export default StudentDashboard