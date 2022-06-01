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

export function Profile() {
	var userName = 'Fernando\nPessoa'
	var userOld = 20
	var userGender = 'Masculino'
	var userNotification = '22:30'
	var userProfilePicture = profile

	return (
		<View style={styles.container}>
			<ButtonBack />

			<View style={styles.profile}>
				<View style={styles.persona}>
					<LinearGradient
						start={[0.2, 0.2]}
						end={[0.8, 0.8]}
						colors={
							Platform.OS === 'ios' ?
								['#00888D', '#8F009A', '#00C463', '#4DA6FF', '#FFFFEB', '#FFE478', '#FFA34C', '#FF4E41', '#FF4E41',] :
								['#00888D', '#00C463', '#4DA6FF', '#FFFFEB', '#FFE478', '#FFA34C', '#FF4E41', '#FF4E41', '#8F009A',]}
						style={{ width: '100%', height: '100%', borderRadius: 64}}
					>
						<Image source={userProfilePicture} style={styles.picture} />
					</LinearGradient>
				</View>
				<Text style={styles.userName}>
					{userName}
				</Text>
			</View>

			<View style={styles.infoContainer}>
				<View style={styles.infoRow}>
					<Text style={styles.info}>
						Idade
					</Text>
					<Pressable style={styles.pressable}>
						<Text style={styles.userInfo}>
							{userOld}
						</Text>
						<MaterialIcons name="cake" size={24} color="white" />
					</Pressable>
				</View>

				<View style={styles.infoRow} >
					<Text style={styles.info}>
						Gênero
					</Text>

					<Pressable style={styles.pressable}>
						<Text style={styles.userInfo}>
							{userGender}
						</Text>
						<MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
					</Pressable>
				</View>

				<View style={styles.infoRow}>
					<Text style={styles.info}>
						Notificação
					</Text>
					<Pressable style={styles.pressable}>
						<Text style={styles.userInfo}>
							{userNotification}
						</Text>
						<MaterialIcons name="access-time" size={24} color="white" />
					</Pressable>
				</View>
			</View>
		</View>
	);
}