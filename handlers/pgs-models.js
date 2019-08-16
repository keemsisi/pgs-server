var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pgs-db', {useNewUrlParser: true});
var assert = require('assert');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const LecturerSchema = new Schema({
  fullName: ObjectId,
  placeOfBirth: String,
  dateOfBirth: String,
  sex: String,
  maritalStatus: String ,
  nationality: String 
});

const LecturerModel  =  mongoose.model("LecturerModel" , LecturerSchema );
// LecturerModel.insert({"fullname": "lasisis" , "placeOfBirth": "dsdsdsd"});
LecturerModel.collection.insertMany(
    [{"hghhfhggfhgfgh": "lasisis" , "placeOfBirth": "dsdsdsd"},{"full":"Adeshina" , "placeOBirth": "full-part"}] 
    , function(err, response) {
    console.log(response.insertedIds) ;
});

LecturerModel.find({} , function(err, response) {
    console.log(response) ;
})
// console.log(LecturerModel.findOne());
// LecturerModel.findOne({"fullName" : "lasisi" }, function(err, response) {
//     console.log(response) ;
// });

// var mongodb = require('mongodb') ; 

// Use connect method to connect to the server
// mongodb.connect("mongodb://localhost:27017/pgs-db", function(err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//      const db = client.db(dbName);  db.collection.insertMany()
//     console.log(client.db.toString());
//     mongoDBClient = client ;

//     //imporves the DB performance
//     // insertDocuments(db, function() {
//     //     indexCollection(db, function() {
//     //         client.close();
//     //     });
//     // });
// });

