import axios from 'axios';

const geomineApi = import.meta.env.VITE_GEOMINE_API_URL

export class BaseApi {
    #http;

    constructor() {
        this.#http = axios.create({
            baseURL: geomineApi,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    get http() {
        return this.#http;
    }
}