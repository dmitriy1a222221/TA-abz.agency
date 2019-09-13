import { apiAuth } from 'api/auth';

export const authorization = () => {
    apiAuth.getToken()
        .then(res => {
            const { data: { success, token } } = res;

            if(success) {
                localStorage.setItem('token', token)
            }
        })
        .catch(err => {
            console.log(err)
        })
};
