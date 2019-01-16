const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/whoami', (req, res) => {
    res.json({ 'ipaddress': req.headers['x-forwarded-for'].substr(0, 13), 'language': req.headers['accept-language'], 'software': req.headers['user-agent'] });
});

const listener = app.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT);
});
