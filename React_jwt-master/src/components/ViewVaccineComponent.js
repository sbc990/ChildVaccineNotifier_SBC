import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VaccineService from "../services/VaccineService";
import { Link } from "react-router-dom";


const ViewVaccineComponent
 = () => {
    const {id}=useParams()
    const [vaccine,setVaccine]=useState(null);

    let content= null

    useEffect(() => {
      VaccineService.getVaccineById(id).then((response)=>{
          setVaccine(response.data)
      })
    
     
    }, [])
    
   if(vaccine){
       content =
       <div className="container">
         <br/><br/>
         <Link to={'/vaccine-calender'} className="btn btn-primary float-right">Back</Link>

           <div className="card col-md-6 offset-md-3 offset-md-3">
           <h2 className="text-center">Vaccine Info</h2>
       <div className="card-body">
           <form>
           <div className="card-text">
           <h4>Vaccine Id : {vaccine.id}</h4>
           </div>

           <div className="card-text">
           <h4>Vaccine Name: {vaccine.vaccineName}</h4>
           </div>

           <div className="card-text">
           <h4>Description: {vaccine.description}</h4>
           </div>

           <div className="card-text">
           <h4>Route: {vaccine.route}</h4>
           </div>

           <div className="card-text">
           <h4>Site: {vaccine.site}</h4>
           </div>

           <div className="card-text">
           <h4>When To Give: {vaccine.whenToGive}</h4>
           </div>

           <div className="card-text">
           <h4>Max Age: {vaccine.maxAge}</h4>
           </div>

           <div className="card-text">
           <h4>Dose: {vaccine.dose}</h4>
           </div>

           <div className="card-text">
           <h4>Stock: {vaccine.stock}</h4>
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

export default ViewVaccineComponent
