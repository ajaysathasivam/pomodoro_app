import { StyleSheet, View } from 'react-native'

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        width: 200,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})

const Challenge_1 = ({ children, addstyle }) => {
    return (
        <View style={{...style.container,...addstyle, }}>
            { children }
        </View >
    )
}

export default Challenge_1