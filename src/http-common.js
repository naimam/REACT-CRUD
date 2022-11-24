import axios from 'axios';
// axios instance with default config
export default axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-type': 'application/json'
    }
});