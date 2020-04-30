const cluster = require('cluster');
//Is the file being executed in master mode
//ab -c 2 -n 2 localhost:3000/
//check cluster used
if (cluster.isMaster) {
    // index.js to be executed *again* but in child mode
    cluster.fork();
} else {

    const express = require('express');
    const app = express();

    function doWork(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) {}
    }
    app.get('/', (req, res) => {
        //doWork(5000);
        res.send("hell");
    });
    app.listen(3000);
}