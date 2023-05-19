import {v4 as uuidv4} from "uuid"



// export const teachers_list = [
// {name:'MYK',
// className:"style-faculty",
// bgColor:"bg-myk",
// bg:"blue"
// },

// {name:'KPS',
// className:"style-faculty",
// bgColor:"bg-kps"
// },

// {name:'MRS',
// className:"style-faculty",
// bgColor:"bg-mrs"
// },

// {name:'MAS',
// className:"style-faculty",
// bgColor:"bg-mas"
// },

// {name:'RSS',
// className:"style-faculty",
// bgColor:"bg-rss"
// },

// {name:'NMS',
// className:"style-faculty",
// bgColor:"bg-nms"
// },

// {name:'HDS',
// className:"style-faculty",
// bgColor:"bg-hds"
// },

// {name:'MNM',
// className:"style-faculty",
// bgColor:"bg-mnm"
// },

// {name:'SJ',
// className:"style-faculty",
// bgColor:"bg-sj"},

// {name:'AJ',
// className:"style-faculty",
// bgColor:"bg-aj"
// },

// {name:'DMPS',
// className:"style-faculty",
// bgColor:"bg-dmps"
// },

// {name:'PSJ',
// className:"style-faculty",
// bgColor:"bg-psj"
// },

// {name:'YBS',
// className:"style-faculty",
// bgColor:"bg-ybs"
// },

// {name:'AKS',
// className:"style-faculty",
// bgColor:"bg-aks"},

// {name:'AMS',
// className:"style-faculty",
// bgColor:"bg-ams"},



// ]; 



export const teachers_list = [
        {
            FacultyID: 22,
            Faculty: "MYK",
            subject: "Physics"
        },
        
        {
            FacultyID: 3038,
            Faculty: "KPS",
            subject:"Chemistry"
        },

        {
            FacultyID: 2029,
            Faculty: "MRS",
            subject:"Chemistry"
        },

        {
            FacultyID: 3051,
            Faculty: "MAS",
            subject:"Physics"
        },

        {
            FacultyID: 3050,
            Faculty: "RSS",
            subject:"Physics"
        },
        {
            FacultyID: 25,
            Faculty: "NMS",
            subject:"Biology"
        },
        {
            FacultyID: 3037,
            Faculty: "HDS",
            subject:"Chemistry"
        },
        {
            FacultyID: 3032,
            Faculty: "MNM",
            subject: "Biology"
        },
        
        {
            FacultyID: 1023,
            Faculty: "SJ",
            subject:"Biology"
        },

        {
            FacultyID: 1025,
            Faculty: "AJ",
            subject:"Biology"
        },

        {
            FacultyID: 1026,
            Faculty: "DMPS",
            subject:"Chemistry"
        },

        
       
        
        {
            FacultyID: 1027,
            Faculty: "PSJ",
            subject:"Physics"
        },
        {
            FacultyID: 3033,
            Faculty: "YBS",
            subject:"Biology"
        },
        {
            FacultyID: 3030,
            Faculty: "AKS",
            subject:"Chemistry"
        },
        {
            FacultyID: 2028,
            Faculty: "AMS",
            subject:"Maths"
        },
        {
            FacultyID: 3031,
            Faculty: "NDS",
            subject:"Physics"
        },
        {
            FacultyID: 3052,
            Faculty: "HWS",
            subject:"Physics"
        },
        {
            FacultyID: 1029,
            Faculty: "JRS",
            subject:"Chemistry"
        },
        {
            FacultyID: 3053,
            Faculty: "HTS",
            subject:"Chemistry"
        },
    ]; 
    


// PREVIOUS BATACH LIST
// export const batch = [
//     {id:uuidv4(),
//     batchname:'A1'},
//     {id:uuidv4(),
//     batchname:'A2'},
//     {id:uuidv4(), 
//     batchname:'CRASH E'},
//     {id:uuidv4() ,
//     batchname:'CRASH H'},
//     {id:uuidv4(),
//     batchname:'ONLINE'},
//     {id:uuidv4(),
//     batchname:'A14'},
//     {id:uuidv4(),
//     batchname:'JEE EX'},
//     {id:uuidv4(),
//     batchname:'JEE12'},
    
// ];


export const batch= [
    {
        BatchID: 1,
        Batch: "A1",
        CourseID: 3
    },
    {
        BatchID: 6,
        Batch: "A2",
        CourseID: 3
    },
    {
        BatchID: 10,
        Batch: "A3",
        CourseID: 3
    },
    {
        BatchID: 7,
        Batch: "A4",
        CourseID: 3
    },
    {
        BatchID: 3,
        Batch: "C1",
        CourseID: 1
    },
    {
        BatchID: 15,
        Batch: "C2",
        CourseID: 1
    },
    {
        BatchID: 2,
        Batch: "B1",
        CourseID: 2
    },
    {
        BatchID: 3049,
        Batch: "B2",
        CourseID: 2
    },
    //MORE BATCHES ADDED WITH A FAKE BATCHID AND FAKE COURSEID NEED TO CHANGE LATER

    {
        BatchID: 20,
        Batch: "JO1",
        CourseID: 13
    },
    {
        BatchID: 3042,
        Batch: "JXI-1",
        CourseID: 11
    },
    {
        BatchID: 3061,
        Batch: "JXI-2",
        CourseID: 11
    },
    {
        BatchID: 22,
        Batch: "JXII-1",
        CourseID: 12
    },
    {
        BatchID: 13,
        Batch: "JEXL",
        CourseID: 13
    },
    {
        BatchID: 14,
        Batch: "JEE Adv",
        CourseID: 14
    }
]



export const time= [
    {
        LectureID: 1,
        Lecture: "L1",
        Time_From: "08:30 AM",
        Time_To: "09:45 AM"
    },
    {
        LectureID: 2,
        Lecture: "L2",
        Time_From: "09:50 AM",
        Time_To: "11:05 AM"
    },
    {
        LectureID: 3,
        Lecture: "L3",
        Time_From: "11:20 AM",
        Time_To: "12:35 PM"
    },
    {
        LectureID: 4,
        Lecture: "L4",
        Time_From: "12:40 PM",
        Time_To: "01:55 PM"
    },
    {
        LectureID: 5,
        Lecture: "L5",
        Time_From: "02:00 PM",
        Time_To: "03:15 PM"
    },
    {
        LectureID: 6,
        Lecture: "L6",
        Time_From: "03:20 PM",
        Time_To: "04:35 PM"
    },
    {
        LectureID: 7,
        Lecture: "L7",
        Time_From: "04:50 PM",
        Time_To: "06:05 PM"
    },
    {
        LectureID: 8,
        Lecture: "L8",
        Time_From: "06:15 PM",
        Time_To: "07:30 PM"
    }
]



//PREVIOUS TIME LIST

// export const time = [
//     {id:uuidv4(),
//     classtime:'08:30-09:45 AM'},
//     {id:uuidv4(),
//     classtime:'09:50-11:05 AM'},
//     {id:uuidv4(),
//     classtime: '11:20-12:35 PM'},
//     {id:uuidv4(),
//     classtime:'12:40-01:55 PM'},
//     {id:uuidv4(),
//     classtime:'02:00-03:15 PM'},
//     {id:uuidv4(),
//     classtime:'03:20-04:35 PM'},
//     {id:uuidv4(),
//     classtime:'04:50-06:05 PM'},
//     {id:uuidv4(),
//     classtime:'06:15-07:30 PM'}];

    