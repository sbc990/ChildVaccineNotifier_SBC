import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import DoctorService from "../../services/DoctorService";



const ViewDoctorComponent = () => {
    const {id}=useParams()
    const [doctor,setDoctor]=useState(null);

    let content= null

    useEffect(() => {
      DoctorService.getDoctorById(id).then((response)=>{
          setDoctor(response.data)
      })
    
     
    }, [])
    
   if(doctor){
       content =
       <div className="container">
           <br/>
           <Link to={'/doctors'} className="btn btn-primary float-right">Back</Link>
           <div className="card col-md-6 offset-md-3 offset-md-3">
           <h2 className="text-center">Profile</h2>
       <div className="card-body">
           <form>
           <div className="form-group mb-2">
           <h4>Doctor Id : {doctor.id}</h4>
           </div>

           <div className="form-group mb-2">
           <h4>First Name: {doctor.firstName}</h4>
           </div>

           <div className="form-group mb-2">
           <h4>Last Name: {doctor.lastName}</h4>
           </div>

           <div className="form-group mb-2">
           <h4>Email: {doctor.email}</h4>
           </div>

           <div className="form-group mb-2">
           <h4>Qualification: {doctor.qualification}</h4>
           </div>
           </form>
       </div>
       </div>
       </div>
   }
    
   return(
       <div>
           {content}
       </div>
   )
    

}

export default ViewDoctorComponent