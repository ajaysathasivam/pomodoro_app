import { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';

const Settings = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Settings</Text>
            <View style={styles.settingRow}>
                <Text style={styles.label}>Dark Mode</Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={setIsDarkMode}
                />
            </View>
            <View style={styles.settingRow}>
                <Text style={styles.label}>Enable Notifications</Text>
                <Switch
                    value={notificationsEnabled}
                    onValueChange={setNotificationsEnabled}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff'
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 32,
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    label: {
        fontSize: 18,
    },
});

export default Settings;