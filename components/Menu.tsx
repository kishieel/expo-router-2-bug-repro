import { useRouter } from "expo-router";
import { Button } from "react-native";

export default function Menu() {
  const router = useRouter();

  return (
    <>
      <Button
        onPress={() => router.push("/InfoScreen")}
        title="Go to /InfoScreen"
      />
      <Button
        onPress={() => router.push("/(flows)/StartScreen")}
        title="Go to /(flows)/StartScreen"
      />
      <Button
        onPress={() => router.push("/(flows)/EndScreen")}
        title="Go to /(flows)/EndScreen"
      />
      <Button
        onPress={() => router.push("/(lobby)/AScreen")}
        title="Go to /(lobby)/AScreen"
      />
      <Button
        onPress={() => router.push("/(lobby)/BScreen")}
        title="Go to /(lobby)/BScreen"
      />
      <Button onPress={() => router.push("_sitemap")} title="Open sitemap" />
    </>
  );
}
