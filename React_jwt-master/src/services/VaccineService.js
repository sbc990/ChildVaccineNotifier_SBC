import axios from "axios";

const VACCINE_BASE_REST_GET_API_URL='http://localhost:9090/vaccine';
class VaccineService{
    getAllVaccines(){
        return axios.get(VACCINE_BASE_REST_GET_API_URL)
    }
    createVaccine(vaccine){
        return axios.post(VACCINE_BASE_REST_GET_API_URL,vaccine)
    }

    getVaccineById(vaccineId){
        return axios.get(VACCINE_BASE_REST_GET_API_URL + '/' + vaccineId);

    }

    updateVaccine(vaccineId,vaccine)
    {
        return axios.put(VACCINE_BASE_REST_GET_API_URL + '/' +vaccineId,vaccine)
    }

    deleteVaccine(vaccineId)
    {
        return axios.delete(VACCINE_BASE_REST_GET_API_URL + '/' + vaccineId)
    }
}

export default new VaccineService();