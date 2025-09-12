import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreenChefCard({
  followers,
}: {
  followers: number;
}) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.imageView}>
          <Image
            source={require("@/assets/images/entry-bg.jpg")}
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
          />
        </View>

        <Text style={styles.text}>Chef Name</Text>

        <Text style={styles.text}>
          {followers > 999 ? `${(followers / 1000).toFixed(1)}k` : followers}{" "}
          Followers
        </Text>
      </View>

      <View style={styles.shadow} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    position: "relative",
    width: 150,
    height: 150,
    borderRadius: 20,
    marginRight: 15,
  },
  card: {
    position: "absolute",
    width: 140,
    height: 140,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  shadow: {
    backgroundColor: Colors.primary,
    position: "absolute",
    right: 6,
    bottom: 6,
    height: 140,
    width: 140,
    borderRadius: 20,
    opacity: 0.785,
    zIndex: -1,
  },
  imageView: {
    height: "60%",
    width: "60%",
    borderRadius: 50,
    overflow: "hidden",
  },
  text: {
    fontFamily: "Cairo-Regular",
    fontSize: 14,
    lineHeight: 20,
  },
});
