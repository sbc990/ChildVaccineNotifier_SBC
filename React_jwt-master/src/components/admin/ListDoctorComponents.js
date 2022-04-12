import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DoctorService from '../../services/DoctorService'

const ListDoctorComponents = () => {

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
        <Link to={"/add-doctor"} className="btn btn-success mx-3">Add Doctor</Link>
        <Link to={"/admin-home"} className="btn btn-info mx-3 " >Go To Home</Link>
        </h2>
        <br/>
        <table className='table border shadow'>
            <thead className='thead-dark'> 
               <th>Doctor Id</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email</th>
               <th>Qualification</th>
               <th>Action</th>
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
                            <td>
                                
                                <Link to={`/view-doctor/${doctor.id}`} className="btn btn-primary mx-2" style={{marginLeft:"10px"}}>View</Link>
                                <Link to={`/edit-doctor/${doctor.id}`} className="btn btn-outline-primary mx-2">Edit</Link>
                                <button className='btn btn-danger' onClick={()=>deleteDoctor(doctor.id)} style={{marginLeft:"10px"}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>

        </table>
    </div>
  )
}

export default ListDoctorComponents