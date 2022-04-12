import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory,useParams } from 'react-router-dom'

import HospitalService from '../../services/HospitalService'

const AddHospitalComponent = () => {
 
    const[hospitalName,setHospitalName]=useState('')
    const[userName,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[website,setWebsite]=useState('')
    const[address,setAddress]=useState('')
    const [userId,setUserId] = useState('')
    const {id}=useParams()
    const history=useHistory()

    const saveOrUpdateHospital=(e)=>{
        e.preventDefault();

        const hospital={hospitalName,userName,email,phone,website,address,userId}

        if(id){
            HospitalService.updateHospital(id,hospital).then((response)=>{
                history.push('/hospitals')
            }).catch(error=>{
                console.log(error)
            })
        }
        else{
            HospitalService.createHospital(hospital).then((reponse)=>{
                console.log(reponse.data)
                history.push('/hospitals')
            }).catch(error=>{
                console.log(error)
            })
        }
    }

    useEffect(() => {
     HospitalService.getHospitalById(id).then((response)=>{
         setHospitalName(response.data.hospitalName)
         setUserName(response.data.userName)
         setEmail(response.data.email)
         setPhone(response.data.phone)
         setWebsite(response.data.website)
         setAddress(response.data.address)
         setUserId(response.data.userId)
     }).catch(error=>{
         console.log(error)
     })

    }, [])
    
    const title=()=>{
        if(id){
           return <h2 className='text-center'>Update Hospital</h2>
        }
        else{
            return <h2 className='text-center'>Add Hospital</h2>
        }
    }

    const demo=()=>{
        if(id){
            return(
                <></>
            )
        }else{
            return(
                <div className='form-group mb-2'>
                                <label className="form-lable">UserId:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="number"
                                    placeholder="Enter your user Id"
                                    name="userId"
                                    className="form-control"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                >
                                </input>
                                </div>
            )
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
                                <label className="form-lable">Hospital Name:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Hospital name"
                                    name="hospitalName"
                                    className="form-control"
                                    value={hospitalName}
                                    onChange={(e) => setHospitalName(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">User Name:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter User name"
                                    name="userName"
                                    className="form-control"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Email:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    name="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Phone :<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    name="phone"
                                    className="form-control"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Website:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Website"
                                    name="website"
                                    className="form-control"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Address:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Address"
                                    name="address"
                                    className="form-control"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                >
                                </input>
                            </div>

                            {
                                demo()
                            }

                            <button className="btn btn-success" onClick={(e) => saveOrUpdateHospital(e)}>Submit</button>
                            <Link to={"/hospitals"} className="btn btn-danger" style={{marginLeft:"10px"}}>Cancel</Link>

                        </form>
                        <span className="float-right" style={{color:"#DC143C"}}>* fields mandatory </span>
                 </div>
             </div>
            </div>
            </div>
        </div>
        
    )

}

export default AddHospitalComponent