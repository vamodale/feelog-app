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

export function FeelingHistory() {
	var year = 2022
	var day = 1
	var month = "Maio"
	var userProfilePicture = profile
	var emotion = "Triste"
	var text = "texto bla bla bla bla bla bla"

	return (
		<View style={styles.container}>
			<ButtonBack />

			<View style={styles.profile}>
				<View style={styles.persona}>
					<View style={{ width: '100%', height: '100%', borderRadius: 84, backgroundColor: '#4DA6FF' }}>
						<Image source={userProfilePicture} style={styles.picture} />
					</View>
				</View>

				<View style={styles.data}>
					<Text style={styles.year}>
						{year}
					</Text>

					<Text style={styles.date}>
						{day}, {month}
					</Text>

					<View style={styles.emotion}>
						<Text style={styles.emotionDescription}>
							{emotion}
						</Text>
					</View>
				</View>
			</View>

			<View style={styles.box}>
				<Text style={styles.description}>
					{text}
				</Text>
			</View>
		</View>
	);
}