import { WrapperRequest } from 'api/wrapperRequest';

class Positions extends WrapperRequest {
    getPositions() {
        return this.get('/positions')
    };
}

export const apiPositions = new Positions();
