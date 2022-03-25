export const isAuthenticated = (state) => {
    if (state.auth.auth.result.token) return true;
    return false;
};