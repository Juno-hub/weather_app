import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#283048", "#859398"]
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient: ["#00416A", "#E4E5E6"]
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#4b6cb7", "#182848"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#acb6e5", "#86fde8"]
    },
    Atmosphere: {
        iconName: "weather-fog",
        gradient: ["#FFA17F", "#00223E"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF5F6D", "#FFC371"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
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
            <View style={styles.halfContainer}>
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
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});