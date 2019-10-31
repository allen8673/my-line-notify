const express = require('express');
const PORT = 8888;
const HOST = '0.0.0.0';
const app = express();
app.get('/', (req, res) => {
   res.sendfile('index.html', function(err) {
        if (err) res.send(404);
    });
});
app.listen(PORT, HOST);