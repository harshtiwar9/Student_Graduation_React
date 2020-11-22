import './App.css';
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import Students from './Components/Students/Students'
import Student from './Components/Students/Students'
import { useEffect, useState } from 'react';
import Graduation from './Components/Graduation/Graduation';

function App() {

  const studentsDbUrl = "https://studentgraduationdata.firebaseio.com/students.json?print=pretty";
  const subjectsDbUrl = "https://studentgraduationdata.firebaseio.com/Subjects.json?print=pretty";

  let studentsName = useSelector(state => state.studentName);
  let studentsSubject = useSelector(state => state.subjects);
  let graduateStudent = useSelector(state => state.graduation);

  let [showComponent,setShowComponent] = useState(false);

  const dispatch = useDispatch();
  
  const SavingData = () =>{
    axios.get(studentsDbUrl)
          .then(function(response){

            axios.get(subjectsDbUrl)
                  .then(function(response2){
                      let data = {
                        student : response.data,
                        subject : response2.data
                      }
                      dispatch({'type' : 'saveData' , data : data})
                  })

          })
  }
  
  useEffect(SavingData,[])

  return (
    <div className="">
      <Students studentsName={studentsName} studentsSubject={studentsSubject} />

      { showComponent !== false ? <Graduation graduateStudent={graduateStudent} /> : "" }
    </div>
  );
}

export default App;

// let studentName = ["Harsh","Akshay","Brijesh","Rahul"]
  // let studentSubject = ["HTML","CSS","JAVASCRIPT","GIT"]
  
  // studentName.map((elm,i) => {
  //   axios.post(studentDbUrl, {
  //     studentName: elm
  //   })
  //   .then(function(response) {
  //       console.log(response.data);
  //   })
  //   .catch(function(error) {
  //       console.log(error)
  //   })
  // })