const AmazonCognitoIdentity = require('amazon-cognito-identity-js')

module.exports = async (user, code) => {
	var poolData = { 
        UserPoolId : process.env.USER_POOL_ID,
        ClientId : process.env.CLIENT_ID
    }
	
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	var userData = {
		Username: user.username,
		Pool: userPool,
	};
	
	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
	
	return cognitoUser.confirmRegistration(code, true, (err, result) => {
		if (err) {
			console.log(err.message || JSON.stringify(err));
			throw Error(err);
		}
		console.log('call result: ' + result);
		return {'succes': true}
	});
}