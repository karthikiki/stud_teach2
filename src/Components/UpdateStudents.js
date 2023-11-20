import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { Button, TextField } from '@mui/material'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const UpdateStudents = ({students,setStudents}) => {
    const history=useHistory()
   const{id} = useParams();
   const editStudent = students[id]
   const[name,setName]= useState("")
   const [batch,setBatch]= useState("")
   const[gender,setGender]= useState("")
   const[Qualification,setQualification]= useState("")

   useEffect(()=>{
    if(editStudent){
        setName(editStudent.name)
        setBatch(editStudent.batch)
        setGender(editStudent.gender)
        setQualification(editStudent.Qualification)
    }
   },[editStudent])

   async function updateStudents(){
    const Updated={
        name:name,
        batch:batch,
        gender:gender,
        Qualification:Qualification
    }
    const result = await fetch(`https://649820699543ce0f49e1abe3.mockapi.io/users/${editStudent.id}`,
        {method:"PUT",
        body:JSON.stringify(Updated),
        headers:{"Content-Type":"application/json"}
    })
    const data1 = await result.json()
    if(data1){
        console.log(Updated)
        students[id] = Updated
        setStudents([...students]);
        history.push("/students")
    }
   }
  return (
    <Base title={"Edit Student Details"}
   description={"Here we can edit students details in database"}>
     <div className='text-field'>
      <TextField
      id='outlined-basic'
      label="Enter Name"
      variant='outlined'
      type='text'
         value={name}
         onChange={(e)=>setName(e.target.value)}
      />
      <TextField
      id='outlined-basic'
      label="Enter Batch"
      variant='outlined'
      type='text'
         value={batch}
         onChange={(e)=>setBatch(e.target.value)}
      />
      <TextField
      id='outlined-basic'
      label="Enter Gender"
      variant='outlined'
      type='text'
         value={gender}
         onChange={(e)=>setGender(e.target.value)}
      />
      <TextField
      id='outlined-basic'
      label="Enter Qualification"
      variant='outlined'
      type='text'
         value={Qualification}
         onChange={(e)=>setQualification(e.target.value)}
      />
      <br></br>
      <Button variant="contained"
      onClick={updateStudents}>
        Update Student
        </Button>
     </div>
   </Base>
  )
}

export default UpdateStudents