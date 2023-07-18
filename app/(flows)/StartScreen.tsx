import { Text, View } from "react-native";
import Menu from "../../components/Menu";

export default function StartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text>StartScreen</Text>
      <Menu />
    </View>
  );
}
