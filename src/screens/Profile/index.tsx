import React from "react";
import {
	Text,
	View,
	Image,
	Pressable,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import clock from '../../assets/clock.svg'
import arrow from '../../assets/arrow-down.svg'
import cake from '../../assets/cake.svg'
import profile from '../../assets/profile.png'
import { styles } from './styles';
import { FooterMenu } from '../../components/FooterMenu';

export function Profile() {
	var userName = 'Gustavo Reolon'
	var userOld = 20
	var userGender = 'Masc'
	var userNotification = '22:30'

	return (
		<View style={styles.container}>
			{/* TODO alinhar corretamente esses componentes todos */}
			{/* TODO deixar as variáveis e a foto do perfil dinâmicas */}

			<View style={styles.profile}>
				<View style={styles.persona}>
					<LinearGradient
						start={[0.2, 0.2]}
						end={[0.8, 0.8]}
						colors={['#00888D', '#8F009A', '#00C463', '#4DA6FF', '#FFFFEB', '#FFE478', '#FFA34C', '#FF4E41', '#FF4E41',]}
						style={{ width: '100%', height: '100%', borderRadius: 64 }}
					>
						<Image source={profile} style={styles.picture} />
					</LinearGradient>
				</View>
				<Text style={styles.userName}>
					{userName}
				</Text>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.info}>
					Idade
				</Text>
				<Pressable style={styles.pressable}>
					<Text style={styles.userInfo}>
						{userOld}
						<Image source={cake} style={styles.icon} />
					</Text>
				</Pressable>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.info}>
					Gênero
				</Text>
				<Pressable style={styles.pressable}>
					<Text style={styles.userInfo}>
						{userGender}
						<Image source={arrow} style={styles.icon} />
					</Text>
				</Pressable>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.info}>
					Notificação
				</Text>
				<Pressable style={styles.pressable}>
					<Text style={styles.userInfo}>
						{userNotification}
						<Image source={clock} style={styles.icon} />
					</Text>
				</Pressable>
			</View>

			<FooterMenu />

		</View>
	);
}