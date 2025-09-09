import { Colors } from "@/constants/Colors";
import { DetailProps } from "@/constants/Types";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PopularCategoryCard({
  recipeName,
  chefName,
}: DetailProps) {
  return (
    <View style={styles.card}>
      {/* IMAGE */}
      <LinearGradient
        colors={[Colors.lightPink, Colors.background]}
        style={styles.imageContainer}
      >
        <Image
          source={require("@/assets/images/entry-bg.jpg")}
          style={styles.image}
        />
      </LinearGradient>

      {/* RECIPE AND CHEF */}
      <View style={styles.detailsContainer}>
        <Text style={styles.recipeName}>{recipeName}</Text>
        <Text style={styles.chefName}>by</Text>
        <Text style={styles.chefName}>{chefName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    height: 260,
    width: 200,
    borderRadius: 15,
    marginRight: 15,
    marginTop: 70,
    backgroundColor: Colors.pink,
  },
  imageContainer: {
    position: "absolute",
    height: 130,
    width: 130,
    borderRadius: 100,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    left: "50%",
    transform: [{ translateX: "-50%" }],
    top: -50,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  detailsContainer: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 5,
  },
  recipeName: {
    fontSize: 20,
    fontFamily: "Cairo-Bold",
    color: Colors.primary,
  },
  chefName: {
    fontSize: 16,
    fontFamily: "Cairo-SemiBold",
    color: "white",
    opacity: 0.8,
  },
});
