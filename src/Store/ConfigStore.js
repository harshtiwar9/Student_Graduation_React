import { createStore } from 'redux';

const defaultState = {
    studentName: [],
    subjects : [],
    graduation : []
}

//reducer
function studentInfo(state = defaultState, action) {

    let newStudent = Object.assign({}, state);
    let checkIfAlreadyStudentExist;

    switch (action.type) {
        case "saveData":

            let studentArray = [];
            let subjectsArray = [];

            Object.keys(action.data.student).map(elm => {
                studentArray = [...studentArray, action.data.student[elm].studentName]
            })

            subjectsArray = action.data.subject.split(',');
        
            return {
                studentName: studentArray,
                subjects : subjectsArray,
                graduation : []
            }
            
        break;

        case 'addAttendance' :

            let studentAttendanceArray = [...newStudent.graduation,action.data.name];
            
            // checkIfAlreadyStudentExist = newStudent.graduation.findIndex(student => student.name.toString().toLowerCase() === action.data.name.toString().toLowerCase());
            
            // if(checkIfAlreadyStudentExist === -1){//not match
            //     studentAttendanceArray = [...studentAttendanceArray, action.data];
            // }

            // console.log(newStudent.studentName)

            // studentAttendanceArray = [...studentAttendanceArray,action.data.name];

            // console.log(studentAttendanceArray)

            // newStudent.graduation = studentAttendanceArray
            // return newStudent
            return{
                studentName : newStudent.studentName,
                subjects : newStudent.subjects,
                graduation : studentAttendanceArray
            }

        break;

        case 'subAttendance' :

            let studentAttendanceArray2 = [];
            console.log(newStudent.graduation)
            console.log(newStudent.graduation.findIndex(student => {student.toString().toLowerCase()}))
            checkIfAlreadyStudentExist = newStudent.graduation.findIndex(student => student.toString().toLowerCase() === action.data.name.toString().toLowerCase());
            
            newStudent.graduation.splice(checkIfAlreadyStudentExist, 1);
            studentAttendanceArray2 = newStudent.graduation;
        
            console.log(studentAttendanceArray2)

            return{
                studentName : newStudent.studentName,
                subjects : newStudent.subjects,
                graduation : studentAttendanceArray2
            }

        break;

        default:
            return newStudent;

    }
    
}

var store = createStore(studentInfo,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;