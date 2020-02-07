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

// create Item  Crud Action

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



// Read ITEM  Crud Action

app.get('/api/read/:item_id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('items').doc(req.params.item_id);
            let item = await document.get();
            let response = item.data();
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });

// read all Crud action 

app.get('/api/read', (req, res) => {
    (async () => {
        try {
            let query = db.collection('items');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                const selectedItem = {
                    id: doc.id,
                    item: doc.data().item
                };
                response.push(selectedItem);
            }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });


// Update ITEM Crud Action

app.put('/api/update/:item_id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('items').doc(req.params.item_id);
            await document.update({
                item: req.body.item
            });
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });
    
// Destroy Item Crud Action 

    app.delete('/api/delete/:item_id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('items').doc(req.params.item_id);
            await document.delete();
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });


//  ~~~  START OF LOVE QUOTES ~~~

// create Item  Crud Action

app.post('/lovequotes/create', (req, res)=> {
    (async () => {
        try {
            await db.collection('lovequotes').doc('/' + req.body.id + '/')
            .create({quote: req.body.quote, author: req.body.author});
            console.log("created")
            return res.status(200).send();
        }  catch (error) {
            console.log(error);
            return res.status(500).send(error);
            }
    })();
});



// Read ITEM  Crud Action

app.get('/lovequotes/read/:quote_id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('lovequotes').doc(req.params.quote_id);
            let lovequotes = await document.get();
            let response = lovequotes.data();
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });

// read all Crud action 

app.get('/lovequotes/read', (req, res) => {
    (async () => {
        try {
            let query = db.collection('lovequotes');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                const selectedQuote = {
                    id: doc.id,
                    quote: doc.data().quote
                };
                response.push(selectedQuote);
            }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });


// Update ITEM Crud Action

app.put('/lovequotes/update/:quote_id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('lovequotes').doc(req.params.quote_id);
            await document.update({
                quote: req.body.quote
            });
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });
    
// Destroy Lovequote Crud Action 

    app.delete('/lovequotes/delete/:quote_id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('lovequotes').doc(req.params.quote_id);
            await document.delete();
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });



    // START OF FLRITY CRUD ACTIONS LOVE API

    // CREATE FLIRTY QUOTES

    app.post('/flirtyquotes/create', (req, res)=> {
        (async () => {
            try {
                await db.collection('firtyquotes').doc('/' + req.body.id + '/')
                .create({quote: req.body.quote });
                console.log("created")
                return res.status(200).send();
            }  catch (error) {
                console.log(error);
                return res.status(500).send(error);
                }
        })();
    });
    
    
    
    // Read Flirty  Crud Action
    
    app.get('/flirtyquotes/read/:flirtyquote_id', (req, res) => {
        (async () => {
            try {
                const document = db.collection('firtyquotes').doc(req.params.flirtyquote_id);
                let flirtyquotes = await document.get();
                let response = flirtyquotes.data();
                return res.status(200).send(response);
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
            })();
        });
    
    // read all Flirty Crud action 
    
    app.get('/flirtyquotes/read', (req, res) => {
        (async () => {
            try {
                let query = db.collection('firtyquotes');
                let response = [];
                await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for (let doc of docs) {
                    const selectedquotes = {
                        id: doc.id,
                        firtyquotes: doc.data().quote
                    };
                    response.push(selectedquotes);
                }
                });
                return res.status(200).send(response);
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
            })();
        });
    
    
    // Update Flirty Crud Action
    
    app.put('/flirtyquotes/update/:flirtyquotes_id', (req, res) => {
        (async () => {
            try {
                const document = db.collection('firtyquotes').doc(req.params.flirtyquotes_id);
                await document.update({
                    quote: req.body.quote
                });
                return res.status(200).send();
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
            })();
        });
        
    // Destroy Flirty Crud Action 
    
        app.delete('/flirtyquotes/delete/:flirtyquote_id', (req, res) => {
        (async () => {
            try {
                const document = db.collection('firtyquotes').doc(req.params.flirtyquote_id);
                await document.delete();
                return res.status(200).send();
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
            })();
        });


    
exports.app = functions.https.onRequest(app);

