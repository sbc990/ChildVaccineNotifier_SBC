import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import VaccineService from '../../services/VaccineService'
const ListVaccineComponent = () => {
    const [vaccines, setVaccines] = useState([])
   
    useEffect(() => {
      getAllVaccines();
    },[])
    
    const getAllVaccines = () => {
        VaccineService.getAllVaccines().then((response)=>{
        setVaccines(response.data)
        console.log(response.data)
    }).catch(error =>{
        console.log(error);
    })
    }

    const deleteVaccine = (vaccineId) => {
        VaccineService.deleteVaccine(vaccineId).then((response) => {
        getAllVaccines();
        }).catch(error =>{
            console.log(error);
        })
    }

  return (
    <div className='container'>
        <br/>
        <h2 className='text-center'>List Of Vaccines
        <Link class="btn btn-success mx-3 " to="/add-vaccine" >Add New Vaccine</Link>
        <Link to={"/admin-home"} class="btn btn-info mx-3 " >Go To Home</Link>
        </h2>
        <table className='table border shadow'>
            <thead className='thead-dark'>
                <th>Vaccine Id</th>
                <th>Vaccine Name</th>
                <th>Vaccine Description</th>
                <th>Route</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    vaccines.map(
                        vaccine =>
                        <tr key={vaccine.id}>
                        <td>{vaccine.id}</td>
                        <td>{vaccine.vaccineName}</td>
                        <td>{vaccine.description}</td>
                        <td>{vaccine.route}</td>
                        <td>
                                        <Link class="btn btn-primary mx-2" to={`/admin-view-vaccine/${vaccine.id}`}>
                                            View
                                        </Link>
                                        <Link class="btn btn-outline-primary mx-2" to={`/edit-vaccine/${vaccine.id}`}>
                                            Edit
                                        </Link>
                                        <Link class="btn btn-danger mx-2" onClick={() => deleteVaccine(vaccine.id)} >
                                            Delete
                                        </Link>
                                        
                                    </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListVaccineComponent