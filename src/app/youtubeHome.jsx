import { Dimensions, FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const StatusBar = () => {
    return (
        <View style={StatusBarStyles.container}>
            <Text style={StatusBarStyles.logo}>Logo</Text>

            <View style={StatusBarStyles.rightIcons}>
                <Text style={StatusBarStyles.icon}>⚙️</Text>
                <Text style={StatusBarStyles.icon}>🔍</Text>
            </View>
        </View>
    );
}
const QuickMenu = ({ item, onPress = () => { } }) => {

    return (
        <Pressable style={QuickMenuBtn.btn} onPress={onPress}>
            <Text style={QuickMenuBtn.btnText}>{item?.name}</Text>
        </Pressable>
    );
};
const ShortsMenu = () => {
    return (
        <View style={StatusBarStyles.container}>
            <Text style={StatusBarStyles.logo}>Shorts</Text>

            <View style={StatusBarStyles.rightIcons}>
                <Text style={StatusBarStyles.icon}>⚙️</Text>
            </View>
        </View>
    )
}
const screenWidth = Dimensions.get('window').width;
const imageWidth = (screenWidth - 18) / 2; // 16px padding on each side + 8px gap
const shortsData = [
    {
        id: '1',
        title: 'Cool Edit',
        image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68',
    },
    {
        id: '2',
        title: 'Code Vibes',
        image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f',
    },
    {
        id: '3',
        title: 'Street Art',
        image: 'https://images.unsplash.com/photo-1579546928683-5e74a3cdbd41',
    },
    {
        id: '4',
        title: 'Gamer Zone',
        image: 'https://images.unsplash.com/photo-1587202372775-e71c0b2d88a7',
    },

];
const videoData = [
    {
        id: '1',
        title: 'React Native Crash Course',
        thumbnail: 'https://i.ytimg.com/vi/0-S5a0eXPoc/hqdefault.jpg',
        channelName: 'CodeAcademy',
        channelAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        views: '1.2M views',
        uploaded: '3 weeks ago',
    },
    {
        id: '2',
        title: 'Advanced CSS Grid Layouts',
        thumbnail: 'https://i.ytimg.com/vi/7kVeCqQCxlk/hqdefault.jpg',
        channelName: 'DesignHub',
        channelAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        views: '850K views',
        uploaded: '1 month ago',
    },
    // Add more as needed
];

const ShortsGrid = () => {
    return (
        <FlatList
            data={shortsData}
            renderItem={({ item }) => (
                <View style={shortStyle.card}>
                    <Image source={{ uri: item.image }} style={shortStyle.image} />
                    <View style={{ backgroundColor: "#1a1a1a" }}>
                        <Text style={shortStyle.title}>{item.title}</Text>
                    </View>
                </View>
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={shortStyle.row}
            contentContainerStyle={shortStyle.container}
        />
    );
};
const YouTubeVideo = ({ video }) => {
    return (
        <View style={videoStyle.container}>
            <Image source={{ uri: video.thumbnail }} style={videoStyle.thumbnail} />

            <View style={videoStyle.infoRow}>
                <Image source={{ uri: video.channelAvatar }} style={videoStyle.avatar} />

                <View style={videoStyle.textContainer}>
                    <Text style={videoStyle.title} numberOfLines={2}>{video.title}</Text>
                    <Text style={videoStyle.meta}>
                        {video.channelName} · {video.views} · {video.uploaded}
                    </Text>
                </View>
            </View>
        </View>
    );
};
const categories = [
    { id: '1', name: 'Editing' },
    { id: '2', name: 'Programming' },
    { id: '3', name: 'Gaming' },
    { id: '4', name: 'Music' },
    { id: '5', name: 'Technology' },
    { id: '6', name: 'Fitness' },
    { id: '7', name: 'News' },
    { id: '8', name: 'Education' },
];
const ListHeader = () => (
    <View>
        {/* Categories */}
        <SafeAreaView>
            <FlatList
                data={categories}
                renderItem={({ item }) => <QuickMenu item={item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                }}
            />
        </SafeAreaView>

        {/* Shorts Section */}
        <ShortsMenu />
        <ShortsGrid />
    </View>
);
const YoutubeHome = () => {
    return (
        <View style={{ backgroundColor: '#000', flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <FlatList
                data={videoData}
                renderItem={({ item }) => <YouTubeVideo video={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={ListHeader}
                contentContainerStyle={{ paddingBottom: 80 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
export default YoutubeHome
const videoStyle = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    thumbnail: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        backgroundColor: '#ccc',
    },
    infoRow: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 8,
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontWeight: '600',
        fontSize: 16,
        color: '#cccccc',
    },
    meta: {
        marginTop: 4,
        fontSize: 13,
        color: '#999999',
    },
});
const shortStyle = StyleSheet.create({
    container: {
        padding: 16,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    card: {
        width: imageWidth,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#1a1a1a',
    },
    image: {
        width: '100%',
        height: 180,
    },
    title: {
        padding: 8,
        fontSize: 14,
        fontWeight: '600',
        color: '#fff'
    },
});
const slideView = StyleSheet.create({
    container: {
        marginBottom: 18
        // flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
})
const QuickMenuBtn = StyleSheet.create({
    btn: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignSelf: 'flex-start', // auto width
        backgroundColor: '#1a1a1a',
        margin: 4,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
})
const StatusBarStyles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Row layout
        justifyContent: 'space-between', // Space between left and right
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#1a1a1a',
    },
    logo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff"
    },
    rightIcons: {
        flexDirection: 'row',
        gap: 12, // If not supported in your version, use marginRight
    },
    icon: {
        fontSize: 18,
        marginLeft: 16,
    },
});