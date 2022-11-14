const express = require("express");
const app = express();
const cors = require("cors");
const firebase = require('firebase/app');
const PORT = 8000;
const {getDatabase, ref, get } = require('firebase/database');

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyADtb8YcHBNJBb7ciA27K6PSUmNHn2ZMfc",
    authDomain: "smart-parking-a60aa.firebaseapp.com",
    databaseURL: "https://smart-parking-a60aa-default-rtdb.firebaseio.com",
    projectId: "smart-parking-a60aa",
    storageBucket: "smart-parking-a60aa.appspot.com",
    messagingSenderId: "498658094055",
    appId: "1:498658094055:web:82c217cddfa56159ef2b42",
    measurementId: "G-DYHG8YWCW3"
}, 'firebaseApp');

const db = getDatabase(firebaseApp);

app.use(cors());

app.get('/getSlots', async function(req, res){
    // Get a database reference to our posts
    await get(ref(db, `parking_slots`)).then((snapshot) => {
        if (snapshot.exists()) {
            res.send(JSON.stringify({slots:snapshot.val()}));
        }
    });
})

app.listen(PORT, () => {
    console.log("server is running");
})