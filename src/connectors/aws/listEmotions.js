const axios = require('axios');
require('dotenv').config()


module.exports = async (user) => {
    return await axios.get(
        process.env.API_ROUTE + '/emotions',
        {
        headers: {
            'Authorization': user.authToken
        }
        })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.error(error);
            throw Error(error)
        });
}
