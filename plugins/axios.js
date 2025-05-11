
import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();

    const api = axios.create({
        baseURL: config.public.apiBase, // Set your base URL here
    });

    nuxtApp.provide('api', api);
});


// https://dev.multiwaybd.com/
