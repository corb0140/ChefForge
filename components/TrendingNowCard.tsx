import { Colors } from "@/constants/Colors";
import { DetailProps } from "@/constants/Types";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export interface TrendingNowCardProps extends DetailProps {
  isFavorite?: boolean;
}

export default function TrendingNowCard({
  chefName,
  recipeName,
  isFavorite = true,
}: TrendingNowCardProps) {
  const [favorite, setFavorite] = useState(isFavorite);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/entry-bg.jpg")}
          style={styles.image}
        />

        <View style={styles.ratingAndBookmarkContainer}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color={Colors.background} />
            <Text style={styles.ratingText}>4.5</Text>
          </View>

          <Pressable onPress={() => setFavorite(!favorite)}>
            {favorite ? (
              <Ionicons
                name="bookmark-outline"
                size={20}
                color={Colors.background}
              />
            ) : (
              <Ionicons name="bookmark" size={20} color={Colors.pink} />
            )}
          </Pressable>
        </View>
      </View>

      <View style={{ padding: 10, flex: 1, gap: 10 }}>
        <Text style={styles.title}>{recipeName}</Text>

        <View style={styles.userContainer}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../assets/images/entry-bg.jpg")}
              style={styles.userImage}
            />
          </View>
          <Text style={styles.userName}>{chefName}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 240,
    height: "auto",
    borderRadius: 15,
    overflow: "hidden",
    marginRight: 15,
  },
  imageContainer: {
    position: "relative",
    height: 180,
    width: "100%",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  ratingAndBookmarkContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: Colors.pink,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  ratingText: {
    fontFamily: "Cairo-Bold",
    fontSize: 12,
    lineHeight: 18,
    color: Colors.background,
  },
  title: {
    fontFamily: "Cairo-Bold",
    fontSize: 14,
    lineHeight: 16,
    flexGrow: 0,
    color: Colors.primary,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  userImage: {
    width: "100%",
    height: "100%",
  },
  userName: {
    fontFamily: "Cairo-Bold",
    fontSize: 12,
    lineHeight: 18,
    color: Colors.primary,
  },
});
