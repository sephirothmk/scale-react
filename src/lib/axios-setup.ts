import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';

const TIMEOUT = 60 * 1000
axios.defaults.baseURL = import.meta.env.VITE_MUSIC_API_URL
axios.defaults.timeout = TIMEOUT

const setupAxios = () => {
    const onRequestSuccess = (config: InternalAxiosRequestConfig) => {
        const apiKey = import.meta.env.VITE_MUSIC_API_KEY
        if (apiKey) {
            config.baseURL = config.baseURL?.replace(/{APIKEY}/, apiKey)
        }
        return config
    }

    const onRequestError = (error: AxiosError) => {
        return Promise.reject(error)
    }

    const onResponseSuccess = (response: AxiosResponse) => response

    const onResponseError = (error: AxiosError) => {
        const status = error.status || (error.response ? error.response.status : 0)
        if (status === 401) {
            console.log('Your API key is invalid!')
            window.location.reload()
        }

        if (status === 403) {
            console.log("You dont have permission to view this");
        }

        if (status === 500) {
            console.log("Our server crashed, please contact the backend devs");
        }

        return Promise.reject(error)
    }

    axios.interceptors.request.use(onRequestSuccess, onRequestError)
    axios.interceptors.response.use(onResponseSuccess, onResponseError)
}

export default setupAxios;
