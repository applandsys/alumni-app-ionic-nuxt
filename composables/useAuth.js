export const useAuth = () => {
    const user = useState('user', () => null);
    const token = useState('token', () => null);

    const login = async (email, password) => {
        try {
            const { data, error } = await useFetch('/login', {
                baseURL: 'http://127.0.0.1:8000/api/v1',
                method: 'POST',
                body: { email, password }
            });

            if (error.value) {
                throw new Error(error.value.message);
            }

            user.value = data.user;
            token.value = data.token;

            localStorage.setItem('token', data.value.data.token);

            return {data};

        } catch (err) {
            console.error("Login failed", err);
            return {err};
        }
    };

    const logout = () => {
        user.value = null;
        token.value = null;
        localStorage.removeItem('token');
    };

    return { user, token, login, logout };
};
