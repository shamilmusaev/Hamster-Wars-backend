const admin = require("firebase-admin");

let serviceAccount;
if (process.env.PRIVATE_KEY) {
  serviceAccount = JSON.parse(process.env.PRIVATE_KEY)
}
else {
  serviceAccount = require("./hamstrar-52944-firebase-adminsdk-ho04u-864ae41da8.json");
}




admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });


function getDatabase() {

return admin.firestore();

}



module.exports = getDatabase;
