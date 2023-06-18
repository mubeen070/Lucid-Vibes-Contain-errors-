import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import pins from '../ScreenData/ItemData';
import Card from './Card';
import { useState } from 'react';


const ProfilePage = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState(pins);

    const onRefresh = () => {
        setRefreshing(true);
        const updated = [...pins];
        setData(updated);
        setRefreshing(false);
    };

    return (
        <>
            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} title='Pull down to refresh!' />
            }>
                <SafeAreaView style={styles.container}>
                    <Image
                        source={require('../assets/cover.jpg')}
                        style={styles.coverPicture}
                    />
                    <SafeAreaView style={styles.container2}>

                        <Image
                            source={require('../assets/profile.jpg')}
                            style={styles.profilePicture}
                        />
                        <Text style={styles.name}>Lucid Vibes</Text>
                        <Text style={styles.username}>
                            @lucidvibes
                        </Text>
                        <Text style={styles.bio}>
                            God's Plan!
                        </Text>
                        <SafeAreaView style={styles.container}>
                            <SafeAreaView style={styles.statsContainer}>
                                <SafeAreaView style={styles.statsItem}>
                                    <Text style={styles.statsCount}>2M</Text>
                                    <Text style={styles.statsLabel}>Followers</Text>
                                </SafeAreaView>
                                <SafeAreaView style={styles.statsItem}>
                                    <Text style={styles.statsCount}>1</Text>
                                    <Text style={styles.statsLabel}>Following</Text>
                                </SafeAreaView>
                                <SafeAreaView style={styles.statsItem}>
                                    <Text style={styles.statsCount}>128</Text>
                                    <Text style={styles.statsLabel}>Posts</Text>
                                </SafeAreaView>
                            </SafeAreaView>
                            <SafeAreaView>

                                {data.map((pin) => (
                                    <Card id={pin.id} image={pin.image} title={pin.title} description={pin.description} />
                                ))}
                            </SafeAreaView>
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 0,
        paddingHorizontal: 0,
    },
    container2: {
        alignItems: 'center',
        bottom: 80,
        width: '100%',
    },
    coverPicture: {
        width: '100%',
        height: 200,
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    username: {
        fontSize: 14,
        color: 'grey',
        marginBottom: 10,
    },
    bio: {
        textAlign: 'center',
        marginBottom: 20,
    },
    statsContainer: {
        flexDirection: 'row',
    },
    statsItem: {
        alignItems: 'center',
        marginHorizontal: 20
    },
    statsCount: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    statsLabel: {
        fontSize: 14,
        color: 'gray',
    },
    logout: {
        left: 160,
        fontSize: 18,
        fontWeight: 500,
        padding: 5
    }
});

export default ProfilePage;
