import React from "react";
import {
	Text,
	View,
	Image,
	TextInput,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

import profile from '../../assets/profile.png';

import { styles } from './styles';
import { FooterMenu } from '../../components/FooterMenu';
import { ButtonBack } from '../../components/ButtonBack';

export function DayView() {
	
	var userProfilePicture = profile
	var textoTop = 'Esse dia tava tristão, levei um fora de uma dama'

	return (
		<View style={styles.container}>
			{/* TODO deixar as variáveis e a foto do perfil dinâmicas */}

			<View style={styles.back}>
				<ButtonBack />
			</ View>

			<View style={styles.profile}>
				<View style={styles.persona}>
					<LinearGradient
						start={[0.8, 0.8]}
						end={[0.2, 0.2]}
						colors={['#4DA6FF', '#4DA6FF']}
						style={{ width: '100%', height: '100%', borderRadius: 84 }}
					>
						<Image source={userProfilePicture} style={styles.picture} />
					</LinearGradient>
				</View>
				<Text style={styles.year}>
					2022
				</Text>
				<Text style={styles.day}>
					1, maio
				</Text>
				<View style={styles.day}>
					<Text style={styles.feelingInfo}>
						Triste
					</Text>
				</View>
		
			</View>


            <View style={styles.input}>
                <View style={styles.labels}>
                    <TextInput
                        multiline
                        textAlignVertical="top"
                        numberOfLines={10}
                        placeholder={textoTop}
                        keyboardType='default'
                        placeholderTextColor="#FFFFFF"
                        maxLength={300}
                        style={[{ color: '#FFFFFF', fontFamily: theme.fonts.title300, maxHeight: 229, height: 229 }]}
                    />
                </View>
            </View>

			<FooterMenu />

		</View>
	);
}