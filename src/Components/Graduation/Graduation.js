import React, { useEffect } from 'react';
import './Graduation.css'

function Graduation({graduateStudent}){

    return(
        graduateStudent.map(elm => {
            <div className="row">
                <div className="col">
                    {elm}
                </div>
            </div>
        })
    )
}

export default Graduation;