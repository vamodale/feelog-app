import React from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import Feelog from '../../assets/feelog.png';
import Lottie from 'lottie-react-native';
import dog from '../../assets/dog.json'

export function Home() {
    return (
        <View style={styles.container}>
            <Image
                source={Feelog}
                style={styles.image}
            />

            <Text style={styles.positionText}>
                <Text style={styles.title}>
                    Olá {' '}
                    <Text style={styles.subtitle}>
                        Gustavo, {'\n'}
                    </Text>

                    que tal registrar sua  {'\n'}
                    emoção de hoje?
                </Text>
            </Text>

            <SafeAreaView style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie resizeMode='contain' source={dog} autoPlay loop />
            </SafeAreaView>
        </View>
    );
}