var serviceAccount = require("./permissions.json");
var admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://loveapi.firebaseio.com"
});

 const db = admin.firestore();

const functions =require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));

app.get('/hello-world', (req, res) =>{
    return res.status(200).send('Hello World!');
});

// create Crud Action

app.post('/api/create', (req, res)=> {
    (async () => {
        try {
            await db.collection('items').doc('/' + req.body.id + '/')
            .create({item: req.body.item});
            console.log("created")
            return res.status(200).send();
        }  catch (error) {
            console.log(error);
            return res.status(500).send(error);
            }
    })();
});



// Read Crud Action




// Update Crud Action




// Destroy Crud Action




exports.app = functions.https.onRequest(app);

