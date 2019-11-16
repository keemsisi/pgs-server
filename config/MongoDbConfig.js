var mongo = require('mongodb');


var EventEmitter = require('events');


var url = 'mongodb://localhost:27017';

// var url = `mongodb://promotbot:neuraltechx@voice-cluster-shard-00-00-vyi75.mongodb.net:27017,voice-cluster-shard-00-01-vyi75.mongodb.net:27017,voice-cluster-shard-00-02-vyi75.mongodb.net:27017/test?ssl=true&replicaSet=Voice-Cluster-shard-0&authSource=admin&retryWrites=true&w=majority`
// var url = process.env.MONGODB_ATLAS_URL;





var events = new EventEmitter();

var mongodbClient = null; // initital client value

var db, gfs, gfsCommendation, gfsPubblication;








/**

* Client hadler

*/

events.on('client-ready', function (mongoDBClientReceived) {



    // console.log("Hello");

    mongodbClient = mongoDBClientReceived;

    db = mongodbClient.db('promotbot-db'); //get the database to use 

    // db.createCollection("lasisi", function(result){

    //     console.log("Collection created");

    // });

    // gfs = Grid(db, mongo);



    // gfsCommendation = Grid(db, "commendation");

    // gfsPubblication = Grid(db, "publication");



    // testInsertDocument({"name": "Adeshina", "age" : 334  , "school" : "Nigeria University"});

    console.log('[+] : MongoDb Connected successfully and ready to receive connections');

    db.collection('users').findOne({} , function (erro , result) {
        console.log(result);
    })


 
    //create the temporary folder for uploading the files into the tmp/cu

    // execCommandAtTerminal()


});










// Use connect method to connect to the server

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


});

// db.collection('users').findOne({} , function (erro , result) {
//     console.log(result);
// })

module.exports= {db};