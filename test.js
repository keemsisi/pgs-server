var express = require('express'); 
    var app = express(); 
    var bodyParser = require('body-parser');
    var mongo = require('mongodb');
var test = require('assert');
var assert = require('assert');
var EventEmitter = require('events');
var fs = require('fs') ;
var Grid = require('gridfs-stream');

    var multer = require('multer');
    var GridFsStorage = require('multer-gridfs-storage');
    var Grid = require('gridfs-stream');





// Connection URL
// var url = 'mongodb://localhost:27017';
var url = 'mongodb://localhost:27017';
var events = new EventEmitter() ;
var mongodbClient = null ; // initital client value
var db  , gfs , gfsCommendation , gfsPubblication;




/**
 * Client hadler
 */
events.on('client-ready' , function(mongoDBClientReceived){
    
    console.log("Hello");
    mongodbClient = mongoDBClientReceived ;
    db = mongodbClient.db('pgs-db'); //get the database to use 
    db.createCollection("lasisi", function(result){
        console.log("Collection created");
    });
    gfs = Grid(db, mongo); 

    gfsCommendation = Grid(db, "commendation");
    gfsPubblication = Grid(db, "publication");

    // testInsertDocument({"name": "Adeshina", "age" : 334  , "school" : "Nigeria University"});
    console.log('[+] : MongoDb Connected successfully and ready to receive connection');


});

// Use connect method to connect to the server
mongo.connect(url, function(err, client) {
    assert.equal(null, err , "Error occured while connecting to MongoDb Server");
    console.log("Connected successfully to server");
    events.emit('client-ready' ,  client);
});



    /** Seting up server to accept cross-origin browser requests */
    app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", true);
        next();
    });

    app.use(bodyParser.json());

    /** Setting up storage using multer-gridfs-storage */
    var storage = GridFsStorage({
        url: 'mongodb://localhost:27017/pgs-db',
        gfs : gfs,
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        },
        /** With gridfs we can store aditional meta-data along with the file */
        metadata: function(req, file, cb) {
            cb(null, { originalname: file.originalname });
        },
        root: 'ctFiles' //root name for collection to store files into
    });

    var upload = multer({ //multer settings for single upload
        storage: storage
    }).single('file');

    /** API path that will upload the files */
    app.post('/upload', function(req, res) {
        upload(req,res,function(err){
            console.log(req.file) ;
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0,err_desc:null});
        });
    });

    app.get('/file/:filename', function(req, res){
        gfs.collection('ctFiles'); //set collection name to lookup into

        /** First check if file exists */
        gfs.files.find({filename: req.params.filename}).toArray(function(err, files){
            if(!files || files.length === 0){
                return res.status(404).json({
                    responseCode: 1,
                    responseMessage: "error"
                });
            }
            /** create read stream */
            var readstream = gfs.createReadStream({
                filename: files[0].filename,
                root: "ctFiles"
            });
            /** set the proper content type */
            res.set('Content-Type', files[0].contentType)
            /** return response */
            return readstream.pipe(res);
        });
    });

    app.listen('3002', function(){
        console.log('running on 3002...');
    });