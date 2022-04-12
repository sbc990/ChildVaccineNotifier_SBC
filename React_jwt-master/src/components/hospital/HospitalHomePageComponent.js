import React,{useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import authService from '../../services/auth.service';

const HospitalHomePageComponent = () => {
           
    return(
        
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-3 '>
                    <div className='card text-center'>
                <div className='card-header  text-white'style={{backgroundColor:"#20c997"}}>
                    <div className='row align-items-center'>
                        <div className='col'>
                           <h3>Doctors</h3>

                        </div>

                    </div>
                </div>

                
                <div className='card-footer'>
                    <Link to={'/hospital-doctors'} >View Details</Link>
                </div>
                </div>
                </div>               
                
                <div className='col-md-3 ' >
                    <div className='card text-center '>
                <div className='card-header text-white' style={{backgroundColor:"#2F4F4F"}}>
                    <div className='row align-items-center'>
                        <div className='col'>
                           <h3>Vaccines</h3>

                        </div>
                       
                    </div>
                </div>
                <div className='card-footer'>
                    <Link to={'/vaccine-calender'} >View Details</Link>
                </div>
                </div>
                </div>

               
                <div className='col-md-3 '>
                    <div className='card text-center '>
                <div className='card-header bg-primary text-white'>
                    <div className='row align-items-center'>
                        <div className='col'>
                           <h3>Booking Details</h3>

                        </div>
                       
                    </div>
                </div>
                <div className='card-footer'>
                    <Link to={'/booking-details'}>View Details</Link>
                </div>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default HospitalHomePageComponent