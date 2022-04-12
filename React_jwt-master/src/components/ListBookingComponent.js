import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BookingService from '../services/BookingService'
import authService from '../services/auth.service';
const ListBookingComponent = () => {
  
    const[bookings,setBookings]=useState([])

    useEffect(() => {

        getAllBooking();
     
    }, [])

    const getAllBooking=()=>{
        BookingService.getAllBooking().then((response)=>{
            setBookings(response.data)
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    const deleteBooking=(bookingId)=>{
        BookingService.deleteBooking(bookingId).then((response)=>{
            getAllBooking();
        }).catch(error=>{
            console.log(error)
        })
    }



    return(
        <div className='container'>
            <br/>
            <h2 className='text-center'>Booking List
            
           
            </h2>
            <br/>
            <table className='table border shadow'>
                <thead className='thead-dark'>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Booking Date</th>
                    <th>Booking Time</th>
                    <th>Vaccine Name</th>
                    <th>Hospital Name</th>                
                    <th>Action</th>
                </thead>
               
                <tbody>
                    {
                        bookings.map(
                            booking =>
                            <tr key={booking.id}>
                                <td>{booking.id}</td>
                                <td>{booking.firstName}</td>
                                <td>{booking.lastName}</td>
                                <td>{booking.email}</td>
                                <td>{booking.date}</td>
                                <td>{booking.time}</td>
                                <td>{booking.vaccineName}</td>
                                <td>{booking.hospitalName}</td>
                            <td>
                                       
                            <button className='btn btn-danger' onClick={()=>deleteBooking(booking.id)} style={{marginLeft:"10px"}}>Delete</button>
                            </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
    
}

export default ListBookingComponent