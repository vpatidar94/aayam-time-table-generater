import GlobalEmitterService from '../service/GlobalEmitterService';
import { URL } from '../const/url';

export default class TtApi {
    getTtList = async () => {
        try {
            GlobalEmitterService.emit(true);
            const res = await fetch(URL.GET_ALL_TT, {
                method: 'GET',
            });
            const result = await res.json();
            GlobalEmitterService.emit(false);
            return result;
        } catch (e) {
            GlobalEmitterService.emit(false);
            throw new Error(e.message, e.options);
        }
    }

    getEditTt = async (fromDateEdit) => {
        try {
            // const formData = new FormData();
            // formData.append('file', file, file.name);
            GlobalEmitterService.emit(true);
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const res = await fetch(URL.GET_EDIT_TT, {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify({
                    FromDate: fromDateEdit.replaceAll("-", "/"),
                })
            });
            const result = await res.json();
            GlobalEmitterService.emit(false);
            return result;
        } catch (e) {
            GlobalEmitterService.emit(false);
            throw new Error(e.message, e.options);
        }
    }


    addUpdateTt = async (ttRequestBody) => {
        try {
            GlobalEmitterService.emit(true);
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const res = await fetch(URL.GET_SAVE_TIMETABLE_URL, {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(ttRequestBody)
            });
            const result = await res.json();
            GlobalEmitterService.emit(false);
            return result;
        } catch (e) {
            GlobalEmitterService.emit(false);
            throw new Error(e.message, e.options);
        }
    }

    removeTtById = async (timeTableID) => {
        try {
            GlobalEmitterService.emit(true);
            // const formData = new FormData();
            // formData.append('file', file, file.name);
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const res = await fetch(URL.REMOVE_TT, {
                method: 'POST',
                headers: myHeaders,
                body: timeTableID
            });
            const result = await res.json();
            GlobalEmitterService.emit(false);
            return result;
        } catch (e) {
            GlobalEmitterService.emit(false);
            throw new Error(e.message, e.options);
        }
    }
}