const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

// Load the Firebase config from environment variables
const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: serviceAccount.project_id,
    clientEmail: serviceAccount.client_email,
    // Replace literal \n with actual newlines
    privateKey: serviceAccount.private_key.replace(/\\n/g, '\n'),
  }),
});

module.exports = admin;
