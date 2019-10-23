var handler = require('../handlers/handlers');
var express = require('express');
var app = express()
var multer  = require('multer')
var upload = multer()
var bodyParser = require('body-parser');
var bodyParser = require('body-parser');
var path = require('path');

/*****************************
 * Storage for the multer 
 * **************************
 */
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/cu');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now());
    }
  });

  /**
 * The below headers are the CORS activated to allow some request
 * This must be there..
 * The reponse will be sent with these headers
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true , limit : 1000000000000}));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

 

/*********************************************
 * The storage to store all the files uploaded 
 * *******************************************
 */
var upload = multer({ storage: storage });

//working
app.post('/:collectionName/:fullname', upload.any(), function (req, res,next) {
    console.log(req.body) ;
    var files = req.files // files uploaded to the server
    var bucket = req.params.collectionName ;
    console.log(files) ;

    var filesMappings = [] ;
    for ( let file of files ){
      var originalname =  file.originalname ;
      var filePath  = file.path;
      var filename = originalname.replace(new RegExp('\\s+','g'));
      async function awaitFileUploadComplete() {
      var  next  = await handler.upload( bucket , filePath , filename , req.params.fullname ) ;
      filesMappings.push(next);
      
      //files in the file mapping at the moment 
      console.log(filesMappings); 
        // console.log("[+] =>" + filename + " Uploaded successfully");
      }
      awaitFileUploadComplete();
    }
    console.log(JSON.stringify(({"message" : "upload was successful!", "fileMappings" : filesMappings})));
    res.status(200).json({"message" : "upload was successful!", "fileMappings" : filesMappings});
});

//get all files in collection
app.get('/:collectionName/files/:skip/:offset/_keys_', function (req, res, next) {
  handler.getAllFilesFromBucket(req.params.collectionName, req.params.skip , req.params.offset , res);
});

// delete all files in collection
app.purge('/:collectionName', function (req, res, next) {
  handler.dropAllFilesInCollection(req.params.collectionName , res);
});

//download file by ID
app.get('/:collectionName/byId/:id', function (req, res, next) {
  handler.downloadById(req.params.collectionName , req.params.id , res) ;
});

//download file by Name
app.get('/:collectionName/byname/:filename', function (req, res, next) {
  handler.downloadByName(req.params.collectionName , req.params.filename , res) ;
});

// delete file by ID
app.delete('/_keys_/:collectionName/byId/:spNumber/:id', function (req, res, next) {
  handler.deleteFileById( req.params.spNumber , req.params.collectionName , req.params.id , res) ;
});




// delete file by ID
app.post('/remove/:collectionName/byId/:id',upload.any(), function (req, res, next) {
  
  
  var data = req.body; 
  console.log("THE BODY RECEIVED : ", data);
  
  var fileIdsToDelete  = [] ;
  //get all the ids in the object posted 
  Object.keys(data).forEach((value , index)=>{
    fileIdsToDelete.push({'fileID' : data["fileID"] , "collectionName" : data["collectionName"] }); 
  })

  /**
   * Deleting a file with a specific file id from the collection where it exists
   */
  fileIdsToDelete.forEach(file => {
    handler.deleteFileById(file["collectionName"] , file["fileId"]) ;
    fileIdsToDelete.splice(0 , 1) ; // remove the object from the array 
    console.log("A file with ID :" , file["collectionName"] , "was successfully deleted", Date.now());
  });
});

// delete file by name
app.delete('/_keys_/:collectionName/byname/:filename', function (req, res, next) {
  handler.deleteFileByName(req.params.collectionName , req.params.filename , res) ;
});

// delete file by id
// app.delete('/_keys_/:collectionName/byId/:id', function (req, res, next) {
//   handler.deleteFileById(req.params.collectionName , req.params.id , res) ;
// });

// drop a collection 
app.delete('/:collectionName/_keys_', function (req, res, next) {
  handler.dropCollection(req.params.collectionName, res) ;
});

// get all file mappings 
app.get('/mappings/:skip/:offset', function (req, res, next) {
  handler.getAllFileMappings(req.params.skip , req.params.offset,res) ;
});

//dev only
app.delete('/file-collections/all' ,function (req, res, next) {
  handler.dropAllFileCollections(res) ;
});

//dev only 
app.delete('/filemappings/all' ,function (req, res, next) {
  handler.dropAllFileMappings(res) ;
});


// working 
app.get('/filemapping/:spNumber' ,function (req, res, next) {
  handler.getFileMappingsByspNumber(req.params.spNumber,res) ;
});

// working ... dev only
app.post('/award-create' ,function (req, res, next) {
  handler.insertAward({},res) ;
});

// get file mappings 
app.get('/:collectionName/:start/:end', function (req, res, next) {  
  handler.getAllFilesFromBucket(
    req.params.collectionName, req.params.start, req.params.end , res
    ) ;
});

// count all files in collection 
app.get('/count/:fileCollectioname', function(req, res, next) {
  handler.countFiles(req.params.fileCollectioname,res);
});

module.exports = app;
