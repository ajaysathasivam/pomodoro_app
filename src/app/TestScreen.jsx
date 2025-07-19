import { useNavigation } from '@react-navigation/native';
import { Dimensions, Text, View } from 'react-native';

const TestScreen = () => {
    const { height, width } = Dimensions.get('window');
    const navigation = useNavigation();

    return (
        <View>
            <View style={{
                backgroundColor: 'rgba(240, 248, 255, 0.9)', // soft aliceblue with transparency
                padding: 20,
                borderRadius: 16,
                elevation: 4,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                margin: 16,
            }}>
                <Text style={{
                    fontSize: 16,
                    lineHeight: 24,
                    color: '#333',
                    fontWeight: '500',
                }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit sunt eveniet deserunt doloremque, error excepturi illo vel voluptatum quam, nesciunt deleniti maxime fugiat, eum ea? Laborum tempore expedita iusto!
                </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, height: 200, backgroundColor: 'red' }} />
                <View style={{ flex: 2, height: 200, backgroundColor: 'blue' }} />
            </View>


            <Text>TestScreen</Text>

            <Link href="/youtubeHome" asChild>
                <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
                    <Text style={styles.text}>Go to YouTube Home</Text>
                </Pressable>
            </Link>
        </View>
    )
}

export default TestScreen

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1E40AF', // blue-800
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
});