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



// getEditTt = async () => {
//     try {
//         const res = await fetch(URL.GET_EDIT_TT, {
//             method: 'POST',
//         });
//         const result = await res.json();
//         return result;
//     } catch (e) {
//         throw new Error(e.message, e.options);
//     }
// }

getEditTt = async () => {
    try {
        // const formData = new FormData();
        // formData.append('file', file, file.name);
        const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
        const res = await fetch(URL.GET_EDIT_TT, {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
            FromDate: "18/05/23",
        })});
        const result = await res.json();
        return result;
    } catch (e) {
        throw new Error(e.message, e.options);
    }
}
}