'use client';
import { useEffect, useState } from 'react';
import Doctors from '../Doctors/Doctors';

const AllDoctors = () => {
    const[allDoctors, setAllDoctors] = useState([])
    useEffect(() =>{
        fetch('doctors.json')
        .then(res =>res.json())
        .then(data =>  setAllDoctors(data))
    },[]);

    return (
<<<<<<< HEAD
        <div className='bg-base-100'>
=======
        <div>
>>>>>>> Sraboni
            {
                allDoctors.map(allDoctor =><Doctors key={allDoctor.id} allDoctor ={allDoctor}></Doctors>)
            }
        </div>
    );
};

export default AllDoctors;