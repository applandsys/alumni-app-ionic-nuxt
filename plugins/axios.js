// plugins/axios.js
import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
    const api = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/v1', // Set your base URL here
    });

    nuxtApp.provide('api', api);
});
