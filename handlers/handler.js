// var mongo = require('mongodb');
// var test = require('assert');
// var assert = require('assert');
// var EventEmitter = require('events');
// var fs = require('fs') ;
// var Grid = require('gridfs-stream');
// const util = require('util');
// const exec = util.promisify(require('child_process').exec);



/**
 * Execute the commnd in the linux terminal 
 */
<<<<<<< HEAD
function execCommandAtTerminal() {
    async  function create() {
        const { stdout, stderr } = await exec('mkdir /tmp/cu && chmod -R 777 /tmp/cu');
        console.log('stdout:', stdout.length > 0 ? stdout : " NO MESSAGE" );
        console.log('stderr:', stderr.length > 0 ? stdout : " /tmp/cu was created successfully ");
    }fs.exists("/tmp/cu", function (condition){
      if (condition = true ) {console.log('folder already exists...')}
      else {create()}});}

// Connection URL
// var url = 'mongodb://localhost:27017';
var url = 'mongodb://localhost:27017';
var events = new EventEmitter() ;
var mongodbClient = null ; // initital client value
var db  , gfs , gfsCommendation , gfsPubblication;
=======
// process.env.NODE_ENV == process.env.NODE_ENV === "production";
process.env.NODE_ENV == process.env.NODE_ENV === "development";
process.env.MONGO_AUTH_ROLE = true; // set the enviroment to be true 

if (process.env.MONGO_AUTH_ROLE && process.env.NODE_ENV == "production") {
    authentication.call();
}

function execCommandAtTerminal() {
    async function create() {
        const {
            stdout,
            stderr
        } = await exec('mkdir /tmp/cu && chmod -R 777 /tmp/cu');
        console.log('stdout:', stdout.length > 0 ? stdout : " NO MESSAGE");
        console.log('stderr:', stderr.length > 0 ? stdout : " /tmp/cu was created successfully ");
    }
    fs.exists("/tmp/cu", function (condition) {
        if (condition = true) {
            console.log('folder already exists...')
        } else {
            create()
        }
    });
}

// Connection URL
var url = 'mongodb://mongodb:27017';
// var url = 'mongodb://localhost:27017';
var events = new EventEmitter();
var mongodbClient = null; // initital client value
var db, gfs, gfsCommendation, gfsPubblication;
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb




/**
 * Client hadler
 */
<<<<<<< HEAD
events.on('client-ready' , function(mongoDBClientReceived){
    
    // console.log("Hello");
    mongodbClient = mongoDBClientReceived ;
=======
events.on('client-ready', function (mongoDBClientReceived) {

    // console.log("Hello");
    mongodbClient = mongoDBClientReceived;
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
    db = mongodbClient.db('pgs-db'); //get the database to use 
    // db.createCollection("lasisi", function(result){
    //     console.log("Collection created");
    // });
<<<<<<< HEAD
    gfs = Grid(db, mongo); 
=======
    gfs = Grid(db, mongo);
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb

    // gfsCommendation = Grid(db, "commendation");
    // gfsPubblication = Grid(db, "publication");

    // testInsertDocument({"name": "Adeshina", "age" : 334  , "school" : "Nigeria University"});
    console.log('[+] : MongoDb Connected successfully and ready to receive connections');

    //create the temporary folder for uploading the files into the tmp/cu
    execCommandAtTerminal()

});





// Use connect method to connect to the server
<<<<<<< HEAD
mongo.connect(url, function(err, client) {
    assert.equal(null, err , "Error occured while connecting to MongoDb Server");
    console.log("Connected successfully to server");
    events.emit('client-ready' ,  client);
=======
mongo.connect(url, function (err, client) {
    assert.equal(null, err, "Error occured while connecting to MongoDb Server");
    console.log("Connected successfully to server");
    events.emit('client-ready', client);
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
});




/*******************************
 * Close the mongo db connection 
 * *****************************
 */
function closeMongoDBConnection() {
<<<<<<< HEAD
    if ( mongodbClient.closed === true) {
        return  true ;
    }else if (!mongodbClient.closed) {
        mongodbClient.close() ;
        return true ; // connection closed
=======
    if (mongodbClient.closed === true) {
        return true;
    } else if (!mongodbClient.closed) {
        mongodbClient.close();
        return true; // connection closed
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
    }
}

/*******************************************************************
 *
 * @param mongodbClient The mongodb client
 * @param port The port on which the mongodb server is running
 * @param hostName This is the mongodb server hostname to connect to
 * *****************************************************************
 */
<<<<<<< HEAD
function openMongoDBConnection (mongodbC , port , hostName) {
    if (typeof port == "number" && typeof hostName === "string" ) {
        mongodbC.open(port , hostName) ;
=======
function openMongoDBConnection(mongodbC, port, hostName) {
    if (typeof port == "number" && typeof hostName === "string") {
        mongodbC.open(port, hostName);
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
    } else {
        // logger("Please enter correct port and hostname to connect to.");
    }
}

/**
 * 
 * @param {Object} documentToinsert  the document to insert into the Db
 */
function insertOneDocument(documentToinsert) {
<<<<<<< HEAD
    mongodbClient.db('pgs-db').collection('admin').insertOne(document, function(err, response) {
        console.log(response);
    });

    return true ;
=======
    mongodbClient.db('pgs-db').collection('admin').insertOne(document, function (err, response) {
        console.log(response);
    });

    return true;
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
}


/**
 * @param {Object} document The document to insert 
 */
<<<<<<< HEAD
function insertManyDocuments(document ){
    mongodbClient.db('pgs-db').collection('admin').insertMany(document, function(err, response) {
        console.log(response);
    });
    return true ;
}

function searchDocumentByFullName (fullname) {
    mongodbClient.findOne({"fullname" : fullname}, function(err , response){
        assert.equal(null , err ,  "Error occcured while searching for the document" );
        console.log("Document found" , response);
=======
function insertManyDocuments(document) {
    mongodbClient.db('pgs-db').collection('admin').insertMany(document, function (err, response) {
        console.log(response);
    });
    return true;
}

function searchDocumentByFullName(fullname) {
    mongodbClient.findOne({
        "fullname": fullname
    }, function (err, response) {
        assert.equal(null, err, "Error occcured while searching for the document");
        console.log("Document found", response);
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
    });
}


/**
 * Update post where the fullName matches 
 * @param {*} fullName 
 * @param {*} newPostToApplyFor 
 */
<<<<<<< HEAD
function updateDocument(fullName , newPostToApplyFor) {
    mongodbClient.db('pgs-db').collection('admin').update(
        {"fullName" : fullName} , {
            $set : {
                "postAppliedFor" : newPostToApplyFor
            }
        }
    );
=======
function updateDocument(fullName, newPostToApplyFor) {
    mongodbClient.db('pgs-db').collection('admin').update({
        "fullName": fullName
    }, {
        $set: {
            "postAppliedFor": newPostToApplyFor
        }
    });
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
}

/**
 * Get all the applicants due for promotion
 */
function getAllapplicantsDueForPromotion() {
    mongodbClient.db('pgs-db').collection('due-for-promotion')
}


/**
 * 
 * @param {*} postAppliedFor The post of the applicant that applied for the post 
 */
function searchForApplicantByPost(postAppliedFor) {
    mongodbClient
<<<<<<< HEAD
    .db('pgs-db')
    .collection('applicants')
=======
        .db('pgs-db')
        .collection('applicants')
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
}

/**
 * 
 * @param {*} document The applicant Object that is due for promotion 
 */
function addApplicantDueForPromotion(document) {
    mongodbClient.db('pgs-db')
<<<<<<< HEAD
    .collection('applicant-due-for-promotion')
    .insertOne(document , function(err, response) {
        if (err) {
            console.log( "ERROR" + err) ;
        }else {
          console.log(response) ;  
        } 
    });
=======
        .collection('applicant-due-for-promotion')
        .insertOne(document, function (err, response) {
            if (err) {
                console.log("ERROR" + err);
            } else {
                console.log(response);
            }
        });
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
}

/**
 * 
 * @param {*} collectionName 
 * @param {*} filename 
 * @param {*} fileId 
 */
<<<<<<< HEAD
var fileHelper = (collectionName ,filename , fileId )=>{
    const nextMappings = {collectionName : null, fileName : null , fileId : null} ;
    nextMappings.collectionName = collectionName ;
    nextMappings.fileName = filename ;
    nextMappings.fileId = fileId ;
    return nextMappings ;
};

function F(){
    this.collectionName  = null ;
    this.fileName  = null ;
    this.fileId  = null ;
}
var g = new F() ;



events.on('ready' , (collectionName ,filename , fileId )=>{
        
    g.collectionName= collectionName ;
    g.fileId = fileId ;
    g.fileName= filename ;

    //return nextMappings ;
    console.log("------------------",g.collectionName);
=======
var fileHelper = (collectionName, filename, fileId) => {
    const nextMappings = {
        collectionName: null,
        fileName: null,
        fileId: null
    };
    nextMappings.collectionName = collectionName;
    nextMappings.fileName = filename;
    nextMappings.fileId = fileId;
    return nextMappings;
};

function F() {
    this.collectionName = null;
    this.fileName = null;
    this.fileId = null;
}
var g = new F();



events.on('ready', (collectionName, filename, fileId) => {

    g.collectionName = collectionName;
    g.fileId = fileId;
    g.fileName = filename;

    //return nextMappings ;
    console.log("------------------", g.collectionName);
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
});

/**
 * 
 * @param {*} filepath 
 * @param {*} filename 
 * @param {*} response 
<<<<<<< HEAD
 *///working
async function upload(collectionName , filepath , filename, username ) {


    var fileName = filename, fileId =  new mongo.ObjectID();
    var fileGenId  = fileId.toHexString();
    var writestream = Grid(db , mongo).createWriteStream({
        filename: fileName,
        _id:  fileGenId, root : collectionName.trim()
    });

    
    fs.createReadStream(filepath).pipe(writestream).on('finish', function(err){
        console.log("[+] Finish uploading file");
        console.log("File Upload was successfull!" , filename);
=======
 */ //working
async function upload(collectionName, filepath, filename, username) {


    var fileName = filename,
        fileId = new mongo.ObjectID();
    var fileGenId = fileId.toHexString();
    var writestream = Grid(db, mongo).createWriteStream({
        filename: fileName,
        _id: fileGenId,
        root: collectionName.trim()
    });


    fs.createReadStream(filepath).pipe(writestream).on('finish', function (err) {
        console.log("[+] Finish uploading file");
        console.log("File Upload was successfull!", filename);
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        console.log(filepath);
        fs.unlinkSync(filepath);
        console.log(fileName + " => was unlinked successfully");
        // map the file uploaded with a name and an id pushed into an array
        // nextMappings.fileId = fi ;
        // nextMappings.fileName = fileName ;
        // nextMappings.collectionName = collectionName ;

        // filesMappings.push(nextMappings);
        // console.log( "This is the file mappings " , filesMappings);
        // console.log( "This is the file mappings " , nextMappings);
<<<<<<< HEAD
        events.emit("ready" , collectionName , fileName , fileId );
        /**
         * Saving the file mapping 
         */
        insertMapping(
            {"owner" : username.trim() , "fileId" : fileGenId ,
            "collectionName" : collectionName , "fileName": fileName ,
            "dateUploaded" : Date
        });
    }).on('error' , function(err){
        console.log("ERROR ", error);
    });

    console.log("---------SCOPE OUT---------",g.collectionName);
=======
        events.emit("ready", collectionName, fileName, fileId);
        /**
         * Saving the file mapping 
         */
        insertMapping({
            "owner": username.trim(),
            "fileId": fileGenId,
            "collectionName": collectionName,
            "fileName": fileName,
            "dateUploaded": Date
        });
    }).on('error', function (err) {
        console.log("ERROR ", error);
    });

    console.log("---------SCOPE OUT---------", g.collectionName);
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
}

/**
 * 
 * @param {*} filename 
 * @param {*} response 
 */ //working
<<<<<<< HEAD
function downloadByName(collectionName ,filename , response) {
    console.log(collectionName)
    Grid(db , mongo).exist({
        filename: filename , root: collectionName.trim()
    } , function(err , bool ){
        if (err) {
            response.status(500).send(err);
        }else if(bool){
            response.set('Content-Type', "multipart/form-data");
            response.set('Content-Disposition', 'attachment; filename="' + filename + '"');
            var readstream =  Grid(db , mongo).createReadStream({
              filename: filename,
              root: collectionName.trim()
            });
            readstream.on("error", function(err) { 
                response.end();
            });
            readstream.pipe(response);
        }else {
=======
function downloadByName(collectionName, filename, response) {
    console.log(collectionName)
    Grid(db, mongo).exist({
        filename: filename,
        root: collectionName.trim()
    }, function (err, bool) {
        if (err) {
            response.status(500).send(err);
        } else if (bool) {
            response.set('Content-Type', "multipart/form-data");
            response.set('Content-Disposition', 'attachment; filename="' + filename + '"');
            var readstream = Grid(db, mongo).createReadStream({
                filename: filename,
                root: collectionName.trim()
            });
            readstream.on("error", function (err) {
                response.end();
            });
            readstream.pipe(response);
        } else {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
            response.status(404).send("File does not exist");
        }
    });
}


/**
 * 
 * @param {*} fileId 
 * @param {*} response 
 */ // working
<<<<<<< HEAD
function downloadById(collectionName , fileId , response) {
    // streaming to gridfs
    Grid(db , mongo).exist({
        _id: fileId , root : collectionName.trim()
    } , function(err , bool ){
        if (err) {
            response.status(500).send(err);
        }else if(bool){
            response.set('Content-Type', "multipart/form-data");
            response.set('Content-Disposition', 'attachment; filename="' + fileId + '"');
            var readstream =  Grid(db , mongo).createReadStream({
              _id: fileId,
              root: collectionName.trim()
            });
            readstream.on("error", function(err) { 
                response.end();
            });
            readstream.pipe(response);
        }else {
=======
function downloadById(collectionName, fileId, response) {
    // streaming to gridfs
    Grid(db, mongo).exist({
        _id: fileId,
        root: collectionName.trim()
    }, function (err, bool) {
        if (err) {
            response.status(500).send(err);
        } else if (bool) {
            response.set('Content-Type', "multipart/form-data");
            response.set('Content-Disposition', 'attachment; filename="' + fileId + '"');
            var readstream = Grid(db, mongo).createReadStream({
                _id: fileId,
                root: collectionName.trim()
            });
            readstream.on("error", function (err) {
                response.end();
            });
            readstream.pipe(response);
        } else {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
            response.status(404).send("File does not exist");
        }
    });
}

/**
 * 
 * @param {*} collectionName 
 * @param {*} fileId 
 * @param {*} response 
 */ //working
<<<<<<< HEAD
function fileExist(collectionName,fileId , response ) {
    Grid(db , mongo).exist({
            _id: fileId, root : collectionName.trim()
        } , function(err , bool ){
            if (err) {
                response.status(500).send(err);
            }else {
                response.status(400).send(bool) ;
            }
        });
=======
function fileExist(collectionName, fileId, response) {
    Grid(db, mongo).exist({
        _id: fileId,
        root: collectionName.trim()
    }, function (err, bool) {
        if (err) {
            response.status(500).send(err);
        } else {
            response.status(400).send(bool);
        }
    });
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
}





/**
 * 
 * @param {*} collectionName 
 * @param {*} response 
 */ //working 
<<<<<<< HEAD
function dropAllFilesInCollection(collectionName , response ) {
    Grid(db , mongo).collection(collectionName).count({}).then(function(number) {
        if (number > 0 ){
            Grid(db , mongo).collection(collectionName).deleteMany({}).then(function(val){
                console.log("Done");
                response.send("All files deleted!");
           } , function(reason) {
               response.send(reason);
           });
        }else{
            response.send("Empty collection");
        }
    }, function(reason) {
=======
function dropAllFilesInCollection(collectionName, response) {
    Grid(db, mongo).collection(collectionName).count({}).then(function (number) {
        if (number > 0) {
            Grid(db, mongo).collection(collectionName).deleteMany({}).then(function (val) {
                console.log("Done");
                response.send("All files deleted!");
            }, function (reason) {
                response.send(reason);
            });
        } else {
            response.send("Empty collection");
        }
    }, function (reason) {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        console.log(reason);
        response.send(reason);
    });
}


/**
 * 
 * @param {*} collectionName 
 * @param {*} response 
<<<<<<< HEAD
 *///working
function dropCollection(collectionName , response ) {
    
    Grid(db , mongo).collection(collectionName).drop().then(function(val){
        console.log("Done");
        if ( response != null ){
            response.send({'response': "Collection was dropped successfully"});
        }else {
            console.log('Collection ', collectionName , ' was dropped successfully');
        }
   } , function(reason) {
    if ( response != null ){   
        response.send({'error': reason});
    }
    /*****Delete all the collection  in the pgs-db that stores the files uploaded */
    else {
        if (reason.errmsg == 'ns not found'){ // do nothing 
        }else {
            console.log(reason);
        }
    }
   });
} 
=======
 */ //working
function dropCollection(collectionName, response) {

    Grid(db, mongo).collection(collectionName).drop().then(function (val) {
        console.log("Done");
        if (response != null) {
            response.send({
                'response': "Collection was dropped successfully"
            });
        } else {
            console.log('Collection ', collectionName, ' was dropped successfully');
        }
    }, function (reason) {
        if (response != null) {
            response.send({
                'error': reason
            });
        }
        /*****Delete all the collection  in the pgs-db that stores the files uploaded */
        else {
            if (reason.errmsg == 'ns not found') { // do nothing 
            } else {
                console.log(reason);
            }
        }
    });
}
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb

/**
 * 
 * @param {*} collectionName 
 * @param {*} fileName 
 * @param {*} response 
 */
<<<<<<< HEAD
function deleteFileByName(collectionName , fileName,  response ) {
    Grid(db , mongo).exist({
        filename: fileName, root : collectionName.trim()
    } , function(err , bool ){
        if (err) {
            response.status(500).send(err);
        }else if(bool){
            Grid(db , mongo).collection(collectionName+".files").deleteOne({"filename" : fileName.trim() }).then(((value)=>{
                console.log("FILES DELETED SUCCESSFULLY!");
            }),function(reason){
                console.log("RejectPromiseLikeMessage" , reason) ;
            });
            Grid(db , mongo).collection(collectionName+".chunks").deleteOne({"filename" : fileName.trim() }).then(((value)=>{
                console.log("CHUNKS DELETED SUCCESSFULLY!");
            }),function(reason){
                console.log("RejectPromiseLikeMessage" , reason) ;
            });
            response.send("Files and Chunks deleted successfully!");
        }else {
=======
function deleteFileByName(collectionName, fileName, response) {
    Grid(db, mongo).exist({
        filename: fileName,
        root: collectionName.trim()
    }, function (err, bool) {
        if (err) {
            response.status(500).send(err);
        } else if (bool) {
            Grid(db, mongo).collection(collectionName + ".files").deleteOne({
                "filename": fileName.trim()
            }).then(((value) => {
                console.log("FILES DELETED SUCCESSFULLY!");
            }), function (reason) {
                console.log("RejectPromiseLikeMessage", reason);
            });
            Grid(db, mongo).collection(collectionName + ".chunks").deleteOne({
                "filename": fileName.trim()
            }).then(((value) => {
                console.log("CHUNKS DELETED SUCCESSFULLY!");
            }), function (reason) {
                console.log("RejectPromiseLikeMessage", reason);
            });
            response.send("Files and Chunks deleted successfully!");
        } else {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
            response.send("No file to delete!");
        }
    });
}


/**
 * @param {*} collectionName 
 * @param {*} fileId 
 * @param {*} response 
 */
<<<<<<< HEAD
function deleteFileById(collectionName , fileId,  response ) {
    console.log("------------------>"+collectionName , fileId )
    Grid(db , mongo).exist({
        _id: fileId, root: collectionName.trim()
    } , function(err , bool ){
        if (err) {
            response.status(500).send(err);
        }else if(bool){
            Grid(db , mongo).remove({_id : fileId }, function (err) {
                if (err) return response.send(err);
               else {
                   response.send("Files and Chunks deleted successfully!");
               }
        });
            Grid(db , mongo).collection(collectionName).deleteOne({ "_id" : mongo.ObjectId(fileId) }).then(((value)=>{
                console.log("FILES DELETED SUCCESSFULLY!");
                //response.send("Files and Chunks deleted successfully!");
            }),function(reason){
                console.log("RejectPromiseLikeMessage" , reason) ;
            });
            Grid(db , mongo).collection(collectionName).deleteOne({ "_id" : mongo.ObjectId(fileId) }).then(((value)=>{
                console.log("CHUNKS DELETED SUCCESSFULLY!");
                //response.send("Files and Chunks deleted successfully!");
            }),function(reason){
                console.log("RejectPromiseLikeMessage" , reason) ;
            });
            response.send("Files and Chunks deleted successfully!");
        }else {
=======
function deleteFileById(collectionName, fileId, response) {
    console.log("------------------>" + collectionName, fileId)
    Grid(db, mongo).exist({
        _id: fileId,
        root: collectionName.trim()
    }, function (err, bool) {
        if (err) {
            response.status(500).send(err);
        } else if (bool) {
            Grid(db, mongo).remove({
                _id: fileId
            }, function (err) {
                if (err) return response.send(err);
                else {
                    response.send("Files and Chunks deleted successfully!");
                }
            });
            Grid(db, mongo).collection(collectionName).deleteOne({
                "_id": mongo.ObjectId(fileId)
            }).then(((value) => {
                console.log("FILES DELETED SUCCESSFULLY!");
                //response.send("Files and Chunks deleted successfully!");
            }), function (reason) {
                console.log("RejectPromiseLikeMessage", reason);
            });
            Grid(db, mongo).collection(collectionName).deleteOne({
                "_id": mongo.ObjectId(fileId)
            }).then(((value) => {
                console.log("CHUNKS DELETED SUCCESSFULLY!");
                //response.send("Files and Chunks deleted successfully!");
            }), function (reason) {
                console.log("RejectPromiseLikeMessage", reason);
            });
            response.send("Files and Chunks deleted successfully!");
        } else {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
            response.send("No file to delete!");
        }
    });
}


/**
 * 
 * @param {*} collectionName 
 * @param {*} skip 
 * @param {*} offset 
 * @param {*} response 
 */ //working
<<<<<<< HEAD
function getAllFilesFromBucket(collectionName ,skip, offset, response) {
    Grid(db , mongo).collection(collectionName).find({}).skip(parseInt(skip)).limit(parseInt(offset)).toArray(function(err,result){
=======
function getAllFilesFromBucket(collectionName, skip, offset, response) {
    Grid(db, mongo).collection(collectionName).find({}).skip(parseInt(skip)).limit(parseInt(offset)).toArray(function (err, result) {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        if (err) response.send(err);
        else response.send(result);
    });
}

/**
 * 
 * @param {*} bucketName 
 * @param {*} response 
<<<<<<< HEAD
 *///working 
 function renameFile(collectionName , response) {
    Grid(db , mongo).collection(collectionName).find({}).toArray(function(err,result){
=======
 */ //working 
function renameFile(collectionName, response) {
    Grid(db, mongo).collection(collectionName).find({}).toArray(function (err, result) {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        if (err) response.send(err);
        else response.send(result);
    });
}




/****************************************************************************************************************
 * The Applicant handlers goes here
 ****************************************************************************************************************/
/**
 * 
 * @param {Object} document The document is in JSON format 
 */ //working 
<<<<<<< HEAD
function insertApplicant(username , document, res) {

    insertUser(document.loginCred , function(){
        db.collection("fileMappings").find({'owner' : username.trim() }).toArray(function(err,result){
=======
function insertApplicant(username, document, res) {

    insertUser(document.loginCred, function () {
        db.collection("fileMappings").find({
            'owner': username.trim()
        }).toArray(function (err, result) {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
            if (err) response.send(err);
            if (err) {
                res.send(err);
                console.log("ERROR : ", err);
<<<<<<< HEAD
            }
            else {
                console.log('FILE MAPPING FOR OWNER',result);
                document.fileMappings = result ; // append all the file mappings to the applicant row
                db.collection("applicants").insertOne(document,function(err, response) {
                    if (err) res.send(err);
                    else {
                    console.log("Document insert successfully!") ;
                    db.collection("fileMappings").deleteOne({ "owner" : username.trim() }).then(((value)=>{
                        console.log("File mappings of ", username , " was unlinked from the fileMappings collection");
                        // response.status(200).send("Applicant with _id :"+ applicantId +" deleted successfully!");
                    }),function(reason){
                        console.log("File mappings of ", username , " failed to unlink from the fileMappings collection" , reason);
                        // response.status(500).send("Applicant with _id: "+applicantId , "failed to delete");
                    });
                    res.status(200).send("Registration was successfull!");
                }
            });
          }
        });
    }) ;
}

 
/**
 * 
 * @param {Object} document The document is in JSON format 
 */ 
function insertApplicantDeuForPromotion(document , res) {
    db.collection("applicants").insertOne(document,function(err, response) {
        if (err) res.status(500).send(err);
        else {
        console.log("Document insert successfully!", response) ;
        res.status(200).send("Applicant : ",document.fullname ," , was successfully registered for promotion!"); 
=======
            } else {
                console.log('FILE MAPPING FOR OWNER', result);
                document.fileMappings = result; // append all the file mappings to the applicant row
                db.collection("applicants").insertOne(document, function (err, response) {
                    if (err) res.send(err);
                    else {
                        console.log("Document insert successfully!");
                        db.collection("fileMappings").deleteOne({
                            "owner": username.trim()
                        }).then(((value) => {
                            console.log("File mappings of ", username, " was unlinked from the fileMappings collection");
                            // response.status(200).send("Applicant with _id :"+ applicantId +" deleted successfully!");
                        }), function (reason) {
                            console.log("File mappings of ", username, " failed to unlink from the fileMappings collection", reason);
                            // response.status(500).send("Applicant with _id: "+applicantId , "failed to delete");
                        });
                        res.status(200).send("Registration was successfull!");
                    }
                });
            }
        });
    });
}


/**
 * 
 * @param {Object} document The document is in JSON format 
 */
function insertApplicantDeuForPromotion(document, res) {
    db.collection("applicants").insertOne(document, function (err, response) {
        if (err) res.status(500).send(err);
        else {
            console.log("Document insert successfully!", response);
            res.status(200).send("Applicant : ", document.fullname, " , was successfully registered for promotion!");
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        }
    });
}


/**
 * 
 * @param {String} applicantId The applicant id to be deleted from the collection
 */
<<<<<<< HEAD
function deleteApplicantById(applicantId , response) {
    db.collection("applicants").deleteOne({ "_id" : mongo.ObjectId(applicantId) }).then(((value)=>{
        console.log("Applicant with _id "+applicantId , "was deleted successfully " + new Date());
        response.status(200).send("Applicant with _id :"+ applicantId +" deleted successfully!");
    }),function(reason){
        console.log("Applicant with _id: "+applicantId , "failed to delete" + new Date());
        response.status(500).send("Applicant with _id: "+applicantId , "failed to delete");
=======
function deleteApplicantById(applicantId, response) {
    db.collection("applicants").deleteOne({
        "_id": mongo.ObjectId(applicantId)
    }).then(((value) => {
        console.log("Applicant with _id " + applicantId, "was deleted successfully " + new Date());
        response.status(200).send("Applicant with _id :" + applicantId + " deleted successfully!");
    }), function (reason) {
        console.log("Applicant with _id: " + applicantId, "failed to delete" + new Date());
        response.status(500).send("Applicant with _id: " + applicantId, "failed to delete");
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
    });
}


<<<<<<< HEAD
function deleteApplicantByUsername(username , response) {

    db.collection("users").findOne({"username" : username.trim()},function(err,result){
        console.log("User Checking Result :" , result);
        if (err) response.send(err);
        else {
            if (result == null ) {
                response.status(200).send({'message' :"User with username " + username + " does not exist"} );
            }else {
                    db.collection("users").deleteOne({'username' : username.trim()} , function(err,result){
                            if (err) response.send(err);
                            else {
                                db.collection("applicants").deleteOne({ "loginCred.username" : username.trim() } ,function(err,result){
                                    // console.log(result)
                                    if (err) response.send(err);
                                    else {
                                        response.status(200).send({'message' :"User with username " + username + " deleted successfully"} );
                                    }
=======
function deleteApplicantByUsername(username, response) {

    db.collection("users").findOne({
        "username": username.trim()
    }, function (err, result) {
        console.log("User Checking Result :", result);
        if (err) response.send(err);
        else {
            if (result == null) {
                response.status(200).send({
                    'message': "User with username " + username + " does not exist"
                });
            } else {
                db.collection("users").deleteOne({
                    'username': username.trim()
                }, function (err, result) {
                    if (err) response.send(err);
                    else {
                        db.collection("applicants").deleteOne({
                            "loginCred.username": username.trim()
                        }, function (err, result) {
                            // console.log(result)
                            if (err) response.send(err);
                            else {
                                response.status(200).send({
                                    'message': "User with username " + username + " deleted successfully"
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
                                });
                            }
                        });
                    }
<<<<<<< HEAD
            }
        });
    }
=======
                });
            }
        }
    });
}
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb



/**
 * 
 * @param {String} applicantName The applicant name to be deleted from the collection
 */
function deleteApplicantByFullName(applicantName, response) {
<<<<<<< HEAD
    db.collection("applicants").deleteOne({"personalInformation.nameInFull" : applicantName.trim() }).then(((value)=>{
        console.log("Applicant with  "+applicantName , "was deleted successfully " + new Date());
        response.status(200).send("Applicant with fullname :" + applicantName + " deleted successfully!");
    }),function(reason){
        console.log("Applicant with fullname: " + applicantName , "failed to delete" + new Date());
        response.status(500).send("Applicant with _id: "+applicantName , "failed to delete");
=======
    db.collection("applicants").deleteOne({
        "personalInformation.nameInFull": applicantName.trim()
    }).then(((value) => {
        console.log("Applicant with  " + applicantName, "was deleted successfully " + new Date());
        response.status(200).send("Applicant with fullname :" + applicantName + " deleted successfully!");
    }), function (reason) {
        console.log("Applicant with fullname: " + applicantName, "failed to delete" + new Date());
        response.status(500).send("Applicant with _id: " + applicantName, "failed to delete");
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
    });
}


/**
 * 
 * @param {Object} document The applicant ID to search for in the applicants collection
 */ // working 
function getApplicantById(applicantId, response) {
<<<<<<< HEAD
    db.collection("applicants").findOne({"_id":  mongo.ObjectId(applicantId)},function(err,result){
=======
    db.collection("applicants").findOne({
        "_id": mongo.ObjectId(applicantId)
    }, function (err, result) {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        if (err) response.send(err);
        else response.send(result);
    });
}


/**
 * 
 * @param {Object} document The applicant name to search for in the applicants collection
 */ // working 
function getApplicantByUsername(applicantName, response) {
<<<<<<< HEAD
    db.collection("applicants").findOne({ "loginCred.username" : applicantName.trim() } ,function(err,result){
=======
    db.collection("applicants").findOne({
        "loginCred.username": applicantName.trim()
    }, function (err, result) {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        // console.log(result)
        if (err) response.send(err);
        else response.send(result);
    });
}


/**
 * 
 * @param {Object} document The applicant name to search for in the applicants collection
 */ // working 
<<<<<<< HEAD
 function getApplicantByName(applicantName, response) {
    db.collection("applicants").findOne({ "personalInformation.nameInFull" : applicantName.trim() },function(err,result){
=======
function getApplicantByName(applicantName, response) {
    db.collection("applicants").findOne({
        "personalInformation.nameInFull": applicantName.trim()
    }, function (err, result) {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        if (err) response.send(err);
        else response.send(result);
    });
}



/**
 * 
 * @param {*} bucketName 
 * @param {*} response 
<<<<<<< HEAD
 *///working 
 function getApplicants(response ,skip, offset) {
    db.collection("applicants").find({}).skip(parseInt(skip)).limit(parseInt(offset)).toArray(function(err,result){
=======
 */ //working 
function getApplicants(response, skip, offset) {
    db.collection("applicants").find({}).skip(parseInt(skip)).limit(parseInt(offset)).toArray(function (err, result) {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        if (err) response.send(err);
        else response.send(result);
    });
}






/**
 * {owner : 'Adeshina' , 'mappings' : [ {fileId : '' ,  collectionName : ''} ] }
 * @param {Object} document The document is in JSON format 
 */ //working 
<<<<<<< HEAD
 function insertMapping(document, res) {
    db.collection("fileMappings").insertOne(document,function(err, result) {
        if (err) res.status(500).send(err);
        else {
        console.log("File mapping was done successfully", document) ;
        // res.status(200).send("Registration was successfull!"); 
=======
function insertMapping(document, res) {
    db.collection("fileMappings").insertOne(document, function (err, result) {
        if (err) res.status(500).send(err);
        else {
            console.log("File mapping was done successfully", document);
            // res.status(200).send("Registration was successfull!"); 
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        }
    });
}


/**
 * 
 * @param {*} collectionName 
 * @param {*} response 
<<<<<<< HEAD
 *///working
 function getAllFileMappings(skip,offset,response) {
    db.collection("fileMappings").find({}).skip(parseInt(skip)).limit(parseInt(offset)).toArray(function(err,result){
=======
 */ //working
function getAllFileMappings(skip, offset, response) {
    db.collection("fileMappings").find({}).skip(parseInt(skip)).limit(parseInt(offset)).toArray(function (err, result) {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        if (err) response.send(err);
        else response.send(result);
    });
}


/**
 * 
 * @param {*} username 
 * @param {*} response 
 */
<<<<<<< HEAD
 function getFileMappingsByUsername(username,response) {
    db.collection("fileMappings").find({"owner" : username.trim()}).toArray(function(err, result) {
        if (err) { res.send(err);}
        else {console.log("File mapping was done successfully", result) ; 
        response.status(200).send(result); 
=======
function getFileMappingsByUsername(username, response) {
    db.collection("fileMappings").find({
        "owner": username.trim()
    }).toArray(function (err, result) {
        if (err) {
            res.send(err);
        } else {
            console.log("File mapping was done successfully", result);
            response.status(200).send(result);
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        }
    });
}



/**
 * 
 * @param {*} document Test document
 * @param {*} response 
 */
<<<<<<< HEAD
 function insertUser(document , callback) {
    db.collection("users").insertOne(document , function(err,result){
        console.log("User Checking Result :" , document);
        if (err) response.send(err);
        else {
            console.log('The user was added successfully!');
            callback() ; //call the callback function
=======
function insertUser(document, callback) {
    db.collection("users").insertOne(document, function (err, result) {
        console.log("User Checking Result :", document);
        if (err) response.send(err);
        else {
            console.log('The user was added successfully!');
            callback(); //call the callback function
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        }
    });
}






/**
 * 
 * @param {*} collectionName 
 * @param {*} response 
<<<<<<< HEAD
 *///working
 function checkIfApplicantUsernameExist(username , response) {
    db.collection("users").findOne({"username" : username.trim()},function(err,result){
        console.log("User Checking Result :" , result);
        if (err) response.send(err);
        else {
            if (result == null ) {
                response.send({"exists" : false}); // login credendtials are invalid 
            }else {
                response.send({"exists" : true }); // login credendtials are valid 
=======
 */ //working
function checkIfApplicantUsernameExist(username, response) {
    db.collection("users").findOne({
        "username": username.trim()
    }, function (err, result) {
        console.log("User Checking Result :", result);
        if (err) response.send(err);
        else {
            if (result == null) {
                response.send({
                    "exists": false
                }); // login credendtials are invalid 
            } else {
                response.send({
                    "exists": true
                }); // login credendtials are valid 
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
            }
        }
    });
}



/**
 * 
 * @param {*} collectionName 
 * @param {*} response 
<<<<<<< HEAD
 *///working
 function checkIfAdminUsernameExist(username  , response) {
    db.collection("admins").findOne( {"username" : username.trim() },function(err,result){
        if (err) response.send(err);
        else {
            if (result == [] ) {
                response.send({"exists" : false }); // login credendtials are invalid 
            }else {
                response.send({"exists" : true }); // login credendtials are valid 
=======
 */ //working
function checkIfAdminUsernameExist(username, response) {
    db.collection("admins").findOne({
        "username": username.trim()
    }, function (err, result) {
        if (err) response.send(err);
        else {
            if (result == []) {
                response.send({
                    "exists": false
                }); // login credendtials are invalid 
            } else {
                response.send({
                    "exists": true
                }); // login credendtials are valid 
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
            }
        }
    });
}


/**
 * 
 * @param {*} start 
 * @param {*} end 
 * @param {*} response 
 */
<<<<<<< HEAD
function getUsers(start , end ,response) {
    db.collection("users").find({}).skip(parseInt(start)).limit(parseInt(end)).toArray(function(err,result){
=======
function getUsers(start, end, response) {
    db.collection("users").find({}).skip(parseInt(start)).limit(parseInt(end)).toArray(function (err, result) {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        if (err) response.send(err);
        else response.send(result);
    });
}


/**
 * 
 * @param {*} collectionName 
 * @param {*} response 
<<<<<<< HEAD
 *///working
 function verifyUserLoggingCredentials( username , password, response) {
     console.log('GRANTING USER' , 'USER :' , username , 'PASSWORD :' , password ) ;

    db.collection("users").findOne({"username" : username.trim() , "password" : password.trim()},function(err,result){
        if (err) response.send(err);
        else {
            console.log('GRANT CHECK ', result);
            if (result == null ) {
                response.send({"valid" : false }); // login credendtials are invalid 
            }else {
                response.send({"valid" : true }); // login credendtials are valid 
=======
 */ //working
function verifyUserLoggingCredentials(username, password, response) {
    console.log('GRANTING USER', 'USER :', username, 'PASSWORD :', password);

    db.collection("users").findOne({
        "username": username.trim(),
        "password": password.trim()
    }, function (err, result) {
        if (err) response.send(err);
        else {
            console.log('GRANT CHECK ', result);
            if (result == null) {
                response.send({
                    "valid": false
                }); // login credendtials are invalid 
            } else {
                response.send({
                    "valid": true
                }); // login credendtials are valid 
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
            }
        }
    });
}


// dev 
/**
 * 
 * @param {*} response 
 */
<<<<<<< HEAD
function dropAllFileCollections(response){
    var fileCollections=  [
        'prizes', 'honours' , 'internal-recognitons', 'national-recognitions',
        'educational-certificates', 'national-and-professional-qaulifications',
        'special-assignemts', 'publications','commendations','extra-curricula-activities','awards'
    ];
    fileCollections.forEach(collectionName => {
        dropCollection(collectionName,null);
    });

    //  drop all the file mappings 
    db.collection('fileMappings').drop().then(function(val){
        console.log('ALL FILE MAPPINGS WERE DROPPED SUCCESSFULLY ');
    }, function(reason){
        console.log('ERROR : ', reason);
    });
    if (response == null ){
        console.log('All File Collection Dropped');
    }else {
        response.send({'message' : 'All file collections were deleted successfully'});
=======
function dropAllFileCollections(response) {
    var fileCollections = [
        'prizes', 'honours', 'internal-recognitons', 'national-recognitions',
        'educational-certificates', 'national-and-professional-qaulifications',
        'special-assignemts', 'publications', 'commendations', 'extra-curricula-activities', 'awards'
    ];
    fileCollections.forEach(collectionName => {
        dropCollection(collectionName, null);
    });

    //  drop all the file mappings 
    db.collection('fileMappings').drop().then(function (val) {
        console.log('ALL FILE MAPPINGS WERE DROPPED SUCCESSFULLY ');
    }, function (reason) {
        console.log('ERROR : ', reason);
    });
    if (response == null) {
        console.log('All File Collection Dropped');
    } else {
        response.send({
            'message': 'All file collections were deleted successfully'
        });
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
    }
}


/**
 * 
 * @param {*} username The admin username
 * @param {*} password The admin passowrd 
 * @param {*} response The response the server will send to the admin 
 */
<<<<<<< HEAD
 function verifyAdminLogiCredentials( username , password, response) {
    db.collection("admins").findOne({"username" : username.trim(), "password":password.trim()},function(err,result){
        console.log('ADMIN GRANT REQUEST ', result);
        if (err) response.send(err);
        else {
            if (result == null ) {
                response.send({"valid" : false }); // login credendtials are invalid 
            }else {
                response.send({"valid" : true }); // login credendtials are valid 
=======
function verifyAdminLogiCredentials(username, password, response) {
    db.collection("admins").findOne({
        "username": username.trim(),
        "password": password.trim()
    }, function (err, result) {
        console.log('ADMIN GRANT REQUEST ', result);
        if (err) response.send(err);
        else {
            if (result == null) {
                response.send({
                    "valid": false
                }); // login credendtials are invalid 
            } else {
                response.send({
                    "valid": true
                }); // login credendtials are valid 
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
            }
        }
    });
}


/** */
function deleteAdmin(username, response) {
<<<<<<< HEAD
    db.collection("admins").findOne({"username" : username.trim()},function(err,result){
        console.log("User Checking Result :" , result);
        if (err) response.send(err);
        else {
            if (result == null ) {
                response.status(200).send({'message' :"Admin with username " + username + " does not exist"} );
            }else {
                db.collection("admins").deleteOne({ "username" : username.trim() }).then(((value)=>{
                    console.log("Admin with  "+username , "was deleted successfully " + new Date());
                    response.status(200).send({'message' :"Admin with username " + username + " deleted successfully!"} );
                }),function(reason){
                    console.log("Admin with username: " + username , "failed to delete" + new Date());
                    response.status(500).send({'message' :"Admin with username " + username + " failed delete"});
=======
    db.collection("admins").findOne({
        "username": username.trim()
    }, function (err, result) {
        console.log("User Checking Result :", result);
        if (err) response.send(err);
        else {
            if (result == null) {
                response.status(200).send({
                    'message': "Admin with username " + username + " does not exist"
                });
            } else {
                db.collection("admins").deleteOne({
                    "username": username.trim()
                }).then(((value) => {
                    console.log("Admin with  " + username, "was deleted successfully " + new Date());
                    response.status(200).send({
                        'message': "Admin with username " + username + " deleted successfully!"
                    });
                }), function (reason) {
                    console.log("Admin with username: " + username, "failed to delete" + new Date());
                    response.status(500).send({
                        'message': "Admin with username " + username + " failed delete"
                    });
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
                });
            }
        }
    });
}


/**
 * 
 * @param {*} username 
 * @param {*} response 
 */
function getAllAdmins(response) {
<<<<<<< HEAD
    db.collection("admins").find({}).toArray(function(err, result) {
        if (err) { res.send(err);}
        else {console.log("All admin were returned succssfully", result) ; 
        response.status(200).send(result); 
=======
    db.collection("admins").find({}).toArray(function (err, result) {
        if (err) {
            res.send(err);
        } else {
            console.log("All admin were returned succssfully", result);
            response.status(200).send(result);
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        }
    });
}

/**
 * 
 * @param {*} collectionName 
 * @param {*} response 
 */
<<<<<<< HEAD
function countFiles(collectionName , response ){
    console.log('Counting File');
    db.collection(collectionName).countDocuments({},function(err, result) {
        if (err) { res.send(err);}
        else {console.log("FILES WERE COUNTED ------> ", result) ; 
        response.send({'count' : result } ); 
=======
function countFiles(collectionName, response) {
    console.log('Counting File');
    db.collection(collectionName).countDocuments({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            console.log("FILES WERE COUNTED ------> ", result);
            response.send({
                'count': result
            });
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        }
    });
}




/**
 * 
 * @param {*} collectionName 
 * @param {*} response 
 */
<<<<<<< HEAD
function countUsers(response ){
    db.collection('users').count({},function(err, result) {
        if (err) { res.send(err);}
        else {console.log("USERS WERE COUNTED ------> ", result) ; 
        response.send({'count' : result } ); 
=======
function countUsers(response) {
    db.collection('users').count({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            console.log("USERS WERE COUNTED ------> ", result);
            response.send({
                'count': result
            });
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        }
    });
}


// /**
//  * 
//  * @param {*} response 
//  */
// function f(response){
// //     // db.collection('users').count({},function(err, result) {
// //     //     if (err) { res.send(err);}
// //     //     else {console.log("USERS WERE COUNTED ------> ", result) ; 
// //     //     response.send({'count' : result } ); 
// //     //     }
// //     // });
// }

<<<<<<< HEAD
 
=======

>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb

/**
 * 
 * @param {*} document  {'username': string , 'password' : string , 'role' : super-admin | admin }
 * @param {*} response 
 */
<<<<<<< HEAD
function insertAdmin(document,response) {
    db.collection("admins").insertOne(document , function(err,result){
        console.log("User Checking Result :" , document);
        if (err) response.send(err);
        else {
            console.log('New Admin was added successfully!');
            response.status(200).send(result);         }
=======
function insertAdmin(document, response) {
    db.collection("admins").insertOne(document, function (err, result) {
        console.log("User Checking Result :", document);
        if (err) response.send(err);
        else {
            console.log('New Admin was added successfully!');
            response.status(200).send(result);
        }
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
    });
}








//////////////////////////////////???Testig handlers
/**
 * 
 * @param {*} bucketName 
 * @param {*} response 
<<<<<<< HEAD
 *///working 
 function dropApplicantCollection(response) {
    db.collection('users').drop().then(function(val){
        db.collection('applicants').drop().then(function(val){
            console.log('All Applicants where dropped successfully');
            dropAllFileCollections(null);
            dropAllFileMappings(null);
            response.send({'message': 'All applicants dropped successfully'});
        }, function(reason){
            console.log('ERROR : ', reason);
        });
    }, function(reason){
=======
 */ //working 
function dropApplicantCollection(response) {
    db.collection('users').drop().then(function (val) {
        db.collection('applicants').drop().then(function (val) {
            console.log('All Applicants where dropped successfully');
            dropAllFileCollections(null);
            dropAllFileMappings(null);
            response.send({
                'message': 'All applicants dropped successfully'
            });
        }, function (reason) {
            console.log('ERROR : ', reason);
        });
    }, function (reason) {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        //console.log('ERROR : ', reason);
    });
}

// dev only 
<<<<<<< HEAD
function insertAward(document,response) {
    db.collection("awards").insertOne(document , function(err,result){
=======
function insertAward(document, response) {
    db.collection("awards").insertOne(document, function (err, result) {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        // console.log("User Checking Result :" , document);
        if (err) response.send(err);
        else {
            // console.log('The user was added successfully!');
<<<<<<< HEAD
            response.status(200).send("Award Ok");        
         }
=======
            response.status(200).send("Award Ok");
        }
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
    });
}


/**
 * 
 * @param {*} response 
 */
<<<<<<< HEAD
function dropAllFileMappings(response){
    db.collection('fileMappings').drop().then(function(val){
        if (response  == null ){
            console.log('All file mappings dropped successfully');
        }else {
            response.send({'message': 'All file mappings deleted'});
        }
    }, function(reason){
        if (response  == null ){
            console.log('ERROR : ', reason);
        }else {
            response.send({'errorMessage': reason});
=======
function dropAllFileMappings(response) {
    db.collection('fileMappings').drop().then(function (val) {
        if (response == null) {
            console.log('All file mappings dropped successfully');
        } else {
            response.send({
                'message': 'All file mappings deleted'
            });
        }
    }, function (reason) {
        if (response == null) {
            console.log('ERROR : ', reason);
        } else {
            response.send({
                'errorMessage': reason
            });
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        }
    });
}


<<<<<<< HEAD

module.exports = {
    upload,downloadById,downloadByName , fileExist,dropAllFilesInCollection ,
     deleteFileByName,deleteFileById, dropCollection, 
    getAllFileMappings,getAllFilesFromBucket, insertManyDocuments , 
    getAllapplicantsDueForPromotion , closeMongoDBConnection,
    openMongoDBConnection, searchDocumentByFullName,dropAllFileMappings,
    insertManyDocuments, updateDocument , insertOneDocument,deleteApplicantByUsername,
    addApplicantDueForPromotion , deleteApplicantById , checkIfAdminUsernameExist,
    deleteApplicantByFullName ,verifyUserLoggingCredentials,getFileMappingsByUsername,
    verifyAdminLogiCredentials,checkIfApplicantUsernameExist,getApplicants,
    getApplicantById, insertApplicantDeuForPromotion, insertApplicant,
    getApplicantByUsername , insertUser , getUsers, dropApplicantCollection,
    dropAllFileCollections, deleteAdmin , getAllAdmins, insertAdmin,countFiles, countUsers, insertAward , getApplicantByName
}
=======
function authentication() {
    db.createRole({
        role: "myClusterwideAdmin",
        privileges: [{
                resource: {
                    cluster: true
                },
                actions: ["addShard"]
            },
            {
                resource: {
                    db: "admin",
                    collection: ""
                },
                actions: ["find", "update", "insert", "remove"]
            },
            {
                resource: {
                    db: "pgs-db",
                    collection: "usersCollection"
                },
                actions: ["update", "insert", "remove"]
            },
        ],
        roles: [{
                role: "read",
                db: "admin"
            },
            {
                role: "read",
                db: "pgs-db"
            }
        ],
        authenticationRestrictions: [{
            clientSource: ["10.0.20.23" | ""],
            serverAddress: ["10.0.20.23" | "10.0.20.23/32"]
        }, ]
    }, {
        w: "majority",
        wtimeout: 5000
    });
}



module.exports = {
    upload,
    downloadById,
    downloadByName,
    fileExist,
    dropAllFilesInCollection,
    deleteFileByName,
    deleteFileById,
    dropCollection,
    getAllFileMappings,
    getAllFilesFromBucket,
    insertManyDocuments,
    getAllapplicantsDueForPromotion,
    closeMongoDBConnection,
    openMongoDBConnection,
    searchDocumentByFullName,
    dropAllFileMappings,
    insertManyDocuments,
    updateDocument,
    insertOneDocument,
    deleteApplicantByUsername,
    addApplicantDueForPromotion,
    deleteApplicantById,
    checkIfAdminUsernameExist,
    deleteApplicantByFullName,
    verifyUserLoggingCredentials,
    getFileMappingsByUsername,
    verifyAdminLogiCredentials,
    checkIfApplicantUsernameExist,
    getApplicants,
    getApplicantById,
    insertApplicantDeuForPromotion,
    insertApplicant,
    getApplicantByUsername,
    insertUser,
    getUsers,
    dropApplicantCollection,
    dropAllFileCollections,
    deleteAdmin,
    getAllAdmins,
    insertAdmin,
    countFiles,
    countUsers,
    insertAward,
    getApplicantByName
}
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
