import React, { useEffect, useState } from "react";
import {Link, useHistory,useParams} from "react-router-dom";
import DoctorService from "../../services/DoctorService";


const AddDoctorComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [qualification, setQualification] = useState('')
    const history = useHistory();
    const {id}=useParams();

    const saveOrUpdateDoctor= (e) =>{
        e.preventDefault();

        const doctor = {firstName,lastName,email,qualification}
        
        if(id){
            DoctorService.updateDoctor(id,doctor).then((response)=>{
                history.push('/doctors')
            }).catch(error=>{
                console.log(error)
            })

        }else{
            DoctorService.createDoctor(doctor).then((response)=>{
           
                console.log(response.data)
                history.push('/doctors');
            }).catch(error =>{
                console.log(error)
            })
        }

        }
        
        

    useEffect(()=>{
        DoctorService.getDoctorById(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
            setQualification(response.data.qualification)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const title=() =>{
        if(id){
            return <h2 className="tecxt-center">Update Doctor</h2>
        }else{
            return <h2 className="text-center">Add Doctor</h2>
        }
    }

  return (
    <div>
        <br/>
        <br/>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    {
                        title()
                    }
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-lable">First Name:<span style={{color:"red"}}>*</span></label>
                                <input
                                    
                                    type="text"
                                    placeholder="Enter first name"
                                    name="firstName"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Last Name:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter last name"
                                    name="lasttName"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Email:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter email-id"
                                    name="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Qualification:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter qualication"
                                    name="qualification"
                                    className="form-control"
                                    value={qualification}
                                    onChange={(e) => setQualification(e.target.value)}
                                >
                                </input>

                            </div>
                            <br/>
                            <button className="btn btn-success" onClick={(e) => saveOrUpdateDoctor(e)}>Submit</button>
                            <Link to={"/doctors"} className="btn btn-danger" style={{marginLeft:"10px"}}>Cancel</Link>
                            
                        </form>
                       
                        <span className="float-right" style={{color:"#DC143C"}}>* fields mandatory </span>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default AddDoctorComponent