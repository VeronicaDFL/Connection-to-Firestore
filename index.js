//Import the tools from firebase-admin 

import { initializeApp, cert } from "firebase-admin/app";//we use to connect to project
import { getFirestore } from "firebase-admin/firestore";//we use to connect to firestore


//import our credentials from a secret file stored in the other file
import { credentials } from "./credentials.js";


//Connect to our firebase project 
initializeApp({
    credential: cert(credentials)
});// till this line to use for all new

//Connect to firestore-database creating  variable db,db now is connected to database thru getFirestore

const db = getFirestore()

//Add a product to our products collection

const candy2 = {    ///variable name doesn't matter,it is used instead to repeat all the object lines

    name: "Twix",
    unitPrize: "3.99",
    size: "16 oz",
    color: "gold",
    inventory: 288,
    productNumber: 2,
}
    // How to add a document to Firestore
    //Documents can only be inside collections
    // go to dotabase-go in this collection-add candy2 (object name:Unit prize:size:color:inventory:productnumber)

    // db.collection('products').add(candy2)//While we're waiting for the promise..a promise is a special object in js can resolved later while other tasks are running ,it's either going to resolve or get back with an error
    // .then((doc) => {
    //     console.log("added doc: " + doc.id)// if resolve we get .then otherwise is going  to .catch
    // //I can be sure after .then that the first project was completed succefully
    //  })
    // .catch(err => console.log(err))

//How to update a document in Firestore:
db.collection('products').doc('yH3PeUs9QjIzvHoUgO6e').update({
    inventory: 555,
    customerFavorite: true
})//if it doesn't exist it will add it.

//How to read a document from firestore:

db.collection('products').doc('yH3PeUs9QjIzvHoUgO6e').get()//if you want to delete the doc .delete
    .then(doc => {
        console.log(doc.data())

    })
    .catch(console.log)


//How to get a whole collection:

db.collection('products').get()
    .then(collection => {
        const productList = collection.docs.map(doc => ({ ...doc.data(), id: doc.id }));//taking an array and go thru each item and get back with each object
        console.log(productList);
    })
    .catch(console.log);

//we could console.table in order to display a tab.