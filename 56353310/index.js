var watermark = require('image-watermark');
var path = require('path')

watermark.embedWatermark(path.resolve(__dirname,'./pic_stgo_chile.jpg'), {
    'text' : 'sample watermark',
    'color' : 'rgb(154, 50, 46)'
},function(err) {
    if (!err)
        console.log('Succefully embeded watermark');
});


 
