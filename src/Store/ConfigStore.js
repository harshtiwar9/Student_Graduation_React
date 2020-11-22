import { createStore } from 'redux';

const defaultState = {
    studentName: [],
    subjects : [],
    graduation : []
}

//reducer
function studentInfo(state = defaultState, action) {

    let newStudent = Object.assign({}, state);

    switch (action.type) {
        case "saveData":

            // console.log(action.data)
            // console.log(Object.keys(action.data.data))
            // // data["-MMgiHI6BGpLW-fnuYeQ"].studentName

            // console.log(Object.keys(action.data.data).map(elm => {
            //     return action.data.data[elm].studentName
            // }))

            let studentArray = [];
            let subjectsArray = [];

            Object.keys(action.data.student).map(elm => {
                studentArray = [...studentArray, action.data.student[elm].studentName]
            })

            subjectsArray = action.data.subject.split(',');
        
            return {
                studentName: studentArray,
                subjects : subjectsArray
            }
            
        break;

        case 'addAttendance' :

            let studentAttendanceArray;
            console.log(action.data)
            // const checkIfAlreadyStudentExist = newStudent.attendance.findIndex(student => student.name.toString().toLowerCase() === action.data.name.toString().toLowerCase());
            
            // if(checkIfAlreadyStudentExist === -1){//not match
            //     studentAttendanceArray = [...studentAttendanceArray, action.data];
            // }

            studentAttendanceArray = action.data.name;

            console.log(studentAttendanceArray)

            return{
                graduation : studentAttendanceArray
            }

        break;

        case 'subAttendance' :

            let studentAttendanceArray2 = [];
            console.log(action.data)
            const checkIfAlreadyStudentExist = newStudent.attendance.findIndex(student => student.name.toString().toLowerCase() === action.data.name.toString().toLowerCase());
            
            newStudent.graduation.splice(checkIfAlreadyStudentExist, 1);
            studentAttendanceArray2 = newStudent.graduation;
        
            console.log(studentAttendanceArray2)

            return{
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