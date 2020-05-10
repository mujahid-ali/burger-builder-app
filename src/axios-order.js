import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://create-my-burger-28b7d.firebaseio.com/'
});

export default instance;