const AmazonCognitoIdentity = require('amazon-cognito-identity-js')
require('dotenv').config()


async function a (user) {
    var authenticationData = {
        Username : user.username,
        Password : user.password
    };
    
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    
    var poolData = { 
        UserPoolId : process.env.USER_POOL_ID,
        ClientId : process.env.CLIENT_ID
    }

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    
    var userData = {
        Username : user.username,
        Pool : userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    
    return cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            var idToken = result.idToken.jwtToken;
            console.log(idToken)
            return idToken
        },
        onFailure: function(err) {
            console.log(err);
			throw Error(err);
        },
    })
}

a(require('./userEx'))