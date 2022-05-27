import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../global/styles/theme';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../components/FooterMenu/styles';

import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';
import { FeelingRecord } from '../screens/FeelingRecord';
import { Profile } from "../screens/Profile";
import { Loading } from '../screens/Loading';
import { View } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

const CustomTabBarButtom =({children, onPress}) => (
	<TouchableOpacity
		onPress={onPress}
	>
            <View style={styles.addWrapper}>
                <LinearGradient
                    start={[0.2, 0.2]}
                    end={[0.8, 0.8]}
                    colors={['#00888D', '#8F009A', '#00C463', '#4DA6FF', '#FFFFEB', '#FFE478', '#FFA34C', '#FF4E41', '#FF4E41',]}
                    style={{ width: '100%', height: '100%', borderRadius: 34 }}

                >
                    <RectButton style={styles.addButton}>
                        <MaterialIcons name="add" size={24} color="white" />
                    </RectButton>
                </LinearGradient>
            </View>
	</TouchableOpacity>
)

export function AppRoutes() {
    return (
		<Navigator
			initialRouteName='Home'
			screenOptions={{ 
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					position: 'absolute',
					borderRadius: 32,
					left: 32,
					right: 32,
					bottom: 48,
					height: 64,
					borderTopWidth: 2, // overwrite of tabComponent
					borderTopColor: theme.colors.white, // overwrite of tabComponent
					borderWidth: 2,
					borderColor: theme.colors.white,
					backgroundColor: theme.colors.primary,
					paddingHorizontal: 16,
					margin: 0,
					paddingBottom: 0,
				}
			}}
        >
			<Screen 
				name="Home" 
				component={Home} 
				options={{
					tabBarItemStyle: {
						display: "none",
					}
				}}
			/>
			<Screen 
				name="Profile" 
				component={Profile} 
				options={{
					tabBarIcon: (({ focused }) => 
						focused 
						? <MaterialIcons name="person" size={24} color="white"/> 
						: <MaterialIcons name="person-outline" size={24} color="white" />
					)
				}}
			/>
			<Screen 
				name="Loading" 
				component={Loading} 
				options={{
					tabBarButton: (props) => (
						//@ts-ignore
						<CustomTabBarButtom {...props} />
					)
				}}
			/>
			<Screen 
				name="FeelingRecord" 
				component={FeelingRecord} 
				options={{
					tabBarIcon: (({ focused }) => 
						focused 
						? <MaterialCommunityIcons name="calendar-blank" size={24} color="white"/> 
						: <MaterialCommunityIcons name="calendar-blank-outline" size={24} color="white" />
					)
				}}
			/>
		</Navigator>
    )
}