import { URL } from '../const/url';

export default class TtApi {
    getTtList = async () => {
        try {
            const res = await fetch(URL.GET_ALL_TT, {
                method: 'GET',
            });
            const result = await res.json();
            return result;
        } catch (e) {
            throw new Error(e.message, e.options);
        }
    }
}