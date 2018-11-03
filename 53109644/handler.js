
import Wrapper from './wrapper/s3'

export async function ping(event, context) {
    
    let response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": null,
        "isBase64Encoded": false
    }

    let wrapper = new Wrapper()

    return wrapper.listObjectsV2({ Bucket: process.env.bucket, MaxKeys: 1000 })
    .then(data => { 
        
        let tasks = []
        
        for(let i = 0; i < data.Contents.length; i++)
        {
            tasks.push(wrapper.listObjectVersions({ Bucket: process.env.bucket, Prefix: data.Contents[i].Key })) 
        }

        return Promise.resolve(tasks)
    })
    .then(async tasks => {
        
        return Promise.all(tasks).then(res => {
            response.body = JSON.stringify(res)  
            return Promise.resolve(response) 
        })
    })
    .catch(error => {
        response.statusCode = 500        
        response.body = JSON.stringify(error)  
        return Promise.resolve(response) 
    });

}