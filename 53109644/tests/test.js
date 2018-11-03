import assert from 'assert'
import Wrapper from '../wrapper/s3'

const your_bucket = 'your_bucket_here'

describe('#question stackoverflow', function() {
    
    it('should return content type image/bmp', function() {
        
        let wrapper = new Wrapper()
        
        wrapper.getObject({ Bucket: your_bucket, Key: 'nelsinho_gaucho/2007122750236562500.Bmp' })
        .then(data => { assert.equal('image/bmp',data.ContentType) })
    });

    it('should return 20 objects', function() {
        
        let wrapper = new Wrapper()
        
        wrapper.listObjectsV2({ Bucket: your_bucket, MaxKeys: 20 })
        .then(data => { assert.equal(data.Contents.length,20) })
    });

    it('should return only one version', function() {
        
        let wrapper = new Wrapper()
        
        wrapper.listObjectVersions({ Bucket: your_bucket, Prefix: 'nelsinho_gaucho/2007122750236562500.Bmp' })
        .then(data => { assert.equal(data.Versions.length,1) })
    });

    it('list all version from key object', function() {

        let wrapper = new Wrapper()

        wrapper.listObjectsV2({ Bucket: your_bucket, MaxKeys: 10 })
        .then(data => { 
            
            let tasks = []
            
            data.Contents.forEach(element => {
                tasks.push(wrapper.listObjectVersions({ Bucket: your_bucket, Prefix: element.Key })) 
            })

            return Promise.resolve(tasks)

            })
            .then( tasks => {
            console.dir(tasks)
            Promise.all(tasks).then(res => {
                console.log(res)
                res.forEach(element => {
                    //console.log(element)
                })
            })
            })
    });

})
