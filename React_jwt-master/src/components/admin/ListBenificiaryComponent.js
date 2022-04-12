import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BenificiaryService from "../../services/BenificiaryService";

const ListBenificiaryComponent = () => {
  
    const [benificiaries, setBenificiaries]=useState([])

    useEffect(() => {

        getAllBenificiaries();
     
    }, [])
    


   const getAllBenificiaries =() => {
        BenificiaryService.getAllBenificiaries().then((response)=>{
            setBenificiaries(response.data)
            console.log(response.data);
        }).catch(error=>{
            console.log(error)
        })
    }

    const deleteBenificiary=(benificiaryId)=>{
        BenificiaryService.deleteBenificiary(benificiaryId).then((response)=>{
            getAllBenificiaries();
        }).catch(error=>{
            console.log(error)
        })
    }
    return(
        <div className='container'>
            <br/>
            <h2 className='text-center'>List Benificiaries
            
            <Link to={"/admin-home"} className="btn btn-info mx-3 " >Go To Home</Link>
            </h2>
            <br/>
            <table className='table border shadow'>
                <thead className='thead-dark'>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Adress</th>
                    <th>Contact</th>
                    <th>Action</th>
                </thead>
               
                <tbody>
                    {
                        benificiaries.map(
                            benificiary =>
                            <tr key={benificiary.id}>
                                <td>{benificiary.id}</td>
                                <td>{benificiary.firstName}</td>
                                <td>{benificiary.lastName}</td>
                                <td>{benificiary.address}</td>
                                <td>{benificiary.mobNo}</td>
                            <td>
                            <Link to={`/view-benificiary/${benificiary.id}`} className="btn btn-primary mx-2" style={{marginLeft:"10px"}}>View</Link>
                            
                            <button className='btn btn-danger' onClick={()=>deleteBenificiary(benificiary.id)} style={{marginLeft:"10px"}}>Delete</button>
                            </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default ListBenificiaryComponent