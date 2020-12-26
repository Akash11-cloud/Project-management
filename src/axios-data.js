import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://project-management-tool-5a927-default-rtdb.firebaseio.com/'
});

export default instance;