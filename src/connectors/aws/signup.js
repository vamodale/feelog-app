const AmazonCognitoIdentity = require('amazon-cognito-identity-js')


module.exports = async (user) => {
  var poolData = { 
    UserPoolId : process.env.USER_POOL_ID,
    ClientId : process.env.CLIENT_ID
  }
  
  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  
  var attributeList = [
    {
      Name: 'birthdate', 
      Value: user.birthdate
    },
    {
      Name: 'gender', 
      Value: user.gender
    },
    {
      Name: 'given_name', 
      Value: user.given_name
    },
    {
      Name: 'middle_name', 
      Value: user.middle_name
    },
    {
      Name: 'picture',
      Value: user.picture
    },
    {
      Name: 'email', 
      Value: user.email
    },
    {
      Name: 'custom:notification_time',
      Value: user.notification_time
    }
  ];
  
  return userPool.signUp(user.username, user.password, attributeList, null,(
    err,
    result
  ) => {
    if (err) {
      console.log(err.message || JSON.stringify(err));
      throw Error(err)
    }
    var cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
    return {'success': true}
  });
}