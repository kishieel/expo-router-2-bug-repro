import { Text, View } from "react-native";
import Menu from "../components/Menu";

export default function InfoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text>InfoScreen</Text>
      <Menu />
    </View>
  );
}
