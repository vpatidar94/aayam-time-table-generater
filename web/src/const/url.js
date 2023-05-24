const ENV_URL = 'https://api.aayamcareerinstitute.co.in/api'; // producation fn
const DEV_URL = 'http://localhost:5001'; // producation fn
const BASE_URL= ENV_URL



export const URL = {
    UPLOAD_FILE: BASE_URL + '/UploadFilesAttachment',
    GET_UPLOAD_FILE_URL: BASE_URL + '/GetFiles', 
    GET_SAVE_TIMETABLE_URL: BASE_URL+ '/AddUpdateTimeTable',
    GET_ALL_TT: BASE_URL + '/GetTimeTable', 

    GET_EDIT_TT: BASE_URL + '/GetTimeTableByDate',
    REMOVE_TT: BASE_URL + '/DeleteTimeTable',




};  
