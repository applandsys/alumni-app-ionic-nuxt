export const useApi = (endpoint, options = {}) => {
    const config = useRuntimeConfig();
    return useFetch(`${config.public.apiBase}/${endpoint}`, options);
};