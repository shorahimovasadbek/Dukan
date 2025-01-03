import axios from "axios";

const getData = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default getData