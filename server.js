const onConnect = require('../db/connect')
const express = require('express')
const app = express()
const tasks = require('../controls/routes')
// const mongoose = require('mongoose')


//middleware
app.use(express.json())
//routes 
app.get('/hello', (req,res)=>{
    res.send('Task manager')
})

app.use('/api/v1/tasks',tasks)

onConnect()
// function createServer() {
//     function server(port) {
//         app.listen(port, () => console.log("server listening at port " + port));
//     }

//     return server;
// }





function createServer() {
    function server(port) {
        function listenCallback() {
            console.log("server listening at port " + port);
        }
        app.listen(port, listenCallback);
    }

    return server;
}

const myServer = createServer();
myServer(5000);



//app.get('/api/v1/tasks') -get all the tasks
//app.post('/api/v1/tasks) - create a new task
//app.get('/api/v1/tasks/:id') - get single taSK
//app.patch('/api/v1/tasks/:id')- update task
//app.delete('/api/v1/taks/:id') - delete task

exports.modules =tasks
