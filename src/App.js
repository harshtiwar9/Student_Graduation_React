import './App.css';
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import Students from './Components/Students/Students'
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

  const updateComponentValue = (value) => {
console.log(value)
    if(value === "addAttendance"){
      if(showComponent != true){
        setShowComponent(true)
      }
    }else if(value === "subAttendance"){
      if(graduateStudent.length === 0){
        setShowComponent(false)
      }
    }

  }

  return (
    <div className="">
      <Students studentsName={studentsName} studentsSubject={studentsSubject} updateComponentValue={updateComponentValue} />

      { showComponent !== false ? 
          <div className="container center row white-text">
            <div className=" col s12 m4 l3 offset-l4 offset-m4 center card small blue-grey darken-1">
              <div className="card-content white-text">
                  <span className="card-title center">Graduation List</span>
                  <hr/>
                    {/* <Graduation graduateStudent={graduateStudent} /> */}
                    <Graduation />
              </div>
            </div>
          </div> 
        : "" }
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