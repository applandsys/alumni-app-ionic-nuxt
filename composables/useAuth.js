import { useUserStore } from "#imports";

export const useAuth = () => {
    const token = useState('token', () => null);
    const user = useUserStore();
    const { $api } = useNuxtApp();
    const login = async (email, password) => {
        try {
            const {data} = await $api.post('/login', {
                email, password
            }).catch(()=>{
                throw new Error(err);
            });
            user.setUser(data?.data);
            return {data:data?.data};
        } catch (err) {
            console.error("Login failed", err);
            return {err};
        }
    };
    const signup = async (formData) => {
        try {
            const {data} = await $api.post('/register', formData).catch(()=>{
                throw new Error(err);
            });
            user.setUser(data?.data);
            return {data:data?.data};
        } catch (err) {
            console.error("signup failed", err);
            return {err};
        }
    };
    const logout = () => {
        token.value = null;
        localStorage.removeItem('token');
    };

    return { token, login, signup, logout };
};
