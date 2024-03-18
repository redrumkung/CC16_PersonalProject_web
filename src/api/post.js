import axios from '../config/axios';

export const createPost = formData => axios.post('/services/create', formData);
export const getAllTrips = () => axios.get('/services/trips')