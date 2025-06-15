import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>🕒 Clock</Text>

            <View style={styles.nav}>
                <NavLink label="Home" />
                <NavLink label="Stats" />
                <NavLink label="Settings" />
            </View>
        </View>
    );
}

function NavLink({label}) {
    return (
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
            <Text style={styles.link}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 14,
        paddingHorizontal: 24,
        backgroundColor: '#ffffff',
        borderBottomWidth: Platform.OS === 'web' ? 1 : 0,
        borderBottomColor: '#eee',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
        width:Platform.OS === 'web'?"100%":'100vw'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#222',
    },
    nav: {
        flexDirection: 'row',
        gap: 16, // web only; workaround below for RN
    },
    navItem: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    link: {
        fontSize: 16,
        color: '#007aff',
        fontWeight: '500',
    },
});
