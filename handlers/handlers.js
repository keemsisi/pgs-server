var mongo = require('mongodb');
var test = require('assert');
var assert = require('assert');
var EventEmitter = require('events');
<<<<<<< HEAD
var fs = require('fs') ;
=======
var fs = require('fs');
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
var Grid = require('gridfs-stream');
const util = require('util');
const exec = util.promisify(require('child_process').exec);



<<<<<<< HEAD
var fileCollections=  [
    'prizes', 'honours' , 'international-recognitions', 'national-recognitions',
    'educational-certificates', 'national-and-professional-qaulifications',
    'special-assignments', 'publications','commendations','extra-curricula-activities','awards'
=======
var fileCollections = [
    'prizes', 'honours', 'international-recognitions', 'national-recognitions',
    'educational-certificates', 'national-and-professional-qaulifications',
    'special-assignments', 'publications', 'commendations', 'extra-curricula-activities', 'awards'
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
];

/**
 * Execute the commnd in the linux terminal 
 */
// function execCommandAtTerminal() {
//     async  function create() {
//         const { stdout, stderr } = await exec('mkdir /tmp/cu && chmod -R 777 /tmp/cu');
//         console.log('stdout:', stdout.length > 0 ? stdout : " NO MESSAGE" );
//         console.log('stderr:', stderr.length > 0 ? stdout : " /tmp/cu was created successfully ");
//     }fs.exists("/tmp/cu", function (condition){
//       if (condition = true ) {console.log('folder already exists...')}
//       else {create()}});
// }

// Connection URL
// var url = 'mongodb://mongo:27017'; // production URL
var url = 'mongodb://localhost:27017';
<<<<<<< HEAD
var events = new EventEmitter() ;
var mongodbClient = null ; // initital client value
var db  , gfs , gfsCommendation , gfsPubblication;
=======
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
    // execCommandAtTerminal()

});




// Use connect method to connect to the server
<<<<<<< HEAD
mongo.connect(url, { useNewUrlParser: true },function(err, client) {
    // assert.equal(null, err , "Error occured while connecting to MongoDb Server");
    if (err) {
        console.error('[-] ERROR CONNECTING THE MongoDB Server');
    }else {
        // console.log("Connected successfully to server");
        events.emit('client-ready' ,  client);
    }
    
=======
mongo.connect(url, {
    useNewUrlParser: true
}, function (err, client) {
    // assert.equal(null, err , "Error occured while connecting to MongoDb Server");
    if (err) {
        console.error('[-] ERROR CONNECTING THE MongoDB Server');
        console.log(err)
    } else {
        // console.log("Connected successfully to server");
        events.emit('client-ready', client);
    }

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









<<<<<<< HEAD
function searchDocumentByFullName (fullname) {
    mongodbClient.findOne({"fullname" : fullname}, function(err , response){
        assert.equal(null , err ,  "Error occcured while searching for the document" );
        console.log("Document found" , response);
=======
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
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb







<<<<<<< HEAD
events.on('ready' , (collectionName ,filename , fileId )=>{
        
    g.collectionName= collectionName ;
    g.fileId = fileId ;
    g.fileName= filename ;

    //return nextMappings ;
    console.log("------------------",g.collectionName);
=======
events.on('ready', (collectionName, filename, fileId) => {

    g.collectionName = collectionName;
    g.fileId = fileId;
    g.fileName = filename;

    //return nextMappings ;
    console.log("------------------", g.collectionName);
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
});









// dev 
/**
 * 
 * @param {*} response 
 */
<<<<<<< HEAD
function dropAllFileCollections(response){
    fileCollections.forEach(collectionName => {
        dropCollection(collectionName,null);
    });
    db.collection('fileMappings').drop().then(function(val){
        console.log('ALL FILE MAPPINGS WERE DROPPED SUCCESSFULLY ');
        response.send({'message' : 'All file collections were deleted successfully'});
    }, function(reason){
        console.log('ERROR : ', reason);
        response.send({'errMsg' : reason});
=======
function dropAllFileCollections(response) {
    fileCollections.forEach(collectionName => {
        dropCollection(collectionName, null);
    });
    db.collection('fileMappings').drop().then(function (val) {
        console.log('ALL FILE MAPPINGS WERE DROPPED SUCCESSFULLY ');
        response.send({
            'message': 'All file collections were deleted successfully'
        });
    }, function (reason) {
        console.log('ERROR : ', reason);
        response.send({
            'errMsg': reason
        });
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
    });
}






/***********************************UPLOAD HANDLERS */
/**
 * 
 * @param {*} filepath The file part to read and upload to mongo db
 * @param {*} filename The filename to save to the mongodb database
 * @param {*} response The response object to send response to the REST caller 
<<<<<<< HEAD
 *///working
 async function upload(collectionName , filepath , filename, username ) {


    var fileName = filename, fileId =  new mongo.ObjectID();
    var fileGenId  = fileId.toHexString();
=======
 */ //working
async function upload(collectionName, filepath, filename, username) {


    var fileName = filename,
        fileId = new mongo.ObjectID();
    var fileGenId = fileId.toHexString();
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
    // var writestream = Grid(db , mongo).createWriteStream({
    //     filename: fileName,
    //     owner : username,
    //     dateUploaded: Date(),
    //     _id:  fileGenId, 
    //     root : collectionName.trim()
    // });

<<<<<<< HEAD
    var writestream = Grid(db , mongo).createWriteStream({
        filename: fileName,
        _id:  fileGenId, 
        root : collectionName.trim()
    });

    
    fs.createReadStream(filepath).pipe(writestream).on('finish', function(err){
        console.log("[+] Finish uploading file");
        console.log("File Upload was successfull!" , filename);
=======
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
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
                response.end();
            });
            readstream.pipe(response);
            // response.sendFile('/home/keemcode/IdeaProjects/eps-node-server/handlers/handlers.js');
<<<<<<< HEAD
        }else {
=======
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






//colecction helper to drop documents
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
    /*****Delete the collection  in the pgs-db that stores the files uploaded */
    else {
        if (reason.errmsg == 'ns not found'){ // do nothing 
        }else {
            console.log(reason);
        }
    }
   });
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
        /*****Delete the collection  in the pgs-db that stores the files uploaded */
        else {
            if (reason.errmsg == 'ns not found') { // do nothing 
            } else {
                console.log(reason);
            }
        }
    });
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
}






/**
 * 
 * @param {*} collectionName 
 * @param {*} fileName 
 * @param {*} response 
 */
<<<<<<< HEAD
function deleteFileByName(username,collectionName , fileName,  response ) {
    Grid(db , mongo).exist({
        filename: fileName, root : collectionName.trim()
    } , function(err , bool ){
        if (err) {
            response.status(500).send(err);
        }else if(bool){
            Grid(db , mongo).collection(collectionName).deleteOne({ 'filename' : fileName.trim() }).then(((value)=>{
=======
function deleteFileByName(username, collectionName, fileName, response) {
    Grid(db, mongo).exist({
        filename: fileName,
        root: collectionName.trim()
    }, function (err, bool) {
        if (err) {
            response.status(500).send(err);
        } else if (bool) {
            Grid(db, mongo).collection(collectionName).deleteOne({
                'filename': fileName.trim()
            }).then(((value) => {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
                console.log("FILES DELETED SUCCESSFULLY!");



<<<<<<< HEAD
                db.collection("fileMappings").find({"owner" : username.trim(), "fileId" : fileId.trim()}).toArray(function(err, results) {
                    if (err) { res.send(err);}
                        else {
                            db.collection("fileMappings").deleteOne({"owner" : username.trim(), "fileId" : fileId.trim()}).toArray(function(err, results) {
                                if (err) { res.send(err);}
                                    else {
                                           //remove the mappings from here 
                                            response.send({'sucMsg': "Files and Chunks deleted successfully!"});
                                    }
                            });
                        }
                });

            }),function(reason){
                console.log("RejectPromiseLikeMessage" , reason) ;
                response.send({'errMsg': reason});
            });
        }else {response.status(200).send({'message': "No file to delete!"});}
=======
                db.collection("fileMappings").find({
                    "owner": username.trim(),
                    "fileId": fileId.trim()
                }).toArray(function (err, results) {
                    if (err) {
                        res.send(err);
                    } else {
                        db.collection("fileMappings").deleteOne({
                            "owner": username.trim(),
                            "fileId": fileId.trim()
                        }).toArray(function (err, results) {
                            if (err) {
                                res.send(err);
                            } else {
                                //remove the mappings from here 
                                response.send({
                                    'sucMsg': "Files and Chunks deleted successfully!"
                                });
                            }
                        });
                    }
                });

            }), function (reason) {
                console.log("RejectPromiseLikeMessage", reason);
                response.send({
                    'errMsg': reason
                });
            });
        } else {
            response.status(200).send({
                'message': "No file to delete!"
            });
        }
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
    });
}






/**
 * @param {*} collectionName 
 * @param {*} fileId 
 * @param {*} response 
 */
<<<<<<< HEAD
function deleteFileById(username,collectionName , fileId,  response ) {
    console.log("------------------>"+collectionName , fileId );
    Grid(db , mongo).exist({
        _id: fileId, root: collectionName.trim()
    } , function(err , bool ){
        if (err) {
            response.status(500).send(err);
        }
        else if(bool){
            Grid(db , mongo).collection(collectionName).deleteOne({ _id : mongo.ObjectId(fileId) }).then(((value)=>{
                    console.log("FILES DELETED SUCCESSFULLY!");

                    db.collection("fileMappings").find({"owner" : username.trim(), "fileId" : fileId.trim()}).toArray(function(err, results) {
                        if (err) { res.send(err);}
                            else {
                                db.collection("fileMappings").deleteOne({"owner" : username.trim(), "fileId" : fileId.trim()},function(err, results) {
                                    if (err) { res.send(err);}
                                        else {
                                               //remove the mappings from here 
                                                response.send({'sucMsg': "Files and Chunks deleted successfully!"});
                                        }
                                });
                            }
                    });
            }),function(reason){
                console.log("RejectPromiseLikeMessage" , reason) ;
                response.send({'errMsg': reason});
            });
        }else {
=======
function deleteFileById(username, collectionName, fileId, response) {
    console.log("------------------>" + collectionName, fileId);
    Grid(db, mongo).exist({
        _id: fileId,
        root: collectionName.trim()
    }, function (err, bool) {
        if (err) {
            response.status(500).send(err);
        } else if (bool) {
            Grid(db, mongo).collection(collectionName).deleteOne({
                _id: mongo.ObjectId(fileId)
            }).then(((value) => {
                console.log("FILES DELETED SUCCESSFULLY!");

                db.collection("fileMappings").find({
                    "owner": username.trim(),
                    "fileId": fileId.trim()
                }).toArray(function (err, results) {
                    if (err) {
                        res.send(err);
                    } else {
                        db.collection("fileMappings").deleteOne({
                            "owner": username.trim(),
                            "fileId": fileId.trim()
                        }, function (err, results) {
                            if (err) {
                                res.send(err);
                            } else {
                                //remove the mappings from here 
                                response.send({
                                    'sucMsg': "Files and Chunks deleted successfully!"
                                });
                            }
                        });
                    }
                });
            }), function (reason) {
                console.log("RejectPromiseLikeMessage", reason);
                response.send({
                    'errMsg': reason
                });
            });
        } else {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
            response.status(404).send("File does not exists");
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
 * @param {*} fileId 
 * @param {*} response 
 */
function deleteFilesByOwner(owner) {
<<<<<<< HEAD
    console.log('Deleting all files for owner' , owner)
    fileCollections.forEach(collectionName => {
        Grid(db , mongo).collection(collectionName).deleteMany({ 'fil' : owner.trim() }).then(((value)=>{
            console.log("FILES DELETED SUCCESSFULLY!");
        }),function(reason){
            console.log("RejectPromiseLikeMessage" , reason) ;
        });
    });

    
=======
    console.log('Deleting all files for owner', owner)
    fileCollections.forEach(collectionName => {
        Grid(db, mongo).collection(collectionName).deleteMany({
            'fil': owner.trim()
        }).then(((value) => {
            console.log("FILES DELETED SUCCESSFULLY!");
        }), function (reason) {
            console.log("RejectPromiseLikeMessage", reason);
        });
    });


>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
}


/**
 * 
 * @param {*} fileId 
 * @param {*} response 
 */
function deleteFilesAndFileMappingsOfOwner(owner, response) {
<<<<<<< HEAD
    db.collection("users").deleteOne({'username' : owner.trim()} , function(err,result){
        if (err) response.send(err);
        else {
            db.collection("fileMappings").find({"owner" : owner.trim()}).toArray(function(err, results) {
                if (err) { res.send(err);}
                    else {
                        console.log(results);
                        if (results.length > 0 ){
                            results.forEach(result => {
                                Grid(db , mongo).collection(result.collectionName).deleteOne({ '_id' : mongo.ObjectId(result.fileId) }).then(((value)=>{
                                    console.log("File with fileid", result.fileId , "owner " ,owner ," was deleted ", Date());
                                }),function(reason){
                                    console.log("RejectPromiseLikeMessage" , reason) ;
                                    console.log("File with fileid", result.fileId , "owner " ,owner ," failed to delete", Date());
                                });
                            });
                            db.collection('fileMappings').deleteMany({ 'owner' : owner.trim() }).then(((value)=>{
                                console.log("ALL ", owner , "FILE MAPPINGS DELETED SUCCESSFULLY");
                                response.status(200).send({'success': 'User with username ' + owner + ' deleted successfully with all uploaded files'});
                            }),function(reason){
                                console.log("ALL ", owner , "FILE MAPPINGS FAILED TO DELETE");
                                console.log(reason);
                                deleteFilesAndFileMappingsOfOwner(owner , response);
                            }); 
                    }else {
                        //since no file mappings exist the user account will juist be deleted 
                        response.status(200).send({'success': 'User with username ' + owner + '  account has been deleted with zero files'});
=======
    db.collection("users").deleteOne({
        'username': owner.trim()
    }, function (err, result) {
        if (err) response.send(err);
        else {
            db.collection("fileMappings").find({
                "owner": owner.trim()
            }).toArray(function (err, results) {
                if (err) {
                    res.send(err);
                } else {
                    console.log(results);
                    if (results.length > 0) {
                        results.forEach(result => {
                            Grid(db, mongo).collection(result.collectionName).deleteOne({
                                '_id': mongo.ObjectId(result.fileId)
                            }).then(((value) => {
                                console.log("File with fileid", result.fileId, "owner ", owner, " was deleted ", Date());
                            }), function (reason) {
                                console.log("RejectPromiseLikeMessage", reason);
                                console.log("File with fileid", result.fileId, "owner ", owner, " failed to delete", Date());
                            });
                        });
                        db.collection('fileMappings').deleteMany({
                            'owner': owner.trim()
                        }).then(((value) => {
                            console.log("ALL ", owner, "FILE MAPPINGS DELETED SUCCESSFULLY");
                            response.status(200).send({
                                'success': 'User with username ' + owner + ' deleted successfully with all uploaded files'
                            });
                        }), function (reason) {
                            console.log("ALL ", owner, "FILE MAPPINGS FAILED TO DELETE");
                            console.log(reason);
                            deleteFilesAndFileMappingsOfOwner(owner, response);
                        });
                    } else {
                        //since no file mappings exist the user account will juist be deleted 
                        response.status(200).send({
                            'success': 'User with username ' + owner + '  account has been deleted with zero files'
                        });
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
                    }
                }
            });
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







<<<<<<< HEAD
function countFiles(collectionName , response ){
    Grid(db , mongo).collection(collectionName).countDocuments({}).then(function(num) {
        response.status(200).send({'count': num}); 
    }, function(reason) {
=======
function countFiles(collectionName, response) {
    Grid(db, mongo).collection(collectionName).countDocuments({}).then(function (num) {
        response.status(200).send({
            'count': num
        });
    }, function (reason) {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        console.log(reason);
        response.send(reason);
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


/**************************************UPLOAD HANDLERS END */













/**************************************USER  HANDLERS START */



//testing only 

/**
 * 
 * @param {*} document Test document
 * @param {*} response 
 */
<<<<<<< HEAD
function insertUser(document , response , callback) {
    db.collection("users").insertOne(document , function(err,result){
        if (err) response.send(err);
        else {
            console.log('The user was added successfully!');
            if (typeof callback === "function"){
                callback();
            } else {
                response.send({'message': 'User created successfully'});
=======
function insertUser(document, response, callback) {
    db.collection("users").insertOne(document, function (err, result) {
        if (err) response.send(err);
        else {
            console.log('The user was added successfully!');
            if (typeof callback === "function") {
                callback();
            } else {
                response.send({
                    'message': 'User created successfully'
                });
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
            }
        }
    });
}



/**
 * 
 * @param {*} document Test document
 * @param {*} response 
 */
function dropUsers(response) {
<<<<<<< HEAD
    db.collection('users').drop().then(function(val){
        response.send({'message' : 'users deleted successfully'});
    }, function(reason){
        response.send({'errMsg' : reason});
    });
}
 
=======
    db.collection('users').drop().then(function (val) {
        response.send({
            'message': 'users deleted successfully'
        });
    }, function (reason) {
        response.send({
            'errMsg': reason
        });
    });
}

>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb



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
           }
       }
   });
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
            }
        }
    });
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
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



/**************************************USER HANDLERS END */














/*************************************APPLICANTS HANDLERS START */






/****************************************************************************************************************
 * The Applicant handlers goes here
 ****************************************************************************************************************/
/**
 *s
 * @param {Object} document The document is in JSON format 
 */ //working 
<<<<<<< HEAD
 function insertApplicant(username , document, res) {

    insertUser(document.loginCred,null,function(){
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
    });
 }
=======
function insertApplicant(username, document, res) {

    insertUser(document.loginCred, null, function () {
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
    });
}
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb




/**
 * 
 * @param {Object} document The document is in JSON format 
<<<<<<< HEAD
 */ 
function insertApplicantDeuForPromotion(document , res) {
    db.collection("applicants").insertOne(document,function(err, response) {
        if (err) res.status(500).send(err);
        else {
        console.log("Document insert successfully!", response) ;
        res.status(200).send("Applicant : ",document.fullname ," , was successfully registered for promotion!"); 
=======
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
 * @param {Object} document The document is in JSON format 
<<<<<<< HEAD
 */ 
function insertApplicantDeuForPromotion(username) {
    db.collection("applicants").insertOne(document,function(err, response) {
        if (err) res.status(500).send(err);
        else {
        console.log("Document insert successfully!", response) ;
        res.status(200).send("Applicant : ",document.fullname ," , was successfully registered for promotion!"); 
=======
 */
function insertApplicantDeuForPromotion(username) {
    db.collection("applicants").insertOne(document, function (err, response) {
        if (err) res.status(500).send(err);
        else {
            console.log("Document insert successfully!", response);
            res.status(200).send("Applicant : ", document.fullname, " , was successfully registered for promotion!");
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        }
    });
}






/*************************************
 * HEAVY TESTING ON THIS CODES******************************************************* */
/************************************************************************************************* */
/************************************************************************************************* */


/**
 * @param {String} applicantId The applicant id to be deleted from the collection
 */ // working and tested
<<<<<<< HEAD
function deleteApplicantById(applicantId , response) {
        db.collection("applicants").find({"_id":  mongo.ObjectId(applicantId)}).toArray(function(err,result){
                    if (err) response.send(err);
                    else {
                        if (result.length > 0) {
                            db.collection("applicants").deleteOne({ "_id" : mongo.ObjectId(applicantId) }).then(((value)=>{
                            console.log("Applicant with _id "+applicantId , "was deleted successfully " + new Date());
                            var usersname = result[0]['loginCred']['username'].trim();
                            console.log('Processing to delete all applicant information with name', usersname , ' and id', applicantId);
                            // deleteFilesByOwner(usersname);
                            deleteFilesAndFileMappingsOfOwner(usersname , response);
                        }),function(reason){
                            console.log("Applicant with _id: "+applicantId , "failed to delete" + new Date() , reason);
                            response.status(500).send("Applicant with _id: "+applicantId , "failed to delete");
                        });
                    }else {
                        response.send({'err404': 'The User with ID does not exists'});
                }        
            } 
=======
function deleteApplicantById(applicantId, response) {
    db.collection("applicants").find({
        "_id": mongo.ObjectId(applicantId)
    }).toArray(function (err, result) {
        if (err) response.send(err);
        else {
            if (result.length > 0) {
                db.collection("applicants").deleteOne({
                    "_id": mongo.ObjectId(applicantId)
                }).then(((value) => {
                    console.log("Applicant with _id " + applicantId, "was deleted successfully " + new Date());
                    var usersname = result[0]['loginCred']['username'].trim();
                    console.log('Processing to delete all applicant information with name', usersname, ' and id', applicantId);
                    // deleteFilesByOwner(usersname);
                    deleteFilesAndFileMappingsOfOwner(usersname, response);
                }), function (reason) {
                    console.log("Applicant with _id: " + applicantId, "failed to delete" + new Date(), reason);
                    response.status(500).send("Applicant with _id: " + applicantId, "failed to delete");
                });
            } else {
                response.send({
                    'err404': 'The User with ID does not exists'
                });
            }
        }
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
    });
}




/**
 * 
 * @param {*} username 
 * @param {*} response 
 */
<<<<<<< HEAD
function deleteApplicantByUsername(username , response) {
    
    // db.collection("users").deleteOne({'username' : username.trim()} , function(err,result){
    //     if (err) response.send(err);
    //     else {
            db.collection("users").findOne({"username" : username.trim()},function(err,result){
                console.log("User Checking Result");
                if (err) response.send(err);
                else {
                    if (result == null ) {
                        response.status(200).send({'message' :"User with username " + username + " does not exist"} );
                    }else {
                        db.collection("users").deleteOne({'username' : username.trim()} , function(err,result){
                                if (err) response.send(err);
                                else {
                                    db.collection("applicants").deleteOne({ "loginCred.username" : username.trim() } ,function(err,result){
                                        if (err) response.send(err);
                                        else {
                                                // deleteFilesByOwner(username);
                                                   deleteFilesAndFileMappingsOfOwner(username ,response); // delete the applicant file mappings
                                                // response.status(200).send({'message' :"User with username " + username + " deleted successfully"} );
                                            }
                                        });
                                }
                        });
                    }
                }
            });
=======
function deleteApplicantByUsername(username, response) {

    // db.collection("users").deleteOne({'username' : username.trim()} , function(err,result){
    //     if (err) response.send(err);
    //     else {
    db.collection("users").findOne({
        "username": username.trim()
    }, function (err, result) {
        console.log("User Checking Result");
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
                            if (err) response.send(err);
                            else {
                                // deleteFilesByOwner(username);
                                deleteFilesAndFileMappingsOfOwner(username, response); // delete the applicant file mappings
                                // response.status(200).send({'message' :"User with username " + username + " deleted successfully"} );
                            }
                        });
                    }
                });
            }
        }
    });
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
    //     }
    // });   
}






/**
 * 
 * @param {*} applicantName 
 * @param {*} response 
 */
function deleteApplicantByFullName(applicantName, response) {
<<<<<<< HEAD
    db.collection("applicants").findOne({"personalInformation.nameInFull" : applicantName.trim()},function(err,result){
        console.log("User Checking Result :");
        if (err) response.send(err);
        else {
            if (result == null ) {
                response.status(200).send({'message' :"User with Full name " + applicantName + " does not exist"} );
            }else {
                db.collection("applicants").deleteOne({"personalInformation.nameInFull" : applicantName.trim() }).then(((value)=>{
                    console.log("Applicant with  "+applicantName , "was deleted successfully " + new Date());
                    var username = result['loginCred']['username'].trim();
                    // deleteFilesByOwner(usersname);
                    deleteFilesAndFileMappingsOfOwner(username ,null); // delete the applicant file mappings
                    response.status(200).send("Applicant with fullname :" + applicantName + " deleted successfully!");
                }),function(reason){
                    console.log("Applicant with fullname: " + applicantName , "failed to delete" + new Date());
                    response.status(500).send("Applicant with _id: "+applicantName , "failed to delete");
                });
            }   
=======
    db.collection("applicants").findOne({
        "personalInformation.nameInFull": applicantName.trim()
    }, function (err, result) {
        console.log("User Checking Result :");
        if (err) response.send(err);
        else {
            if (result == null) {
                response.status(200).send({
                    'message': "User with Full name " + applicantName + " does not exist"
                });
            } else {
                db.collection("applicants").deleteOne({
                    "personalInformation.nameInFull": applicantName.trim()
                }).then(((value) => {
                    console.log("Applicant with  " + applicantName, "was deleted successfully " + new Date());
                    var username = result['loginCred']['username'].trim();
                    // deleteFilesByOwner(usersname);
                    deleteFilesAndFileMappingsOfOwner(username, null); // delete the applicant file mappings
                    response.status(200).send("Applicant with fullname :" + applicantName + " deleted successfully!");
                }), function (reason) {
                    console.log("Applicant with fullname: " + applicantName, "failed to delete" + new Date());
                    response.status(500).send("Applicant with _id: " + applicantName, "failed to delete");
                });
            }
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        }
    });
}



/*************************************
 * HEAVY TESTING ON THIS CODES******************************************************* */
/************************************************************************************************* */
/************************************************************************************************* */


/**
 * 
 * @param {Object} document The applicant ID to search for in the applicants collection
 */ // working 
<<<<<<< HEAD
 function getApplicantById(applicantId, response) {
    db.collection("applicants").findOne({"_id":  mongo.ObjectId(applicantId)},function(err,result){
        if (err) response.send(err);
        else response.send(result);
=======
function getApplicantById(applicantId, response) {
    db.collection("applicants").findOne({
        "_id": mongo.ObjectId(applicantId)
    }, function (err, result) {
        if (err) response.send(err);
        else response.send(result); //returns the json object to the caller 
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
    });
}



/**
 * 
 * @param {Object} document The applicant name to search for in the applicants collection
 */ // working 
<<<<<<< HEAD
 function getApplicantByUsername(applicantName, response) {
    db.collection("applicants").findOne({ "loginCred.username" : applicantName.trim() }, 
    { projection  : {_id : 0 , "loginCred.passowrd" : 0 } }
    ,function(err,result){
=======
function getApplicantByUsername(applicantName, response) {
    db.collection("applicants").findOne({
        "loginCred.username": applicantName.trim()
    }, {
        projection: {
            _id: 0,
            "loginCred.passowrd": 0
        }
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
    db.collection("applicants").find({} , {projection : {'password' : 0}}).skip(parseInt(skip)).limit(parseInt(offset)).toArray(function(err,result){
=======
 */ //working 
function getApplicants(response, skip, offset) {
    db.collection("applicants").find({}, {
        projection: {
            'password': 0
        }
    }).skip(parseInt(skip)).limit(parseInt(offset)).toArray(function (err, result) {
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
        // the collection does not exist
        if (reason.errmsg === 'ns not found') {
            db.collection('applicants').drop().then(function(val){
                console.log('All Applicants where dropped successfully');
                dropAllFileCollections(null);
                dropAllFileMappings(null);
                response.send({'message': 'All applicants dropped successfully'});
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
        // the collection does not exist
        if (reason.errmsg === 'ns not found') {
            db.collection('applicants').drop().then(function (val) {
                console.log('All Applicants where dropped successfully');
                dropAllFileCollections(null);
                dropAllFileMappings(null);
                response.send({
                    'message': 'All applicants dropped successfully'
                });
            }, function (reason) {
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
                console.log('ERROR : ', reason);
            });
        }
    });
}

/**************************************APPLICANTS HANDLERS END */


/************************************** ADMIN  HANDLERS STARTS */
/**
 * 
 * @param {*} collectionName 
 * @param {*} response 
<<<<<<< HEAD
 *///working
 function checkIfAdminUsernameExist(username , response) {
    db.collection("admins").findOne({"username" : username.trim()},function(err,result){
        console.log("User Checking Result :" , result);
        if (err) response.send(err);
        else {
            if (result == null ) {
                response.send({"exists" : false}); // login credendtials are invalid 
            }else {
                response.send({"exists" : true }); // login credendtials are valid 
=======
 */ //working
function checkIfAdminUsernameExist(username, response) {
    db.collection("admins").findOne({
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
 */ //tested and working fine 
function getAllAdmins(response) {
    // db.collection("admins").find({}, {projection : {'password': 1 }}).toArray(function(err, result) {
<<<<<<< HEAD
    db.collection("admins").find({}).toArray(function(err, result) {

        if (err) { response.send(err);}
        else {console.log("All admin were returned succssfully", result) ; 
        response.status(200).send(result); 
=======
    db.collection("admins").find({}).toArray(function (err, result) {

        if (err) {
            response.send(err);
        } else {
            console.log("All admin were returned succssfully", result);
            response.status(200).send(result);
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        }
    });
}












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



/**
 * 
 * @param {*} response 
 */
<<<<<<< HEAD
function countAdmins(response ){
    db.collection('admins').count({},function(err, result) {
        if (err) { res.send(err);}
        else {console.log("Admins WERE COUNTED ------> ", result) ; 
        response.send({'count' : result } ); 
=======
function countAdmins(response) {
    db.collection('admins').count({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            console.log("Admins WERE COUNTED ------> ", result);
            response.send({
                'count': result
            });
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
        }
    });
}

<<<<<<< HEAD
 var adminHandler  = [
     deleteAdmin , getAllAdmins , insertAdmin , verifyAdminLogiCredentials,
     checkIfAdminUsernameExist
 ]


/************************************** ADMIN  HANDLERS END */





=======
/******************************************
 * SURVEY HANDLERS 
 */
function insertSurvey(document, response) {
    db.collection("survey").insertOne(document, function (err, result) {
        console.log("Inserting Survey document inside the MongoDb Survey Collection", document);
        if (err) response.send(err);
        else {
            console.log('Successfully inserted a new document to the Survey collection ');
            response.status(200).send(result);
        }
    });
}


function getSurvey(response, skip, count) {
    db.collection("survey").find({}).skip(parseInt(skip)).limit(parseInt(count)).toArray(function (err, result) {
        if (err) response.send(err);
        else response.send(result);
    });
}


function deleteAllSurvey(response) {
    db.collection('survey').drop().then(function (val) {
        response.send({
            'message': 'All Survey Deleted successfully'
        });
    }, function (reason) {
        response.send({
            'errMsg': reason
        });
    });
}

function deleteSurveyById(id, response) {
    db.collection(collectionName).deleteOne({
        _id: mongo.ObjectId(id)
    }).then(((value) => {
        console.log("Survey was successfully deleted from the database " , Date.now());
    }), function (reason) {
        console.log("RejectPromiseLikeMessage", reason);
        response.send({
            'errMsg': reason
        });
    });
}


var adminHandler = [
    deleteAdmin, getAllAdmins, insertAdmin, verifyAdminLogiCredentials,
    checkIfAdminUsernameExist
]


/************************************** ADMIN  HANDLERS END */
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb




<<<<<<< HEAD
module.exports = {
    upload,downloadById,downloadByName , fileExist,dropAllFilesInCollection ,
     deleteFileByName,deleteFileById, dropCollection, 
    getAllFileMappings,getAllFilesFromBucket , countAdmins,
    getAllapplicantsDueForPromotion , closeMongoDBConnection,
    openMongoDBConnection, searchDocumentByFullName,dropAllFileMappings, updateDocument ,deleteApplicantByUsername,
    addApplicantDueForPromotion , deleteApplicantById , checkIfAdminUsernameExist,
    deleteApplicantByFullName ,verifyUserLoggingCredentials,getFileMappingsByUsername,
    verifyAdminLogiCredentials,checkIfApplicantUsernameExist,getApplicants,
    getApplicantById, insertApplicantDeuForPromotion, insertApplicant, dropUsers,
    getApplicantByUsername , insertUser , getUsers, dropApplicantCollection,
    dropAllFileCollections, deleteAdmin , getAllAdmins, insertAdmin,countFiles, countUsers, insertAward , getApplicantByName
}
=======
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb





<<<<<<< HEAD
=======
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
    countAdmins,
    getAllapplicantsDueForPromotion,
    closeMongoDBConnection,
    openMongoDBConnection,
    searchDocumentByFullName,
    dropAllFileMappings,
    updateDocument,
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
    dropUsers,
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
    getApplicantByName,
    getSurvey,
    insertSurvey,
    deleteAllSurvey,
    deleteSurveyById
}
>>>>>>> 03bc6e702b93cd9b7e2351ae947912d2122cb0bb
