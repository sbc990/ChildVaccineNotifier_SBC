import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../images/vaccinelogo.PNG"
const HomePageComponent = () => {

  return (
      <section id='header' className='d-flex align-items-center'>
          
          <div className='row'>
          <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
              <h1>
                  Get Your Vaccine Here with <strong className='brand-name'>KidsImmunization</strong>
              </h1>
              <hr style={{color:"black"}}></hr>
              <h5 className='my-3'>
                 <strong> Vaccine Available On kidsImmunization</strong>
                 <h6 className=''>
                 <br/>
                     <p>Vaccine under kidsImmunization Program like BCG,OPV,Hepatitis B Vaccine,Pentavalent Vaccine,
                         Rotavirus Vaccine,Pneumococcal,Polio,Influenza,Varicella Vaccines for infants and children.</p></h6>
              </h5>
              <div className='mt-3'>
                  <a href='' className='btn-get-started'>Get Started</a>
              </div>
              
          </div>
          
          </div>
      </section>
    
  )
}

export default HomePageComponent