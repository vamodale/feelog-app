const axios = require('axios');
require('dotenv').config()


module.exports = async (user, emotion) => {
    return await axios.post(
        process.env.API_ROUTE + '/emotions', 
        emotion,
        {
        headers: {
            'Authorization': user.authToken
        }
        })
        .then(res => {
            console.log(`statusCode: ${res.status}`);
            console.log(res.data);
            return res.data;
        })
        .catch(error => {
            console.error(error);
            throw Error(error)
        });
}