import http from "../http-common";

export const getAllUsers = () => {
    return http.get('/users');
}

export const getUser = (id) => {
    return http.get(`/users/${id}`);
}

export const createUser = (data) => {
    return http.post('/users', data);
}

export const updateUser = (id, data) => {
    return http.put(`/users/${id}`, data);
}

export const deleteUser = (id) => {
    return http.delete(`/users/${id}`);
}
