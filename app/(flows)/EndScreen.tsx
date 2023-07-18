import { Text, View } from "react-native";
import Menu from "../../components/Menu";

export default function EndScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text>EndScreen</Text>
      <Menu />
    </View>
  );
}
