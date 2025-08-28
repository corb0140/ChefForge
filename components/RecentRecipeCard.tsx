import { Colors } from "@/constants/Colors";
import { DetailProps } from "@/constants/Types";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RecentRecipeCard({
  recipeName,
  chefName,
}: DetailProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/entry-bg.jpg")}
          style={styles.image}
          contentFit="cover"
        />
      </View>

      {/* RECIPE AND CHEF */}
      <View style={styles.detailsContainer}>
        <Text style={styles.recipeName}>{recipeName}</Text>
        <View style={styles.chefContainer}>
          <View style={styles.chefImageContainer}>
            <Image
              source={require("@/assets/images/test-image-2.png")}
              style={styles.image}
            />
          </View>

          <Text style={styles.chefName}>{chefName}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: "auto",
    borderRadius: 15,
    marginRight: 15,
  },
  imageContainer: {
    overflow: "hidden",
    width: "100%",
    height: 150,
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsContainer: {
    width: "100%",
    gap: 5,
  },
  recipeName: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Cairo-Bold",
    color: Colors.primary,
  },
  chefContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 5,
  },
  chefImageContainer: {
    width: 25,
    height: 25,
    borderRadius: 100,
    borderColor: Colors.brown,
    borderWidth: 1,
    overflow: "hidden",
  },
  chefName: {
    fontSize: 15,
    lineHeight: 18,
    fontFamily: "Cairo-SemiBold",
    color: Colors.primary,
    opacity: 0.8,
  },
});
