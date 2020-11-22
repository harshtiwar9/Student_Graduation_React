import React, {useState} from 'react';
import Student from './Student'
import './Students.css'

function Students({studentsName, studentsSubject}){

    return(
        <div className="row">
            {
                studentsName.map((elm,i) => {
                    return <Student key={i} student={elm} studentSubjects={studentsSubject} />
                })
            }
        </div>
    )
}

export default Students;