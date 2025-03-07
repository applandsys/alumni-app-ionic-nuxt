// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
    const { token } = useAuth();
    if (!token.value) {
        return navigateTo('/auth');
    }
});
