import axios from 'axios';
import getToken from './getToken';
const BASE_URL = 'http://localhost:4000/api/'

const transxriptApi = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Credentials':true
	},
})

const authInterceptor = (config:any) => {
	const authToken = getToken();

	if (authToken) config.headers['authorization'] = `Bearer ${authToken?.token}`;
	config.headers['Access-Control-Allow-Origin'] = '*';
	return config;
};

transxriptApi.interceptors.request.use(authInterceptor);

export default transxriptApi;