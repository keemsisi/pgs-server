// var mongoDb = require('mongodb');
// test = require('assert');
// var assert = require('assert');
// var EventEmitter = require('events');
// var fs = require('fs') ;
// var Grid = require('gridfs-stream');

// // Connection URL
// // var url = 'mongodb://localhost:27017';
// var url = 'mongodb://localhost:27017';
// var events = new EventEmitter() ;
// var mongodbClient = null ; // initital client value
// var db  , gfs ;




// /**
//  * Client hadler
//  */
// events.on('client-ready' , function(mongoDBClientReceived){
    
//     console.log("Hello");
//     mongodbClient = mongoDBClientReceived ;
//     db = mongodbClient.db('pgs-db'); //get the database to use 
//     db.createCollection('buckets');
//     gfs = Grid(db, mongoDb);

//     // testInsertDocument({"name": "Adeshina", "age" : 334  , "school" : "Nigeria University"});
//     console.log('[+] : MongoDb Connected successfully and ready to receive connection');


// });

// // Database Name
// var dbName = 'pgs-db';

// // Use connect method to connect to the server
// mongoDb.connect(url, function(err, client) {
//     assert.equal(null, err , "Error occured while connecting to MongoDb Server");
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);
//     events.emit('client-ready' ,  client);
// });



// function closeMongoDBConnection() {
//     if ( mongodbClient.closed === true) {
//         return  true ;
//     }else if (!mongodbClient.closed) {
//         mongodbClient.close() ;
//         return true ; // connection closed
//     }
// }

// /**
//  *
//  * @param mongodbClient The mongodb client
//  * @param port The port on which the mongodb server is running
//  * @param hostName This is the mongodb server hostname to connect to
//  */
// function openMongoDBConnection (mongodbC , port , hostName) {
//     if (typeof port == "number" && typeof hostName === "string" ) {
//         mongodbC.open(port , hostName) ;
//     } else {
//         // logger("Please enter correct port and hostname to connect to.");
//     }
// }

// /**
//  * 
//  * @param {Object} documentToinsert  he document to insert into the Db
//  */
// function insertOneDocument(documentToinsert) {
//     mongodbClient.db('pgs-db').collection('admin').insertOne(document, function(err, response) {
//         console.log(response);
//     });

//     return true ;
// }


// /**
//  * @param {Object} document The document to insert 
//  */
// function insertManyDocuments(document ){
//     mongodbClient.db('pgs-db').collection('admin').insertMany(document, function(err, response) {
//         console.log(response);
//     });
//     return true ;
// }

// function searchDocumentByFullName (fullname) {
//     mongodbClient.findOne({"fullname" : fullname}, function(err , response){
//         assert.equal(null , err ,  "Error occcured while searching for the document" );
//         console.log("Document found" , response);
//     });
// }


// /**
//  * Update post where the fullName matches 
//  * @param {*} fullName 
//  * @param {*} newPostToApplyFor 
//  */
// function updateDocument(fullName , newPostToApplyFor) {
//     mongodbClient.db('pgs-db').collection('admin').update(
//         {"fullName" : fullName} , {
//             $set : {
//                 "postAppliedFor" : newPostToApplyFor
//             }
//         }
//     );
// }

// /**
//  * Get all the applicants due for promotion
//  */
// function getAllapplicantsDueForPromotion() {
//     mongodbClient.db('pgs-db').collection('due-for-promotion')
// }


// /**
//  * 
//  * @param {*} postAppliedFor The post of the applicant that applied for the post 
//  */
// function searchForApplicantByPost(postAppliedFor) {
//     mongodbClient
//     .db('pgs-db')
//     .collection('applicants')
// }

// /**
//  * 
//  * @param {*} document The applicant Object that is due for promotion 
//  */
// function addApplicantDueForPromotion(document) {
//     mongodbClient.db('pgs-db')
//     .collection('applicant-due-for-promotion')
//     .insertOne(document , function(err, response) {
//         if (err) {
//             console.log( "ERROR" + err) ;
//         }else {
//           console.log(response) ;  
//         } 
//     });
// }

// // /**
// //  * 
// //  * @param {*} document The document to test the insert
// //  */
// // function testInsertDocument(document) {
// //     // console.log(mongodbClient)
// //     // mongodbClient.db.collection("applicants").insertOne(document , function(err, response) {
// //     //     //assert.equal(null , err, "Error Occured while inserting testing data");
// //     //     console.log(response);
// //     // });

// //     console.log("USE DB" + mongodbClient
// //     .db('pgs-db')
// //     .collection('admin')
// //     .insertOne(document, function(err, response) {
// //         console.log(response);
// //     }) );
// // }





// /**
//  * 
//  * @param {*} bucketName 
//  * @param {*} response 
//  */
// function getAllFilesFromBucket(bucketName , response) {
//     db.collection("buckets").find({},{ projection: {filename : 1 , bucketName : 1, _id: 0} } ).toArray(function(err, result) {
//         if (err) throw err;
//         // downloadDocument(filename, result[0].bucketName, 'pooo.png');
//         response.send(result);
//       });
// }



 

// function deleteFile(filename , bucketName , response ) {
//     var bucket = new mongoDb.GridFSBucket(db); 
    
//     bucket.find({}).toArray(function(err, result){
//         console.log(result);
//     })

//     //   bucket.delete(filename, function(error) {
//     //     test.equal(error, null);
//     //   });
//       response.send("File delete was successfull!");
//   }
  
  
  
  
  
  
  
  
//   // Drop an entire buckets files and chunks
//   /**
//    * 
//    * @param {*} bucketName 
//    * @param {*} response 
//    */
//   function dropBuckect(bucketName , response ) {
//     var bucket = new mongoDb.GridFSBucket(db, { bucketName: bucketName });
//     // var CHUNKS_COLL = 'gridfsdownload.chunks';
//     // var FILES_COLL = 'gridfsdownload.files';

//       bucket.drop(function(error) {
//         test.equal(error, null);
//         response.send("Bucket Drop Was Successful!");
//       });

//   }
  
//   // Provide start and end parameters for file download to skip ahead x bytes and limit the total amount of bytes read to n
  
//   function downloadXBytes(filename , bucketName , res) {
//     var bucket = new mongoDb.GridFSBucket(db, {
//       bucketName: bucketName,
//       chunkSizeBytes: 2,
//     });
//     // var CHUNKS_COLL = 'gridfsdownload.chunks';
//     // var FILES_COLL = 'gridfsdownload.files';
//     // var readStream = fs.createReadStream('./LICENSE');
//     var uploadStream = bucket.openUploadStream(filename);
//     // var license = fs.readFileSync('./LICENSE');
//     // var id = uploadStream.id;
//     uploadStream.once('finish', function() {
//       var downloadStream = bucket.openDownloadStreamByName(filename,
//         { start: 1 }).end(6);
  
//       downloadStream.on('error', function(error) {
//         test.equal(error, null);
//       });
//       var gotData = 0;
//       var str = '';
//       downloadStream.on('data', function(data) {
//         ++gotData;
//         str += data.toString('utf8');
//       });
  
//       downloadStream.on('end', function() {
//         // Depending on different versions of node, we may get
//         // different amounts of 'data' events. node 0.10 gives 2,
//         // node >= 0.12 gives 3. Either is correct, but we just
//         // care that we got between 1 and 3, and got the right result
//         test.ok(gotData >= 1 && gotData <= 3);
//         test.equal(str, 'pache');
//       });
//     });
//     readStream.pipe(res);
//   }
  
  
  
  
//   // Correctly download a GridFS file by name
//   /**
//    * 
//    * @param {*} filename 
//    * @param {*} bucketName 
//    * @param {*} res 
//    */
//   function downloadByName(filename , bucketName ,res ) {
//     // const bucket = new mongoDb.GridFSBucket(db, {
//     //     chunkSizeBytes: 1024,
//     //     bucketName: "adeshina"
//     //   });
//     // //   console.log(await mongodbClient.db("pgs-db").collections();
//     // console.log("Bucket Name ==>" , bucketName)
//     // res.set('Content-Type', "multipart/form-data");
//     // res.set('Content-Disposition', 'attachment; filename="' + filename+ '"');
//     //   bucket.openDownloadStreamByName(filename).
//     //     pipe(res).
//     //     on('error', function(error) {
//     //         assert.ifError(error);
//     //     }).
//     //     on('finish', function() {
//     //         console.log('done!');
//     //         //process.exit(0);
//     // });
// }
  
//   /**
//    * 
//    * @param {*} filename 
//    * @param {*} filePath 
//    * @param {*} bucket 
//    */
//     // Correctly upload a file to GridFS and then retrieve it as a stream
//  function uploadFile(filename , filePath , bucketName , res) {
//     // console.log("<-------------------------------- Uploading File -------------------------->"+filePath);
//     //   var bucket = new mongoDb.GridFSBucket(db, { bucketName: bucketName });
//     // //   var CHUNKS_COLL = bucketName+'.chunks';
//     // //   var FILES_COLL = bucketName+'.files';
//     //   var uploadStream  = bucket.openUploadStream(filename) ;
//     //   console.log("ID    => " + await db.collections();

//     //   fs.createReadStream(filePath).
//     //     pipe(uploadStream).
//     //     on('error', function(error) {
//     //       assert.ifError(error);
//     //       res.send('File failed to upload ===> '+ filename);
//     //     }).
//     //     on('finish', function() {
//     //       console.log('done!', filename);
//     //       console.log('file was saved into mongoDb Successfully!' , "ID=====>" +uploadStream.id);
//     //       db.collection('buckets').insertOne({'bucketName' : bucketName , "filename" : filename , "fileId" : uploadStream.id});
//     //       fs.unlinkSync(filePath); //remove the file from the file system 
//     //     //   console.log(bucket.openDownloadStreamByName(filename).read(100);
//     //     });


    
// }
//   /**
//    * 
//    * @param {*} bucketName 
//    * @param {*} fileNameToRename 
//    * @param {*} responseObject 
//    */
//   function renameFile(bucketName , oldFileName , newFileName , responseObject){
//       var bucket = new mongoDb.GridFSBucket(db, { bucketName: bucketName }); 
//       var uploadStream = bucket.openDownloadStreamByName(oldFileName);
//       var id = uploadStream.id;
  
//     //   fs.createReadStream(filePath)
//     //   .pipe(uploadStream)
//     //   .once('finish', function() {
//           bucket.rename(id, newFileName , function(err) {
//           test.equal(null, err);
//           });
//           responseObject.send('{"message": "File renaming was successful"}');
//      // });
//   }
  
// //export all the functions created and the mongo db client to the outside world
// module.exports ={ 
//     mongodbClient , 
//     openMongoDBConnection , 
//     closeMongoDBConnection , 
//     downloadByName, 
//     uploadFile,
//     getAllFilesFromBucket , 
//     renameFile , 
//     dropBuckect ,
//     deleteFile ,
//     downloadXBytes
// }