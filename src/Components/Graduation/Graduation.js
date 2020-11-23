import React, {useEffect} from 'react';
import { useSelector} from 'react-redux';
import './Graduation.css'

function Graduation(){

    let graduateStudents = useSelector(state => state.graduation);

    return(
        graduateStudents.map((elm,i) => {
            
        return (
                <div className="row" key={i}>
                    <div className="col s12">
                        {elm}
                    </div>
                </div>
            )
            
        })
    )
}

export default Graduation;