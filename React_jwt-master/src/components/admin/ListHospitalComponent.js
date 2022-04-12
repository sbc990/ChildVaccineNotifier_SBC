import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HospitalService from '../../services/HospitalService'

const ListHospitalComponent = () => {

    const [hospitals,setHospitals]=useState([])

    useEffect(() => {
     
        getAllHospitals();

    }, [])

    const getAllHospitals=()=>{
        HospitalService.getAllHospitals().then((response)=>{
            setHospitals(response.data)
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    const deleteHospital=(hospitalId)=>{
        HospitalService.deleteHospital(hospitalId).then((response)=>{
            getAllHospitals();

        }).catch(error=>{
            console.log(error)
        })
    }

    return(
        <div>
            <br/>
        <h2 className='text-center'>List of Hospitals
        <Link to={'/add-hospital'} className="btn btn-success mx-3">Add Hospital</Link>
        <Link to={"/add-doctor"} className="btn btn-success mx-3">Add Doctor</Link>    
        <Link to={"/admin-home"} className="btn btn-info mx-3 " >Go To Home</Link>
        </h2>
        <br/>
        <table className='table border shadow'>
            <thead className='thead-dark'> 
               <th>Hospital Id</th>
               <th>Hospital Name</th>
               <th>Hospital Address</th>
               <th>Contact</th>
               <th>Action</th>
            </thead>

            <tbody>
                {
                    hospitals.map(
                        hospital =>
                        <tr key={hospital.id}>
                            <td>{hospital.id}</td>
                            <td>{hospital.hospitalName}</td>
                            <td>{hospital.address}</td>
                            <td>{hospital.phone}</td>
                            <td>
                            <Link to={`/view-hospital/${hospital.id}`} className="btn btn-primary mx-2" style={{marginLeft:"10px"}}>View</Link>
                                <Link to={`/edit-hospital/${hospital.id}`} className="btn btn-outline-primary mx-2">Edit</Link>
                                <button className='btn btn-danger' onClick={()=>deleteHospital(hospital.id)} style={{marginLeft:"10px"}}>Delete</button>
                            </td>

                        </tr>
                    )
                }
            </tbody>
        </table>

        </div>
    )

    

}

export default ListHospitalComponent