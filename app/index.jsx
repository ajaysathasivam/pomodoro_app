import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100vh",
        backgroundColor: '#f5f6fa',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 24,
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#222',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 32,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007aff',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default function GetStartedScreen({ }) {
    const handleGetStarted = () => {
        alert()
        // Navigate to another screen, e.g., Home

    };


    return (
        <View style={styles.content} >
            <Text style={styles.title}>Welcome to Clock App</Text>
            <Text style={styles.subtitle}>Track time with simplicity</Text>
            <Link style={{ ...styles.button, ...styles.buttonText }} href={{ pathname: 'clockScreen', params: { name: 'Bacon' } }}>Get Started</Link>
        </View>
    );
}

