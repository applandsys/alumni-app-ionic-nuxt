import { useUserStore } from "#imports";

export const useAuth = () => {
    const token = useState('token', () => null);
    const user = useUserStore();
    const { $api } = useNuxtApp();

    const login = async (email, password) => {
        try {
            const response = await $api.post('/login', {
                email, password
            });
            return { data: response.data?.data };
        } catch (err) {
            const error = err?.response?.data || { message: "An unexpected error occurred" };
            return { error };
        }
    };



    const signup = async (formData) => {
        try {
            const response = await $api.post('/register', formData);
            return { data: response.data?.data };
        } catch (err) {
            const error = err?.response?.data || { message: "An unexpected error occurred" };
            return { error };
        }
    };

    const logout = () => {
        token.value = null;
        localStorage.removeItem('token');
    };

    return { token, login, signup, logout };
};
