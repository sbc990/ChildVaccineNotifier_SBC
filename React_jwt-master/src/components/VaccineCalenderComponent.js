import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import VaccineService from '../services/VaccineService'

const VaccineCalenderComponent = () => {
 
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

   

  return (
    <div className='container'>
        <br/>
        <h2 className='text-center'>List Of Vaccines
        
       
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
                                        <Link class="btn btn-primary mx-2" to={`/view-vaccine/${vaccine.id}`}>
                                            View
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

export default VaccineCalenderComponent