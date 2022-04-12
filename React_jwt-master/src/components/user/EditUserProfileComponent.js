import React, { useState ,useEffect} from 'react'
import { useParams,useHistory,Link } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import BenificiaryService from '../../services/BenificiaryService'

const EditUserProfileComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [motherName, setMotherName] = useState('')
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')
    const [mobNo, setMobNo] = useState('')
    const [blood, setBlood] = useState('')
    const [weight, setWeight] = useState('')
    const [gender, setGender] = useState('')
    const [userId,setUserId] = useState('')

    const history=useHistory();
    const {id}=useParams()


    const saveOrUpdateBenificiary=(e)=>{
        e.preventDefault();

        const benificiary={firstName,middleName,lastName,motherName,dob,address,mobNo,blood,weight,gender,userId}

        if(id){
            BenificiaryService.updateBenificiary(id,benificiary).then((response)=>{
                history.push("/user-home")
            }).catch(error=>{
                console.log(error)
            })
        }
        else{
            BenificiaryService.createBenificiary(benificiary).then((response)=>{
                history.push("/user-home")
            }).catch(error=>{
                console.log(error)
            })
        }
        
    }

    useEffect(() => {
      BenificiaryService.getBenificiaryById(id).then((response)=>{
          setFirstName(response.data.firstName)
          setMiddleName(response.data.middleName)
          setLastName(response.data.lastName)
          setMotherName(response.data.motherName)
          setDob(response.data.dob)
          setAddress(response.data.address)
          setMobNo(response.data.mobNo)
          setBlood(response.data.blood)
          setWeight(response.data.weight)
          setGender(response.data.gender)
          setUserId(response.data.userId)

      }).catch(error=>{
          console.log(error)
      })

    }, [])

    const title=()=>{
        if(id){
            return <h2 className='text-center'>Update Benificiary</h2>
        }
        else{
            return <h2 className='text-center'>Update Profile</h2>
        }
    }
    
    return(
        <div>
            <div className='container'>
                <br/>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                       {
                           title()
                       }
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
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

                                <div className='form-group mb-2'>
                                <label className="form-lable">Middle Name:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Middle name"
                                    name="middleName"
                                    className="form-control"
                                    value={middleName}
                                    onChange={(e) => setMiddleName(e.target.value)}
                                >
                                </input>

                                </div>

                                <div className='form-group mb-2'>
                                <label className="form-lable">Last Name:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Last name"
                                    name="lastName"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                >
                                </input>

                                </div>

                                <div className='form-group mb-2'>
                                <label className="form-lable">Mother Name:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Mother name"
                                    name="motherName"
                                    className="form-control"
                                    value={motherName}
                                    onChange={(e) => setMotherName(e.target.value)}
                                >
                                </input>

                                </div>

                                <div className='form-group mb-2'>
                                <label className="form-lable">Date of Birth:<span style={{color:"red"}}>*</span></label>
                                <DatePicker
                                   selected={dob}
                                    className="form-control"
                                    //value={date}
                                    onChange={(e) => setDob(e)}
                                    dateFormat='yyyy/MM/dd'
                                    maxDate={new Date()}
                                    isClearable
                                    showYearDropdown
                                    scrollableMonthYearDropdown
                                >
                                </DatePicker>
                                </div>

                                <div className='form-group mb-2'>
                                <label className="form-lable">Address:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter address"
                                    name="address"
                                    className="form-control"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                >
                                </input>
                                </div>


                                <div className='form-group mb-2'>
                                <label className="form-lable">Mobile Number:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter mobile no."
                                    name="mobNo"
                                    className="form-control"
                                    maxLength="10"
                                    value={mobNo}
                                    onkeypress="return onlyNumberKey(event)"
                                    onChange={(e) => setMobNo(e.target.value)}
                                >
                                </input>
                                </div>

                                <div className='form-group mb-2'>
                                <label className="form-lable">Blood Group:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter blood group"
                                    name="blood"
                                    className="form-control"
                                    value={blood}
                                    onChange={(e) => setBlood(e.target.value)}
                                >
                                </input>
                                </div>

                                <div className='form-group mb-2'>
                                <label className="form-lable">Weight:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="number"
                                    placeholder="Enter weight in kg"
                                    name="weight"
                                    className="form-control"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                >
                                </input>
                                </div>

                                <div className='form-group mb-2'>
                                <label className="form-lable">Gender:<span style={{color:"red"}}>*</span></label>
                                <select
                                    type="select"
                                    placeholder="select your gender"
                                    name="gender"
                                    className="form-control"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    
                                <option selected>Select Gender</option><option value="Male">Male</option>
                                <option value="Female">Female</option>
                                </select>
                                </div>

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

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateBenificiary(e)}>Submit</button>
                            <Link to={"/user-home"} className="btn btn-danger" style={{marginLeft:"10px"}}>Cancel</Link>
                            </form>
                            <span className="float-right" style={{color:"red"}}>* fields mandatory </span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditUserProfileComponent