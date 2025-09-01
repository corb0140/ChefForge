import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import ProfileButton from "./UI/ProfileButton";
import Tabs from "./UI/Tabs";

const numOfColumns = 3;

export type ForgeScreenComponentProps = {
  user: {
    isUser: boolean;
    id: string;
  };
};

export default function ForgeScreenComponent({
  user: { isUser, id },
}: ForgeScreenComponentProps) {
  const [count, setCount] = useState({
    posts: 2000,
    followers: 200000,
    following: 200,
  });
  const [isActive, setIsActive] = useState<"posts" | "likes">("posts");
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const setText = () => {
      let text: string[];
      switch (true) {
        case isActive === "posts":
          text = ["posts", "posts", "posts"];
          break;
        case isActive === "likes":
          text = ["likes", "likes", "likes"];
          break;
        default:
          text = ["Nah"];
      }

      return setData(text);
    };

    setText();
  }, [isActive]);

  return (
    <View style={{ flex: 1 }}>
      {isUser ? (
        <View style={styles.userHeaderView}>
          <Text style={styles.headerTitle}>My Forge</Text>

          <Pressable onPress={() => router.push(`/${id}/settings`)}>
            <Ionicons name="settings-outline" size={24} color="black" />
          </Pressable>
        </View>
      ) : (
        <View style={styles.notUserHeaderView}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>

          <Text style={styles.headerTitle}>John&apos;s Forge</Text>
        </View>
      )}

      <View style={styles.details}>
        {/* PROFILE IMAGE */}
        <View style={styles.profileImage}>
          <Image
            source={require("@/assets/images/entry-bg.jpg")}
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
          />
        </View>

        {/* PROFILE INFO */}
        <View style={{ alignItems: "center" }}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileBio}>Lorem ipsum dolor sit amet</Text>
          <Link href="https://example.com" style={styles.link}>
            www.johndoe@example.com
          </Link>
        </View>

        {/* SOCIAL STATS     */}
        <View style={styles.socials}>
          <View style={styles.socialsView}>
            <Text style={styles.socialsCount}>
              {count.posts > 999 ? count.posts / 1000 + "k" : count.posts}
            </Text>
            <Text style={styles.socialsName}>Posts</Text>
          </View>

          <View style={styles.divider} />

          <View style={[styles.socialsView]}>
            <Text style={styles.socialsCount}>
              {count.followers > 999
                ? count.followers / 1000 + "k"
                : count.followers}
            </Text>
            <Text style={styles.socialsName}>Followers</Text>
          </View>

          <View style={styles.divider} />

          <View style={[styles.socialsView]}>
            <Text style={styles.socialsCount}>
              {count.following > 999
                ? count.following / 1000 + "k"
                : count.following}
            </Text>
            <Text style={styles.socialsName}>Following</Text>
          </View>
        </View>

        {/* BUTTONS */}
        {!isUser && (
          <View style={{ flexDirection: "row", gap: 10, marginTop: 12 }}>
            <ProfileButton
              text="Follow"
              onClick={() => console.log("Follow")}
            />
            <ProfileButton
              text="Message"
              onClick={() => console.log("Message")}
            />
          </View>
        )}

        {/* TAB VIEW */}
        <Tabs
          isActive={isActive}
          setIsActive={() => {
            setIsActive((prev) => (prev === "posts" ? "likes" : "posts"));
          }}
        />

        {/* FLAT LIST VIEW */}
        <FlatList
          style={styles.FlatListView}
          data={data}
          showsHorizontalScrollIndicator={false}
          numColumns={numOfColumns}
          renderItem={({ item }) => (
            <View style={{ flex: 1 }}>
              <View style={styles.FlatListItem}>
                <Text>Item {item}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userHeaderView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  notUserHeaderView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  headerTitle: {
    lineHeight: 30,
    fontSize: 20,
    fontFamily: "Cairo-Bold",
    textAlign: "left",
  },
  details: {
    flexGrow: 1,
    alignItems: "center",
    gap: 10,
    marginTop: 15,
    paddingHorizontal: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: Colors.brown,
    overflow: "hidden",
  },
  profileName: {
    fontSize: 18,
    fontFamily: "Cairo-Bold",
    color: Colors.primary,
  },
  profileBio: {
    fontSize: 14,
    fontFamily: "Cairo-Regular",
    color: Colors.secondary,
  },
  link: {
    fontSize: 12,
    fontFamily: "Cairo-Regular",
    color: Colors.deepskyblue,
  },
  socials: {
    flexDirection: "row",
    gap: 20,
    marginTop: 10,
  },
  divider: {
    borderRightWidth: 1,
    height: "100%",
    backgroundColor: Colors.secondary,
  },
  socialsView: {
    alignItems: "center",
  },
  socialsName: {
    lineHeight: 20,
    fontSize: 13,
    fontFamily: "Cairo-Regular",
    color: Colors.secondary,
  },
  socialsCount: {
    lineHeight: 20,
    fontSize: 15,
    fontFamily: "Cairo-Bold",
    color: Colors.primary,
  },
  TabView: {
    flexDirection: "row",
    marginTop: 20,
    height: 35,
    width: "100%",
    justifyContent: "center",
  },
  TabButton: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1,
  },
  FlatListView: {
    flex: 1,
    width: "100%",
    marginTop: 2,
    marginBottom: 60,
  },
  FlatListItem: {
    borderWidth: 1,
    height: 100,
    margin: 3,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
