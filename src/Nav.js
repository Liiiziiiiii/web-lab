export const login = (firstName, password) => {
    const savedFirstName = localStorage.getItem('userFirstName');
    const savedPassword = localStorage.getItem('userPassword');
    return firstName === savedFirstName && password === savedPassword;
};

export const register = (userData) => {
    const { firstName, password } = userData;
    if (firstName && password) {
        localStorage.setItem('userFirstName', firstName);
        localStorage.setItem('userPassword', password);
        return true;
    }
    return false;
};


export const logout = () => {
    localStorage.removeItem('userFirstName');
    localStorage.removeItem('userPassword');
};


export const isAuthenticated = () => {
    const userFirstName = localStorage.getItem('userFirstName');
    const userPassword = localStorage.getItem('userPassword');

    const hasCredentials = !!userFirstName && !!userPassword;
    return hasCredentials;
};
