import { Platform, View } from "react-native";
import GetStartedScreen from "./_components/getStart";
import Header from "./_components/header";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
     {Platform.OS === "web" && <Header /> } 
      {/* <Settings /> */}
      <GetStartedScreen />
      {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
    </View>
  );
}
