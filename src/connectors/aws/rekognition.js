import "react-native-get-random-values";
import "react-native-url-polyfill/auto";
import {RekognitionClient, DetectFacesCommand} from '@aws-sdk/client-rekognition'
var toUint8Array = require('base64-to-uint8array')

const rekognitionClient = new RekognitionClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const EMOTION_ENUM = {
    HAPPY: 1,
    SURPRISED: 2,
    FEAR: 3,
    SAD: 4,
    CALM: 5,
    DISGUSTED: 6,
    CONFUSED: 7,
    ANGRY: 8
}

async function getEmotion(image) {
    var params = {
      Image: {
        Bytes: toUint8Array(image),
      },
      Attributes: ["ALL"],
    };

    const data = await rekognitionClient.send(new DetectFacesCommand(params));
    console.log(EMOTION_ENUM[data.FaceDetails[0].Emotions[0].Type])
    return EMOTION_ENUM[data.FaceDetails[0].Emotions[0].Type];

};

export default getEmotion