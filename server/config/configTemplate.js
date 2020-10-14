//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password
// rename this file to config.js 
// navigate to mongodb atlas to grab the uri, admin password and db name are in the slack
module.exports = {
    db: {
        uri: 'mongodb+srv://jjsap-admin:jjsap-password@laundr-app-db.lytzb.mongodb.net/Laundr?retryWrites=true&w=majority', //place the URI of your mongo database here.
    }
};
