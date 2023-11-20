import './App.css';
import {Switch,Route} from 'react-router-dom'
import StudentDashboard from './Components/StudentDashboard';
import { Dashboard } from './Components/Dashboard';
import Students from './Components/Students';
import AddStudents from './Components/AddStudent';
import { useEffect, useState } from 'react';
import UpdateStudents from './Components/UpdateStudents';
import NoPage from './Components/NoPage';
import TeacherDashboard from './Components2/TeacherDashboard';
import Teachers from './Components2/Teachers';
import AddTeacher from './Components2/AddTeachers';
import UpdateTeachers from './Components2/UpdateTeacher';


function App() {
  const [students,setStudents] = useState([]);
  const [teachers,setTeachers] = useState([]);
  useEffect(()=>{
    const result = async ()=>{
    try {
      //student data
      const response = await fetch('https://649820699543ce0f49e1abe3.mockapi.io/users',{
      method:"GET"});
      const data = await response.json();
      console.log(data)
      setStudents([...data])

      //teacher data
      const response1 = await fetch('https://64987c339543ce0f49e2143a.mockapi.io/teacher',{
          method: "GET",
        })
        const data1 = await response1.json();
        console.log(data1)
        setTeachers([...data1])
    } catch (error) {
      console.error('Error fetching data:',error.message)
    }
  }
  result();
},[])
  return (
    <div className='App'>
      <Switch>
       <Route exact path="/">
       <Dashboard/>
       </Route>
      
       <Route path="/studentDashboard">
        <StudentDashboard
        students ={students}
        setStudents={setStudents}/>
       </Route>
       <Route path="/students">
        <Students
         students ={students}
         setStudents={setStudents}/>
       </Route>
       <Route path="/add">
        <AddStudents
         students ={students}
         setStudents={setStudents}/>
       </Route>
       <Route path="/edit/:id/">
        <UpdateStudents
        students={students}
        setStudents={setStudents}/>
       </Route>
       <Route path="/teacherDashboard">
        <TeacherDashboard
        teachers={teachers}
        setTeachers={setTeachers}/>
       </Route>
       <Route path="/teachers">
        <Teachers
        teachers={teachers}
        setTeachers={setTeachers}/>
       </Route>
       <Route path="/addteacher">
        <AddTeacher
        teachers={teachers}
        setTeachers={setTeachers}/>
       </Route>
       <Route path="/edit_teacher/:id">
        <UpdateTeachers
        teachers={teachers}
        setTeachers={setTeachers}/>
       </Route>
       <Route path="**">
        <NoPage/>
       </Route>
      </Switch>
    </div>
  );
}

export default App;
