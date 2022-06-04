const axios = require('axios');

module.exports = async (user, emotion) => {
        console.log(user, emotion)
    return await axios.post(
        process.env.API_ROUTE + '/emotions', 
        JSON.stringify(emotion),
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
        });
}