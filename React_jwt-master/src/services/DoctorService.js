import axios from "axios";


const DOCTOR_BASE_REST_API_URL = "http://localhost:9090/api/doctors";

axios.interceptors.request.use( config => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if(user && user.accessToken){
      const token = 'Bearer ' + user.accessToken;
      config.headers.Authorization =  token;
    }
  
    return config;
  });
  

class DoctorService{


    getAllDoctors(){
        return axios.get(DOCTOR_BASE_REST_API_URL, )
    }

    createDoctor(doctor){
        return axios.post(DOCTOR_BASE_REST_API_URL,doctor,)
    }

    getDoctorById(doctorId){
        return axios.get(DOCTOR_BASE_REST_API_URL + '/' +doctorId,)
    }

    updateDoctor(doctorId, doctor){
        return axios.put(DOCTOR_BASE_REST_API_URL + '/' +doctorId,doctor,)
    }

    deleteDoctor(doctorId){
        return axios.delete(DOCTOR_BASE_REST_API_URL + '/' + doctorId,)
    }
}

export default new DoctorService();