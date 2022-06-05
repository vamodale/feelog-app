const axios = require('axios');
var toUint8Array = require('base64-to-uint8array')
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import AsyncStorage from '@react-native-async-storage/async-storage';
const client = new S3Client({ region: process.env.AWS_REGION, credentials: {accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY } })

export default async (emotion, picture) => {
    const token = await AsyncStorage.getItem("@feelog:token");

    if (!token) return    
    
    return await axios.post(
        process.env.API_ROUTE + '/emotions', 
        JSON.stringify(emotion),
        {
        headers: {
            'Authorization': token
        }
        })
        .then(async res => {
            const command = new PutObjectCommand({
                Bucket: 'feelog',
                Key: `${res.data.DailyEmotionId}.jpg`, 
                Body: toUint8Array(picture),
                ContentType: 'image/jpeg'
            })
        
            await client.send(command)
            return res.data;
        })
        .catch(error => {
            console.error(error.response);
            return {}
        });
}