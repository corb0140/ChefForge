import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface HomeScreenTabCardProps {
  name: string;
  description: string;
  imageUrl?: string;
}

export default function HomeScreenTabCard({
  name,
  description,
  imageUrl,
}: HomeScreenTabCardProps) {
  return (
    <LinearGradient
      start={{ x: 0, y: -0.1 }}
      end={{ x: 0, y: 2.5 }}
      colors={[Colors.primary, Colors.secondary]}
      style={styles.card}
    >
      <Text style={styles.title} numberOfLines={2}>
        {name}
      </Text>
      <Text style={styles.text} numberOfLines={3}>
        {description}
      </Text>

      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/test-image.png")}
          style={styles.image}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    height: 400,
    borderRadius: 20,
    marginRight: 30,
    padding: 10,
  },
  title: {
    lineHeight: 30,
    fontSize: 20,
    fontFamily: "Cairo-Bold",
    color: "white",
  },
  text: {
    flexGrow: 1,
    color: "white",
    fontFamily: "Cairo-Regular",
    fontSize: 12,
    marginTop: 10,
  },
  imageContainer: {
    height: "60%",
    width: "100%",
  },
  image: {
    width: "130%",
    height: "130%",
    alignSelf: "center",
    bottom: 30,
    left: 20,
  },
});
