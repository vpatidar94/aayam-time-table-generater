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

getEditTt = async (fromDateEdit) => {
    try {
        // const formData = new FormData();
        // formData.append('file', file, file.name);
        const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
        const res = await fetch(URL.GET_EDIT_TT, {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
            FromDate: fromDateEdit.replaceAll("-", "/"),
        })});
        const result = await res.json();
        return result;
    } catch (e) {
        throw new Error(e.message, e.options);
    }
}

saveTt = async (fromDate,toDate,lectureList,sentBatchID) => {
    try {
        const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
        const res = await fetch(URL.GET_SAVE_TIMETABLE_URL, {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                TimeTableID: 0,
                Description: "time table save",
                DateType: "single",
                FromDate: fromDate,
                ToDate: toDate,
                ShiftID: 1,
                SessionID: 5,
                Session: "string",
                // BatchID: [
                //   1, 6, 10, 7, 3, 15, 2, 3049, 20, 3042, 3061, 22, 13, 14
                // ],,
                BatchID:sentBatchID,
                LectureID: [
                  1, 2, 3, 4, 5, 6, 7, 8
                ],
                IsActive: true,
                CreatedByUserID: 1,
                CreatedOnDate: new Date().toLocaleString(),
                LectureList: lectureList
        })});
        const result = await res.json();
        return result;
    } catch (e) {
        throw new Error(e.message, e.options);
    }
}



}