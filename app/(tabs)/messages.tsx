import SearchBar from "@/components/UI/SearchBar";
import { Colors } from "@/constants/Colors";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { clearSearchText, setSearchText } from "@/lib/slices/searchTextSlice";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SmartChef() {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const text = useAppSelector((state) => state.searchText.searchText);

  const handleAskAi = (text: string) => {
    router.push(`/${text}/chatRoom`);
    dispatch(clearSearchText());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>ChefForge</Text>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <Ionicons name="camera-outline" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <SearchBar
          placeholder="Ask Chef AI or Search"
          onChangeText={(text) => dispatch(setSearchText(text))}
          value={text}
        />

        {text.length > 0 && (
          <Pressable
            style={styles.askAiButton}
            onPress={() => handleAskAi(text)}
          >
            <LinearGradient
              colors={[Colors.pink, Colors.deepskyblue]}
              style={styles.aiIcon}
            >
              <View style={styles.aiIconInner}></View>
            </LinearGradient>
            <Text style={styles.askAiText}>Ask</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.background,
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: "Cairo-Bold",
  },
  askAiButton: {
    borderWidth: 1,
    backgroundColor: Colors.primary,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  aiIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  aiIconInner: {
    backgroundColor: Colors.primary,
    height: 15,
    width: 15,
    borderRadius: 10,
  },
  askAiText: {
    color: Colors.background,
    fontFamily: "Cairo-Bold",
    fontSize: 14,
    lineHeight: 20,
  },
});
