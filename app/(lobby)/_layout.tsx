import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="AScreen"
        options={{
          title: "Tab One",
        }}
      />
      <Tabs.Screen
        name="BScreen"
        options={{
          title: "Tab Two",
        }}
      />
    </Tabs>
  );
}
