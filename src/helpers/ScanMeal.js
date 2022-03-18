const FormData = require("form-data");
const fs = require("fs");
const https = require("https");


var form =new FormData();
form.append('image', fs.createReadStream('assets/images/pizzahut.jpeg'));

var headers = form.getHeaders();
headers['Authorization'] = 'Bearer 094a9f5a8d8c2d60bf272860d6c6acdd7be67c0d';

const options ={
    hostname: 'api.logmeal.es',
    path: '/v2/recognition/dish',
    method: 'POST',
    headers: headers,
};

const req = https.request(options,(res) => {
    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

form.pipe(req);