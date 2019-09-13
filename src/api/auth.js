import { WrapperRequest } from 'api/wrapperRequest';

class Auth extends WrapperRequest {
    getToken() {
        return this.get('/token')
    };
}

export const apiAuth = new Auth();
