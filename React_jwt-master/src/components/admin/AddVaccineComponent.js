import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import VaccineService from '../../services/VaccineService'

const AddVaccineComponent = () => {
  
    const[vaccineName,setVaccineName]=useState('')
    const[description,setDescription]=useState('')
    const[route,setRoute]=useState('')
    const[site,setSite]=useState('')
    const[whenToGive,setWhenToGive]=useState('')
    const[maxAge,setMaxAge]=useState('')
    const[dose,setDose]=useState('')
    const[stock,setStock]=useState('')
    const {id}=useParams()
    const history=useHistory()

    const saveOrUpdateVaccine=(e)=>{
        e.preventDefault();

        const vaccine={vaccineName,description,route,site,whenToGive,maxAge,dose,stock}

        if(id){
            VaccineService.updateVaccine(id,vaccine).then((response)=>{
                history.push('/vaccines')
            })
        }
        else{
            VaccineService.createVaccine(vaccine).then((response)=>{
                history.push('/vaccines')
            })
        }

    }

    useEffect(() => {
        VaccineService.getVaccineById(id).then((response)=>{
            setVaccineName(response.data.vaccineName)
            setDescription(response.data.description)
            setRoute(response.data.route)
            setSite(response.data.site)
            setWhenToGive(response.data.whenToGive)
            setMaxAge(response.data.maxAge)
            setDose(response.data.dose)
            setStock(response.data.stock)
        }).catch(error=>[
            console.log(error)
        ])

    }, [])

    const title=()=>{
        if(id){
            return <h2 className='text-center'>Update Vaccine</h2>
        }
        else{
            return <h2 className='text-center'>Add Vaccine</h2>
        }
    }

    return(
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
                                <label className="form-lable">Vaccine Name:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Vaccine name"
                                    name="vaccineName"
                                    className="form-control"
                                    value={vaccineName}
                                    onChange={(e) => setVaccineName(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Description:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter description"
                                    name="description"
                                    className="form-control"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Route:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Route"
                                    name="route"
                                    className="form-control"
                                    value={route}
                                    onChange={(e) => setRoute(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Site:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Site"
                                    name="site"
                                    className="form-control"
                                    value={site}
                                    onChange={(e) => setSite(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">When to Give:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter when to give"
                                    name="whenToGive"
                                    className="form-control"
                                    value={whenToGive}
                                    onChange={(e) => setWhenToGive(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Maximum Age:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter maximum age"
                                    name="maxAge"
                                    className="form-control"
                                    value={maxAge}
                                    onChange={(e) => setMaxAge(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Dose:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter dose amount"
                                    name="dose"
                                    className="form-control"
                                    value={dose}
                                    onChange={(e) => setDose(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Stock:</label>
                                <input
                                    type="number"
                                    placeholder="Enter available stock"
                                    name="stock"
                                    className="form-control"
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                >
                                </input>
                            </div>
                            <button className="btn btn-success" onClick={(e) => saveOrUpdateVaccine(e)}>Submit</button>
                            <Link to={"/vaccines"} className="btn btn-danger" style={{marginLeft:"10px"}}>Cancel</Link>
                            </form>
                            <span className="float-right" style={{color:"#DC143C"}}>* fields mandatory </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default AddVaccineComponent