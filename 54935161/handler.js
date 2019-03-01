
var AWS = require("aws-sdk")

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function ping(event, context) {
    
    console.log('ping')
    
    let params = {
        TableName: 'TableTest',
        Item: {
            email: 'test@gmail.com'
        }
    };

    let output = new Promise((resolve,reject) => {

        dynamoDb.put(params, (error) => {

            let response = {
                "statusCode": 200,
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": null,
                "isBase64Encoded": false
            };

            if (error)
            {
                response.body = JSON.stringify({'status_code':'500'})
                return reject(response)
            }   
            else
            {
                response.body = JSON.stringify({'status_code':'200'})
                return resolve(response);
            }      
        })
    })

    return output

}