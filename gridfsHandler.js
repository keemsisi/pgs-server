var mongo = require('mongodb');
var test = require('assert');
var assert = require('assert');
var EventEmitter = require('events');
var fs = require('fs') ;
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
    // db.createCollection("lasisi", function(result){
    //     console.log("Collection created");
    // });
    gfs = Grid(db, mongo); 

    // gfsCommendation = Grid(db, "commendation");
    // gfsPubblication = Grid(db, "publication");

    // testInsertDocument({"name": "Adeshina", "age" : 334  , "school" : "Nigeria University"});
    console.log('[+] : MongoDb Connected successfully and ready to receive connection');


});

// Use connect method to connect to the server
mongo.connect(url, function(err, client) {
    assert.equal(null, err , "Error occured while connecting to MongoDb Server");
    console.log("Connected successfully to server");
    events.emit('client-ready' ,  client);
});




/*******************************
 * Close the mongo db connection 
 * *****************************
 */
function closeMongoDBConnection() {
    if ( mongodbClient.closed === true) {
        return  true ;
    }else if (!mongodbClient.closed) {
        mongodbClient.close() ;
        return true ; // connection closed
    }
}

/*******************************************************************
 *
 * @param mongodbClient The mongodb client
 * @param port The port on which the mongodb server is running
 * @param hostName This is the mongodb server hostname to connect to
 * *****************************************************************
 */
function openMongoDBConnection (mongodbC , port , hostName) {
    if (typeof port == "number" && typeof hostName === "string" ) {
        mongodbC.open(port , hostName) ;
    } else {
        // logger("Please enter correct port and hostname to connect to.");
    }
}

/**
 * 
 * @param {Object} documentToinsert  the document to insert into the Db
 */
function insertOneDocument(documentToinsert) {
    mongodbClient.db('pgs-db').collection('admin').insertOne(document, function(err, response) {
        console.log(response);
    });

    return true ;
}


/**
 * @param {Object} document The document to insert 
 */
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
    });
}


/**
 * Update post where the fullName matches 
 * @param {*} fullName 
 * @param {*} newPostToApplyFor 
 */
function updateDocument(fullName , newPostToApplyFor) {
    mongodbClient.db('pgs-db').collection('admin').update(
        {"fullName" : fullName} , {
            $set : {
                "postAppliedFor" : newPostToApplyFor
            }
        }
    );
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
    .db('pgs-db')
    .collection('applicants')
}

/**
 * 
 * @param {*} document The applicant Object that is due for promotion 
 */
function addApplicantDueForPromotion(document) {
    mongodbClient.db('pgs-db')
    .collection('applicant-due-for-promotion')
    .insertOne(document , function(err, response) {
        if (err) {
            console.log( "ERROR" + err) ;
        }else {
          console.log(response) ;  
        } 
    });
}

/**
 * 
 * @param {*} filepath 
 * @param {*} filename 
 * @param {*} response 
 *///working
async function upload(collectionName , filepath , filename) {
    var fileName = filename, fileId =  new mongo.ObjectID();
    var writestream = Grid(db , mongo).createWriteStream({
        filename: fileName,
        _id: fileId.toHexString() , root : collectionName.trim()
    });
    
    fs.createReadStream(filepath).pipe(writestream).on('finish', function(err){
        console.log("[+] Finish uploading file");
        console.log("File Upload was successfull!" , filename);
        console.log(filepath);
        fs.unlinkSync(filepath);
        console.log(fileName + " => was unlinked successfully");
    }).on('error' , function(err){
        console.log("ERROR ", error);
    });
}

/**
 * 
 * @param {*} filename 
 * @param {*} response 
 */ //working
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
            response.status(404).send("File does not exist");
        }
    });
}


/**
 * 
 * @param {*} fileId 
 * @param {*} response 
 */ // working
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
}





/**
 * 
 * @param {*} collectionName 
 * @param {*} response 
 */ //working 
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
        console.log(reason);
        response.send(reason);
    });
}


/**
 * 
 * @param {*} collectionName 
 * @param {*} response 
 *///working
function dropCollection(collectionName , response ) {
    Grid(db , mongo).collection(collectionName).drop().then(function(val){
        console.log("Done");
        response.send(collectionName +" -=-=> Collection Droped!");
   } , function(reason) {
       response.send(reason);
   });
} 

/**
 * 
 * @param {*} collectionName 
 * @param {*} fileName 
 * @param {*} response 
 */
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
            response.send("No file to delete!");
        }
    });
}


/**
 * @param {*} collectionName 
 * @param {*} fileId 
 * @param {*} response 
 */
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
            response.send("No file to delete!");
        }
    });
}


/**
 * 
 * @param {*} bucketName 
 * @param {*} response 
 *///working 
function getAllFilesFromBucket(collectionName , response) {
    Grid(db , mongo).collection(collectionName).find({}).toArray(function(err,result){
        if (err) response.send(err);
        else response.send(result);
    });
}

/**
 * 
 * @param {*} bucketName 
 * @param {*} response 
 *///working 
 function renameFile(collectionName , response) {
    Grid(db , mongo).collection(collectionName).find({}).toArray(function(err,result){
        if (err) response.send(err);
        else response.send(result);
    });
}

/**
 * 
 * @param {Object} document The document is in JSON format 
 */
function insertAccount(document) {
    db.collection("applicants").insertOne(document,function(err, response) {
        console.log("Document insert successfully!") ;
    });
}





module.exports = {
    upload,downloadById,downloadByName , 
    fileExist,dropAllFilesInCollection , 
    deleteFileByName,deleteFileById, dropCollection, 
    getAllFilesFromBucket, insertManyDocuments , getAllapplicantsDueForPromotion , closeMongoDBConnection,
    openMongoDBConnection, searchDocumentByFullName, insertManyDocuments, updateDocument , insertOneDocument
}
