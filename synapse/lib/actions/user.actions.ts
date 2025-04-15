// // import axios from 'axios';
// //
// // export const login = async (email: string, password: string) => {
// //     const response = await axios.post('/api/auth/login', { email, password });
// //     return response.data;
// // };
// //
// // export const register = async (email: string, password: string, name: string) => {
// //     const response = await axios.post('/api/auth/register', { email, password, name });
// //     return response.data;
// // };
// //
// // export const logout = () => {
// //     localStorage.removeItem('token');
// // };
//
// import axios from 'axios';
//
// const API_URL = 'http://localhost:4000/auth'; // Backend base URL
//
// export const register = async (email: string, password: string, name: string) => {
//     const response = await axios.post(`${API_URL}/register`, { email, password, name });
//     return response.data;
// };
//
// export const login = async (email: string, password: string) => {
//     const response = await axios.post(`${API_URL}/login`, { email, password });
//     return response.data;
// };
//
// export const getToken = () => {
//     return localStorage.getItem('access_token');
// };
//
// export const setToken = (token: string) => {
//     localStorage.setItem('access_token', token);
// };
//
// export const logout = () => {
//     localStorage.removeItem('access_token');
// };



import axios from 'axios';

const API_URL = 'http://localhost:4000/auth'; // Backend base URL

export const register = async (email: string, password: string, name: string, firstName?: string, lastName?: string) => {
    // Create payload with optional firstName and lastName
    const payload = {
        email,
        password,
        firstName: firstName || 'Default First Name',  // Default value if not provided
        lastName: lastName || 'Default Last Name',    // Default value if not provided
    };

    try {
        const response = await axios.post(`${API_URL}/register`, payload);
        return response.data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
};

export const getToken = () => {
    return localStorage.getItem('access_token');
};

export const setToken = (token: string) => {
    localStorage.setItem('access_token', token);
};

export const logout = () => {
    localStorage.removeItem('access_token');
};
