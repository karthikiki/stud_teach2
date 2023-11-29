import './App.css';
import {Switch,Route} from 'react-router-dom'
import StudentDashboard from './Components/StudentDashboard';
import { Dashboard } from './Components/Dashboard';
import Students from './Components/Students';
import AddStudents from './Components/AddStudent';
import { useEffect, useState } from 'react';
import UpdateStudents from './Components/UpdateStudents';
import NoPage from './Components/NoPage';

//
function App() {
  const [students,setStudents] = useState([]);
  useEffect(()=>{
    const fetchData = async ()=>{
    try {
     //https://649820699543ce0f49e1abe3.mockapi.io/users
      const response = await fetch('https://node1-pratcise.vercel.app/students/all',{
      method:"GET",
      headers: {
        "x-auth-token" : localStorage.getItem("token")
      }
    });
    if(!response.ok){
      throw new Error('Network response was not ok')
    }
      const data = await response.json();
      console.log(data.data)
      // setStudents([...data])0
      setStudents(data.data)
    } catch (error) {
      console.error('Error fetching data:',error.message)
    }
  }
  fetchData();
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
       <Route path="**">
        <NoPage/>
       </Route>
      </Switch>
    </div>
  );
}

export default App;
