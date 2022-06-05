const axios = require('axios');
import AsyncStorage from '@react-native-async-storage/async-storage';


export default async () => {
    const token = await AsyncStorage.getItem("@feelog:token");

    if (!token) return    

    return await axios.get(
        process.env.API_ROUTE + '/emotions',
        {
        headers: {
            'Authorization': token
        }
        })
        .then(res => {
            return res.data.data;
        })
        .catch(error => {
            console.log(error.response);
        });
}
