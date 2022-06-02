import React from "react";
import {
	Text,
	View,
	Image,
	Pressable,
	Platform
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

import profile from '../../assets/profile.png';

import { styles } from './styles';
import { ButtonBack } from '../../components/ButtonBack';
import moment from "moment";

export function FeelingHistory({emotionObject}) {
	const feelings = ["Feliz", "Surpreso", "Medo", "Triste", "Calmo", "Nojo", "Confuso", "Raiva"]

	return (
		<View style={styles.container}>
			<ButtonBack />

			<View style={styles.profile}>
				<View style={styles.persona}>
					<View style={{ width: '100%', height: '100%', borderRadius: 84, backgroundColor: '#4DA6FF' }}>
						<Image source={{uri: emotionObject.Picture}} style={styles.picture} />
					</View>
				</View>

				<View style={styles.data}>
					<Text style={styles.year}>
						{moment(emotionObject.Created_at).format('YYYY')}
					</Text>

					<Text style={styles.date}>
						{moment(emotionObject.Created_at).format('DD, MM')}
					</Text>

					<View style={styles.emotion}>
						<Text style={styles.emotionDescription}>
							{feelings[parseInt(emotionObject.Emotion)+1]}
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