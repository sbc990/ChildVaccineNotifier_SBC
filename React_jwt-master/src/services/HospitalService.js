import axios from "axios";

const HOSPITAL_BASE_REST_API_URL='http://localhost:9090/hospital';

class HospitalService{
    getAllHospitals()
    {
        return axios.get(HOSPITAL_BASE_REST_API_URL)
    }

    createHospital(hospital)
    {
        return axios.post(HOSPITAL_BASE_REST_API_URL,hospital)
    }

   getHospitalById(hospitalId)
   {
       return axios.get(HOSPITAL_BASE_REST_API_URL + '/' +hospitalId)
   }

   updateHospital(hospitalId,hospital)
   {
       return axios.put(HOSPITAL_BASE_REST_API_URL + '/' + hospitalId,hospital)
   }

    deleteHospital(hospitalId)
    {
        return axios.delete(HOSPITAL_BASE_REST_API_URL + '/' + hospitalId)
    }
    
}

export default new HospitalService();