import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DoctorService from '../../services/DoctorService'

const HospitalDoctorList = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
      
        getAllDoctors();

    }, [])
  
    const getAllDoctors=()=>{
        DoctorService.getAllDoctors().then((response) => {

            setDoctors(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteDoctor= (doctorId) =>{
        DoctorService.deleteDoctor(doctorId).then((response)=>{
          getAllDoctors();
        }).catch(error=>{
            console.log(error)
        })
        
    }

  return (
    <div className='container'>
        <br/>
        <h2 className='text-center'>List of Doctors
       
        </h2>
        <br/>
        <table className='table border shadow'>
            <thead className='thead-dark'> 
               <th>Doctor Id</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email</th>
               <th>Qualification</th>
              
            </thead>

            <tbody>
                {
                    doctors.map(
                        doctor =>
                        <tr key={doctor.id}>
                            <td>{doctor.id}</td>
                            <td>{doctor.firstName}</td>
                            <td>{doctor.lastName}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.qualification}</td>
                           
                        </tr>
                    )
                }
            </tbody>

        </table>
    </div>
  )
}

export default HospitalDoctorList