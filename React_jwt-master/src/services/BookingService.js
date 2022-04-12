import axios from "axios";

const BOOKING_BASE_URL= "http://localhost:9090/booking"

class BookingService{

    getAllBooking(){
        return axios.get(BOOKING_BASE_URL)
    }

    createBooking(booking){
        return axios.post(BOOKING_BASE_URL ,booking)
    }

    getBookingById(BookingId){
        return axios.get(BOOKING_BASE_URL + '/' + BookingId)
    }

    deleteBooking(benificiaryId){
        return axios.delete(BOOKING_BASE_URL + '/' + benificiaryId)
    }
}

export default new BookingService()