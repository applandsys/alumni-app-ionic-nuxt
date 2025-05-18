import {useUserStore} from "~/stores/userStore";
export const getApiData = async (url: string, queryString: string[]) => {
    const {$api} = useNuxtApp();

    const userStore = useUserStore();
    const user = userStore.getUser;
    const token = user.token;

    const {data} = await $api.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );

    return data;
}