

export const useAuth = () => {
    const token = useState('token', () => null);

    const { $api } = useNuxtApp();
    const login = async (email, password) => {
        try {
            const {data} = await $api.post('/login', {
                email, password
            }).catch(()=>{
                throw new Error(err);
            });

            // user.value = data?.data;

            if(data?.data?.token){
                token.value = data?.data?.token;
            }

            localStorage.setItem('token', data?.data?.token);

            return {data:data?.data};

        } catch (err) {
            console.error("Login failed", err);
            return {err};
        }
    };

    const logout = () => {
        token.value = null;
        localStorage.removeItem('token');
    };

    return { token, login, logout };
};
