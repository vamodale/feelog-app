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

import { useAuth } from '../../hooks/auth2';

import { styles } from './styles';
import { ButtonBack } from '../../components/ButtonBack';

export function Profile() {
	const {user, signOut} = useAuth();
	const userName = user.name.replace(" ", "\n")
	const userOld = 20
	const userNotification = '22:30'
	const userProfilePicture = user.photo

	return (
		<View style={styles.container}>
			<ButtonBack />

			<View style={styles.profile}>
				<View style={styles.persona}>
					<LinearGradient
						start={[0.2, 0.2]}
						end={[0.8, 0.8]}
						colors={['#00888D', '#00C463', '#4DA6FF', '#FFFFEB', '#FFE478', '#FFA34C', '#FF4E41', '#FF4E41', '#8F009A',]}
						style={{ width: '100%', height: '100%', borderRadius: 64}}
					>
						<Image source={{uri: userProfilePicture}} style={styles.picture} />
					</LinearGradient>
				</View>
				<Text style={styles.userName}>
					{userName}
				</Text>
			</View>

			<View style={styles.infoContainer}>
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

				<View style={styles.infoRow}>
					<Pressable style={styles.pressable} onPress={signOut}>
						<Text style={styles.userInfo}>SignOut</Text>
					</Pressable>
				</View>
					
			</View>
		</View>
	);
}