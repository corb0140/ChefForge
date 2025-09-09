import { Colors } from "@/constants/Colors";
import { DetailProps } from "@/constants/Types";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface PopularChefCardProps extends DetailProps {
  followers: string;
}

export default function PopularChefCard({
  chefName,
  followers,
}: PopularChefCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/test-image-2.png")}
          style={styles.image}
        />
      </View>

      <View style={{ alignItems: "center", gap: 2 }}>
        <Text style={styles.chefName}>{chefName}</Text>

        <Text>{followers} Followers</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 130,
    height: "auto",
    borderRadius: 15,
    marginRight: 15,
    marginTop: 10,
    alignItems: "center",
    gap: 5,
  },
  imageContainer: {
    overflow: "hidden",
    width: 95,
    height: 95,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.brown,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  chefName: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Cairo-Bold",
    color: Colors.primary,
  },
});
