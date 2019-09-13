import { WrapperRequest } from 'api/wrapperRequest';

class Users extends WrapperRequest {
    getUsers(params) {
        return this.get('/users', params)
    };

    getUser(id) {
        return this.get(`/users/${id}`)
    };

    postUser(data) {
        return this.post('/users', data)
    };
}

export const apiUsers = new Users();
