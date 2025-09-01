import { Colors } from "@/constants/Colors";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { clearSearchText } from "@/lib/slices/searchTextSlice";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatRoom() {
  const slideAnim = useRef(new Animated.Value(500)).current;
  const { params } = useRoute() as { params: { groupID: string } };
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const handleNavigateBack = () => {
    dispatch(clearSearchText());
    router.back();
  };

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: slideAnim }] }]}
    >
      <Pressable onPress={handleNavigateBack} style={styles.headerView}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </Pressable>

      <SafeAreaView style={{ flex: 1, padding: 10 }}>
        <Text style={styles.text}>{params.groupID}</Text>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  headerView: {
    height: 90,
    paddingTop: 25,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.pink,
  },
  text: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: "Cairo-Bold",
    color: Colors.background,
  },
});
