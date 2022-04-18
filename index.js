const http = require('http');
const app = require('./app')
const PORT = 2008

http.createServer(app).listen(PORT , () => {
    console.log(`server is running on ${PORT}`);
})