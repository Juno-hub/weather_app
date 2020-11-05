import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#283048", "#859398"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient: ["#00416A", "#E4E5E6"],
        title: "Drizzle",
        subtitle: "Is like rain"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#4b6cb7", "#182848"],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#acb6e5", "#86fde8"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere: {
        iconName: "weather-fog",
        gradient: ["#FFA17F", "#00223E"],
        title: "Fog, Mist...",
        subtitle: "Thanks a lot China"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF5F6D", "#FFC371"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Clouds",
        subtitle: "I know, fucking boring"
    }
}

export default function Weather({ temp, condition }){
    return (
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}
            >
                <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
            name={weatherOptions[condition].iconName} 
            size={96} 
            color="white" 
            />
            <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
            </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds"
    ]).isRequired
};  

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"   
    },
    subtitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600",
        textAlign: "left"
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 40,
        alignItems: "flex-start",
        justifyContent: "center"
    }
});