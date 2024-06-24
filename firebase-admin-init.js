// firebase-admin-init.js
const admin = require('firebase-admin');
const serviceAccount = require('./seeknook-dev-firebase-adminsdk-d5nsy-8d99b78637.json'); // Replace with the path to your service account key file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
