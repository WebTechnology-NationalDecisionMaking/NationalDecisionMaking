// Fetch the service account key JSON file contents
const serviceAccount = require("./serviceAccountKey.json");
const admin = require("firebase-admin");


if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://jmjeditor-76183-default-rtdb.firebaseio.com"
    });

}

const db = admin.database();

module.exports.db = db;