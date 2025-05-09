
import { useUserStore } from '#imports';

export const useApi = (endpoint, options = {}) => {
    const config = useRuntimeConfig();
    const userStore = useUserStore();
    const user = userStore.getUser;

    return useFetch(endpoint, {
        baseURL: config.public.apiBase,
        headers: {
            ...(user?.token && { Authorization: `Bearer ${user.token}` }), // Only attach if token exists
            ...options.headers, // Merge additional headers
        },
        ...options,
    });
};

