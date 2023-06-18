import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image, ScrollView } from 'react-native';
import Card from './Card';
import pins from '../ScreenData/ItemData';

const HomeScreen = ({ navigation }) => {

   
    return (
        <SafeAreaView style={styles.container}>
            
            <ScrollView>
                {pins.map((pin) => (
                    <Card id={pin.id} image={pin.image} title={pin.title} description={pin.description} />
                ))
                }
            </ScrollView >
        </SafeAreaView >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 0,
        paddingHorizontal: 0,
    },
    logout: {
        left: 160
    }
});

export default HomeScreen;
