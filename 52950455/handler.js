
export async function ping(event, context) {
    console.log('ping')
    let hello = "hello world 123"
    console.log(hello)

    var responseBody = {
        "key3": "value3",
        "key2": "value2",
        "key1": "value1"
    };

    var response = {
        "statusCode": 200,
        "headers": {
            "my_header": "my_value"
        },
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false
    };

    return Promise.resolve(response)

}