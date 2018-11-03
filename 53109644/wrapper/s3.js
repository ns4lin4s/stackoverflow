import AWS from 'aws-sdk'
const S3 = new AWS.S3();

export default class WrapperS3 {

    getObject(param)
    {
        return new Promise((resolve, reject) => {
            S3.getObject(param,(err,data) => {
                if(err) reject(err)
                resolve(data)
            })
        })   
    }

    listObjectsV2(param)
    {
        return new Promise((resolve, reject) => {
            S3.listObjectsV2(param,(err,data) => {
                if(err) reject(err)
                resolve(data)
            })
        })
    }

    listObjectVersions(param)
    {
        return new Promise((resolve, reject) => {
            S3.listObjectVersions(param,(err,data) => {
                if(err) reject(err)
                resolve(data)
            })
        })   
    }
}