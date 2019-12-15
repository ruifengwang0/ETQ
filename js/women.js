var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// img path
//var imgPath = '../src/assets/images/women/women12.jpg';

// connect to mongo
var mongoDB = "mongodb://localhost:27017/mydb";
mongoose.connect(mongoDB);

// example schema
var schema = new Schema({
    img: { data: Buffer, contentType: String }
});

var images=mongoose.model('women',schema);

// our model
var A = mongoose.model('women', schema);

mongoose.connection.on('open', function () {
  console.error('mongo is open');

    // store an img in binary in mongo

    var a = new A;
    //a.img.data = fs.readFileSync(imgPath);
    //a.img.contentType = 'image/png';
    //console.log(a);
    // a.save(function (err, a) {
    //   if (err) throw err;
      
    // images.create(a,function(err,images){
    //       if(err){
    //         console.log(err);
    //       }
    //       else{
            
    //       }
    //     })


    //});

      // start a demo server
      var server = express();
      // server.get('/get', function (req, res, next) {
      //   A.findById(a, function (err, doc) {
      //     if (err) return next(err);
      //     res.contentType('image/png');
      //     res.send(docs);
      //   });
      // });


      server.get('/api/images/:id',function(req,res,next){
        var id = req.params.id;
        images.find({_id:id},function(err,docs){
          if(err){
            //res.send(err);
          }
          else{
            console.log(docs);
            res.contentType('image/png');
            res.send(docs[0].img.data);
          }
          next();
        });
      });

      server.on('close', function () {
        console.error('dropping db');
        mongoose.connection.db.dropDatabase(function () {
          console.error('closing db connection');
          mongoose.connection.close();
        });
      });

      server.listen(4444, function (err) {       
        console.error('press CTRL+C to exit');
      });

      process.on('SIGINT', function () {
        server.close();
      });
  });