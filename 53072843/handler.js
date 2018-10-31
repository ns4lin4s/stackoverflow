
const request = require('request');

export async function ping(event, context) {

    let url = "https://api.chucknorris.io/jokes/random";
    
    let getChuckNorrisFact = (url) => {
        return new Promise(
            (resolve, reject) => {
                request.get(url, function(error, response, data){
                    if (error) reject(error);
                    
                    console.log(data)

                    let content = JSON.parse(data);
                    
                    let fact = content.value;
                    
                    resolve(fact);
                })
            }
        );
    };

    var response = {
        "statusCode": 200,
        "headers": {
            "my_header": "my_value"
        },
        "body": null,
        "isBase64Encoded": false
    }

    return getChuckNorrisFact(url)
    .then(fact =>  {
        response.body = JSON.stringify(fact)
        return Promise.resolve(response) 
    })
    .catch(error => {
        response.statusCode = 500        
        response.body = JSON.stringify(error)  
        return Promise.resolve(response) 
    });

}