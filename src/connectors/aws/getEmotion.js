const rek = require('@aws-sdk/client-rekognition')
const provider = require('@aws-sdk/credential-provider-env')
var toUint8Array = require('base64-to-uint8array')
require('dotenv').config()

fromEnv = provider.fromEnv

var RekognitionClient = rek.RekognitionClient
var DetectFacesCommand = rek.DetectFacesCommand

const fs = require('fs')


const REGION = "us-east-1";
const rekognitionClient = new RekognitionClient({
  region: REGION,
  credentials: fromEnv(),
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

module.exports = async (image) => {
    var params = {
      Image: {
        Bytes: toUint8Array(image),
      },
      Attributes: ["ALL"],
    };

    try {
        const data = await rekognitionClient.send(new DetectFacesCommand(params));
        return EMOTION_ENUM[data.FaceDetails[0].Emotions[0].Type];

    } catch (err) {
        console.log("Error", err);
    }
};
