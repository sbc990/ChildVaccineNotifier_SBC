import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import HospitalService from "../../services/HospitalService";



const ViewHospitalComponent = () => {
    const {id}=useParams()
    const [hospital,setHospital]=useState(null);

    let content= null

    useEffect(() => {
      HospitalService.getHospitalById(id).then((response)=>{
          setHospital(response.data)
      })
    
     
    }, [])
    
   if(hospital){
       content =
       <div className="container">
         <br/>
         <Link to={'/hospitals'} className="btn btn-primary float-right">Back</Link>
           <div className="card col-md-6 offset-md-3 offset-md-3">
           <h2 className="card-header text-center">Profile</h2>
       <div className="card-body">
           <form>
           <div className="card-text">
           <h4>Hospital Id : {hospital.id}</h4>
           </div>

           <div className="card-text">
           <h4>Hospital Name: {hospital.hospitalName}</h4>
           </div>

           <div className="card-text">
           <h4>User Name: {hospital.userName}</h4>
           </div>

           <div className="card-text">
           <h4>Email: {hospital.email}</h4>
           </div>

           <div className="card-text">
           <h4>Address: {hospital.address}</h4>
           </div>

           <div className="card-text">
           <h4>Phone: {hospital.phone}</h4>
           </div>

           <div className="card-text">
           <h4>Website: {hospital.website}</h4>
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

export default ViewHospitalComponent