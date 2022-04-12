import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const HomePageComponent = () => {
    
  
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
                    <Link to={'/doctors'} >View Details</Link>
                </div>
                </div>
                </div>

                <div className='col-md-3 '>
                    <div className='card text-center '>
                <div className='card-header text-white' style={{backgroundColor:"#DDA0DD"}}>
                    <div className='row align-items-center'>
                        <div className='col'>
                           <h3>Benificiaries</h3>

                        </div>
                        
                    </div>
                </div>
                <div className='card-footer'>
                    <Link to={'/benificiaries'} >View Details</Link>
                </div>
                </div>
                </div>

                <div className='col-md-3 '>
                    <div className='card text-center '>
                <div className='card-header bg-primary text-white'>
                    <div className='row align-items-center'>
                        <div className='col'>
                           <h3>Hospitals</h3>

                        </div>
                       
                    </div>
                </div>
                <div className='card-footer'>
                    <Link to={'/hospitals'}>View Details</Link>
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
                    <Link to={'/vaccines'} >View Details</Link>
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

export default HomePageComponent