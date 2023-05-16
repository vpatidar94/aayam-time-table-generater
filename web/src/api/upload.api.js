import { URL } from '../const/url';

export default class UploadApi {
    // getUserWalletBalance = async (userId) => {
    //     try {
    //         GlobalEmitterService.emit(true);
    //         const token = `Bearer ${AuthService.getToken()}`;
    //         const res = await fetch(URL.USER_WALLET_BALANCE + '?' + new URLSearchParams({
    //             userId
    //         }), {
    //             method: 'GET',
    //             headers: { 'Content-Type': 'application/json', 'Authorization': token },
    //         });
    //         const result = await res.json();
    //         GlobalEmitterService.emit(false);
    //         return result;
    //     } catch (e) {
    //         GlobalEmitterService.emit(false);
    //         throw new Error(e.message, e.options);
    //     }
    // }


    getWattsappApi = async (url, message, cell, fileName) => {
        try {
            console.log("url", url);
            console.log("mesage", message);
            console.log("cel", cell);
            console.log("file", fileName);
            // https://ziper.io/api/send.php?number=917898118503&type=media&message=test%20message&media_url=https://api.aayamcareerinstitute.co.in//Uploads/Files/File_3431223213168.pdf&filename=file_test.jpg&instance_id=6453479F141A2&access_token=0a3e27126c2c239bdf7f9128943ef9c0
            const res = await fetch("https://ziper.io/api/send.php" + '?' + new URLSearchParams({
                number: cell,
                type: "media",
                message: message,
                media_url: "https://api.aayamcareerinstitute.co.in/" + url,
                filename: fileName,
                instance_id: "6453479F141A2",
                access_token: "0a3e27126c2c239bdf7f9128943ef9c0"
            }), {
                method: 'GET',
            });
            const result = await res.json();
            return result;
        } catch (e) {
            throw new Error(e.message, e.options);
        }
    }


    getWattsappGroupApiTeachers = async (url, message, fileName) => {
        try {
            console.log("url", url);
            console.log("mesage", message);
            console.log("file", fileName);
            //https://ziper.io/api/sendgroupmsg.php?group_id=84987694574-1618740914@g.us&type=media&message=test%20message&media_url=https://i.pravatar.cc&filename=file_test.jpg&instance_id=6453479F141A2&access_token=0a3e27126c2c239bdf7f9128943ef9c0
            const res = await fetch("https://ziper.io/api/sendgroupmsg.php" + '?' + new URLSearchParams({
                group_id: "919977116612-1595572006@g.us",
                type: "media",
                message: message,
                media_url: "https://api.aayamcareerinstitute.co.in/" + url,
                filename: fileName,
                instance_id: "6453479F141A2",
                access_token: "0a3e27126c2c239bdf7f9128943ef9c0"
            }), {
                method: 'GET',
            });
            const result = await res.json();
            return result;
        } catch (e) {
            throw new Error(e.message, e.options);
        }
    }


    getWattsappGroupApiOthers = async (url, message, fileName) => {
        try {
            console.log("url", url);
            console.log("mesage", message);

            console.log("file", fileName);


            //https://ziper.io/api/sendgroupmsg.php?group_id=84987694574-1618740914@g.us&type=media&message=test%20message&media_url=https://i.pravatar.cc&filename=file_test.jpg&instance_id=6453479F141A2&access_token=0a3e27126c2c239bdf7f9128943ef9c0
            const res = await fetch("https://ziper.io/api/sendgroupmsg.php" + '?' + new URLSearchParams({
                group_id: "919826362001-1628170376@g.us",
                type: "media",
                message: message,
                media_url: "https://api.aayamcareerinstitute.co.in/" + url,
                filename: fileName,
                instance_id: "6453479F141A2",
                access_token: "0a3e27126c2c239bdf7f9128943ef9c0"

            }), {
                method: 'GET',
            });
            const result = await res.json();
            return result;
        } catch (e) {
            throw new Error(e.message, e.options);
        }
    }


    uplaodFile = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file, file.name);
            const res = await fetch(URL.UPLOAD_FILE, {
                method: 'POST',
                body: formData,
            });
            const result = await res.json();
            return result;
        } catch (e) {
            throw new Error(e.message, e.options);
        }
    }



    getUploadedFile = async () => {
        try {
            const res = await fetch(URL.GET_UPLOAD_FILE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({})

            });
            const result = await res.json();
            return result;
        } catch (e) {
            throw new Error(e.message, e.options);
        }
    }
}