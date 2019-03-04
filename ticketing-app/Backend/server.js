const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen('5005', () => {
    console.log('server is now running on port 5005');
})

app.use(bodyParser.urlencoded({extended: false}));

app.post('/book/add', (req, res) => {
    console.log('works');
    res.body = 'hello'
    console.log('post body', req.body);
    console.log('response body', res.body);
});
