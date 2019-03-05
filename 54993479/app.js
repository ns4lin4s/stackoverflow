const express = require('express')
const AWS = require("aws-sdk")
AWS.config.update({region: 'REGION'});
const sns = new AWS.SNS({apiVersion: '2010-03-31'})

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('public'))

app.get('/', (req, res) => res.send('index.html'))

app.post('/', function (req, res) {
    
    var params = {
        Protocol: 'email', /* required */
        TopicArn: 'ARN', /* required */
        Endpoint: req.body.email_field /* required */
    };
    
    sns.subscribe(params, function(err, data) {
        if (err) 
        {
            console.log(err); 
            res.send('Error: ' + err.stack);
        }
        else 
        {
            console.log(data)
            res.send(data);
        }
            
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))