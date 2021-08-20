import axios from 'axios'
import { BASE_URL } from '../setting/apiconfig'

const callAPI = (endpoint, method, data = null) => {
    return axios({
        url: `${BASE_URL}/${endpoint}`,
        method,
        data
    })
}
export default callAPI;