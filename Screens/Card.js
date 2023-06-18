import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Card = (props) => {

    return (

        <TouchableOpacity key={props.id} style={styles.container}>
            <View style={styles.pinContainer}>
                <Image source={props.image} style={styles.image} />
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}>{props.description}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    continer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    }
    , pinContainer: {
        width: 350,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    image: {
        borderRadius: 30,
        width: '100%',
        height: 500,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        color: '#888',
        marginTop: 5,
    },
});

export default Card;
