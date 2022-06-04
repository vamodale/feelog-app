import React from 'react';
import { Text, SafeAreaView, Animated } from 'react-native';
import { styles } from './styles';
import LottieView from 'lottie-react-native';
import dog from '../../assets/dog.json'
import FeelogLogoSmall from '../../images/feelogLogoSmall';
import { useAuth } from '../../hooks/auth2';

export function Home() {
    const { user } = useAuth()

    return (
        <Animated.View style={styles.container}>
            <FeelogLogoSmall style={styles.image} />

            <Text style={styles.positionText}>
                <Text style={styles.title}>
                    Olá {' '}
                    <Text style={styles.user}>
                        {user.name.split(' ')[0]}, {'\n'}
                    </Text>

                    que tal registrar sua  {'\n'}
                    emoção de hoje?
                </Text>
            </Text>

            <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
                <LottieView style={styles.animation} resizeMode='contain' source={dog} autoPlay loop />
            </SafeAreaView>
        </Animated.View>
    );
}