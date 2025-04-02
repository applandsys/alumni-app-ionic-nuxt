
import { useUserStore } from '#imports';
export const useApi = (endpoint, options = {}) => {
    const config = useRuntimeConfig();
    const userStore = useUserStore();
    const user = userStore.getUser;
    return useFetch(endpoint,{
        baseURL: `${config.public.apiBase}`,
        headers: {
            Authorization: `Bearer ${user.token}`, // Attach Sanctum token
        }, ...options
    });
};

