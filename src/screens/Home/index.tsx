import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import LottieView from 'lottie-react-native';
import dog from '../../assets/dog.json'
import FeelogLogoSmall from '../../images/feelogLogoSmall';
import { FooterMenu } from '../../components/FooterMenu';

export function Home() {

    return (
        <View style={styles.container}>
            <FeelogLogoSmall style={styles.image} />

            <Text style={styles.positionText}>
                <Text style={styles.title}>
                    Olá {' '}
                    <Text style={styles.user}>
                        {'user'}, {'\n'}
                    </Text>

                    que tal registrar sua  {'\n'}
                    emoção de hoje?
                </Text>
            </Text>

            <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
                <LottieView style={styles.animation} resizeMode='contain' source={dog} autoPlay loop />
            </SafeAreaView>
            <FooterMenu />
        </View>
    );
}