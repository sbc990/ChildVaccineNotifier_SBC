import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import BenificiaryService from '../../services/BenificiaryService'

const ViewBenificiaryComponent = () => {
  
    const {id}=useParams()
    const [benificiary,setBenificiary]=useState(null);

    let content= null

    useEffect(() => {
    BenificiaryService.getBenificiaryById(id).then((response)=>{
          setBenificiary(response.data)
      })
    
     
    }, [])
    
   if(benificiary){
       content =
       <div className="container">
           <br/>
           <Link to={'/benificiaries'} className="btn btn-primary float-right">Back</Link>
           <div className="card col-md-6 offset-md-3 offset-md-3">
           <h2 className="text-center">Profile</h2>
       <div className="card-body">
           <form>
           {/* firstName,middleName,lastName,motherName,dob,address,mobNo,blood,weight,gender */}
           <div className="form-group mb-2">
           <h4>Benificiary Id : {benificiary.id}</h4>
           </div>

           <div className="form-group mb-2">
           <h4>First Name: {benificiary.firstName}</h4>
           </div>

           <div className="form-group mb-2">
           <h4>Middle Name: {benificiary.middleName}</h4>
           </div>

           <div className="form-group mb-2">
           <h4>Last Name: {benificiary.lastName}</h4>
           </div>

           <div className="form-group mb-2">
           <h4>Mother Name: {benificiary.motherName}</h4>
           </div>

           <div className="form-group mb-2">
           <h4>DoB: {benificiary.dob}</h4>
           </div>

           <div className="form-group mb-2">
           <h4>Address: {benificiary.address}</h4>
           </div>

           <div className="form-group mb-2">
           <h4>MobNo: {benificiary.mobNo}</h4>
           </div>

           <div className="form-group mb-2">
           <h4>Blood Group: {benificiary.blood}</h4>
           </div>

           <div className="form-group mb-2">
           <h4>Weight: {benificiary.weight}</h4>
           </div>

           <div className="form-group mb-2">
           <h4>Gender: {benificiary.gender}</h4>
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

export default ViewBenificiaryComponent