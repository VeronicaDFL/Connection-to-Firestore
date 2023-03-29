//Import the tools from firebase-admin 

import { initializeApp, cert } from "firebase-admin/app";//we use to connect to project
import { getFirestore } from "firebase-admin/firestore";//we use to connect to firestore


//import our credentials from a secret file
import { credentials } from "./credentials.js";


//Connect to our firebase project 
initializeApp({
  credential: cert(credentials)

});

//Connect to firestore-database

const db = getFirestore();

//Add a product to our products collection

const candy = {

    name: "Skittles",
    unitPrize: "3.99",
    size: "16 oz",
    color: "green",
    inventory: 144,
    productNumber: 7,
}

db.collection('products').add(candy)
.then(doc => console.log("addex doc: " + doc.id))
.catch(err => console.log(err))