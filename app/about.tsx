import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

export default function Menu() {
  const router = useRouter();
  const slideAnim = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const openPortfolioLink = () => {
    router.push("https://portfolio-ruby-nine-59.vercel.app/");
  };

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: slideAnim }] }]}
    >
      <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} />
        </Pressable>

        <Text style={styles.title}>About</Text>
      </View>

      <View style={{ marginTop: 20, gap: 20 }}>
        <Text style={styles.text}>
          ChefForge is a recipe app that helps you find and share recipes with
          your friends. Whether you’re looking for a quick weeknight dinner or a
          show-stopping dessert, ChefForge has you covered.
        </Text>

        <Text style={styles.text}>
          Our app features a wide variety of recipes from different cuisines and
          dietary preferences, so you’re sure to find something that suits your
          taste. You can also create and share your own recipes with the
          ChefForge community, making it easy to connect with other food lovers
          and discover new culinary ideas.
        </Text>
      </View>

      <View
        style={{
          marginTop: 30,
          gap: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={styles.text}>Created by</Text>

        <Pressable onPress={openPortfolioLink}>
          <Text style={styles.linkText}>Mark Corbin</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 35,
    fontFamily: "Cairo-Bold",
    lineHeight: 40,
  },
  text: {
    fontSize: 18,
    fontFamily: "Cairo-Regular",
    lineHeight: 30,
    color: Colors.primary,
  },
  linkText: {
    fontSize: 18,
    fontFamily: "Cairo-Bold",
    lineHeight: 30,
    color: Colors.primary,
    textDecorationLine: "underline",
  },
});
