var app = require('express')();

app.get('/', (req, res) => {
    res.status(200).send('API Is Running');
});

app.get('/test', (req, res) => {
    res.status(500).send({ message: 'API Internal Servicer Error' });
});

var server = app.listen(3000, () => {
    console.log('servier is running on port : ', server.address().port);
});

module.exports = server;