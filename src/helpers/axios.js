import axios from 'axios';

const instance = axios.create({
    
    baseURL: 'https://us-central1-clone-ffe04.cloudfunctions.net/api'
    
    // 'http://localhost:5001/clone-ffe04/us-central1/api' the API URL (Cloud function)
    // https://us-central1-clone-ffe04.cloudfunctions.net/api"
});

export default instance;
