const http = require('http');
const main = require('./main');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3001;

const server = http.createServer(main);


server.listen(port, () => {
    console.log("XXXXXXXXXXX35 server connnected to the port " + port);
});