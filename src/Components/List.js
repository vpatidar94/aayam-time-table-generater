import {v4 as uuidv4} from "uuid"



export const teachers_list = ['MYK','KPS','MRS','MAS','RSS','NMS','HDS','MNM','SJ','AJ','DMPS','PSJ','YBS','AKS','AMS']; 


export const batch = [
    {id:uuidv4(),
    batchname:'A1'},
    {id:uuidv4(),
    batchname:'A2'},
    {id:uuidv4(), 
    batchname:'CRASH E'},
    {id:uuidv4() ,
    batchname:'CRASH H'},
    {id:uuidv4(),
    batchname:'ONLINE'},
    {id:uuidv4(),
    batchname:'A14'},
    {id:uuidv4(),
    batchname:'JEE EX'},
    {id:uuidv4(),
    batchname:'JEE12'}];

export const time = [
    {id:uuidv4(),
    classtime:'08:30-09:45 AM'},
    {id:uuidv4(),
    classtime:'09:50-11:05 AM'},
    {id:uuidv4(),
    classtime: '11:20-12:35 PM'},
    {id:uuidv4(),
    classtime:'12:40-01:55 PM'},
    {id:uuidv4(),
    classtime:'02:00-03:15 PM'},
    {id:uuidv4(),
    classtime:'03:20-04:35 PM'},
    {id:uuidv4(),
    classtime:'04:50-06:05 PM'},
    {id:uuidv4(),
    classtime:'06:15-07:30 PM'}];

// const teacher_assignment = {};


// time.forEach((t) => {
// 	batch.forEach((b) => {
// 		const key = t.id + '_' + b.id;
// 		teacher_assignment[key] = null;
// 	});
// });




{/* <tr>

map() {
	<td>b1</td>
}

</tr>

<tr key='t1'>

map() {
	<td>teacher_assignment[t.id + '_' + b.id]</td>
	<td>b2</td>
	<td>b3</td>
	<td>b4</td>
	<td>b5</td>

}

</tr>  */}