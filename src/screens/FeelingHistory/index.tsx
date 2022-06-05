import React from "react";
import {
	Text,
	View,
	Image,
	Pressable,
	Platform
} from 'react-native';


import profile from '../../assets/profile.png';

import { styles } from './styles';
import { ButtonBack } from '../../components/ButtonBack';
import moment from "moment";
import { theme } from "../../global/styles/theme";

export function FeelingHistory({route}) {
	const feelings = ["Feliz", "Surpreso", "Medo", "Triste", "Calmo", "Nojo", "Confuso", "Raiva"]
	
	const { emotionObject } = route.params;
	return (
		<View style={styles.container}>
			<ButtonBack />

			<View style={styles.profile}>
				<View style={styles.persona}>
					<View style={{ width: '100%', height: '100%', borderRadius: 84, backgroundColor: theme.colors[emotionObject.Emotion] }}>
						<Image source={{uri: `${process.env.AWS_BUCKET_BASE_URL}/${emotionObject.DailyEmotionId}.jpg`}} style={styles.picture} />
					</View>
				</View>

				<View style={styles.data}>
					<Text style={styles.year}>
						{moment(emotionObject.Created_at).format('ddd').charAt(0).toUpperCase() + moment(emotionObject.Created_at).format('ddd').slice(1)}
					</Text>

					<Text style={styles.date}>
						{moment(emotionObject.Created_at).format(`DD [de] MMMM, YYYY`)}
					</Text>

					<View style={[styles.emotion, {borderColor: theme.colors[emotionObject.Emotion]}]}>
						<Text style={styles.emotionDescription}>
							{feelings[parseInt(emotionObject.Emotion)-1]}
						</Text>
					</View>
				</View>
			</View>

			<View style={styles.box}>
				<Text style={styles.description}>
					{emotionObject.Message}
				</Text>
			</View>
		</View>
	);
}