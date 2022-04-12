import axios from "axios";

const BENIFICIARY_BASE_URL="http://localhost:9090/benificiary"

class BenificiaryService{

    getAllBenificiaries(){
        return axios.get(BENIFICIARY_BASE_URL)
    }

    createBenificiary(benificiary){
        return axios.post(BENIFICIARY_BASE_URL,benificiary)
    }

    getBenificiaryById(benificiaryId){
        return axios.get(BENIFICIARY_BASE_URL +'/' + benificiaryId)
    }

    updateBenificiary(benificiaryId,benificiary){
        return axios.put(BENIFICIARY_BASE_URL + '/' +benificiaryId,benificiary)
    }

    deleteBenificiary(benificiaryId){
        return axios.delete(BENIFICIARY_BASE_URL + '/' +benificiaryId)
    }

    getCount(){
        return axios.get(BENIFICIARY_BASE_URL + '/count' )
    }
}

export default new BenificiaryService();