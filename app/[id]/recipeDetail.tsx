import MenuIcon from "@/components/UI/MenuIcon";
import Tabs from "@/components/UI/Tabs";
import { Colors } from "@/constants/Colors";
import { recipes } from "@/data/testData";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
const width = Dimensions.get("window").width;

export default function RecipeDetail() {
  const { id } = useLocalSearchParams<{ id: any }>();
  const router = useRouter();
  const recipe = recipes.find((recipe) => recipe.id === Number(id));
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<"ingredients" | "instructions">(
    "ingredients"
  );
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    let ingredients: string[];
    let instructions: string[];

    const handleActiveTabContent = () => {
      switch (true) {
        case isActive === "ingredients":
          ingredients = recipe?.ingredients || [""];
          break;
        case isActive === "instructions":
          instructions = recipe?.instructions || [""];
          break;
        default:
          ingredients = [""];
      }

      return setData(isActive === "ingredients" ? ingredients : instructions);
    };

    handleActiveTabContent();
  }, [isActive, recipe]);

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      style={styles.container}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={34} color="white" />
          </Pressable>

          <MenuIcon color="white" />
        </View>

        <View style={styles.backgroundOverlay} />

        <Image
          source={require("@/assets/images/test-image-2.png")}
          style={styles.image}
        />

        <View style={styles.detailsWrapper}>
          <BlurView intensity={90} tint="dark" style={styles.detailsContainer}>
            <LinearGradient
              colors={[
                Colors.cardGradient15,
                Colors.cardGradient15,
                Colors.cardGradient35,
              ]}
              style={StyleSheet.absoluteFill}
            />
            {/* SCROLL VIEW */}
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              showsVerticalScrollIndicator={false}
            >
              {/* TITLE AND LIKE BUTTON */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.recipeText}>{recipe?.name}</Text>

                <Ionicons
                  name={isFavorite ? "heart" : "heart-outline"}
                  size={24}
                  color={isFavorite ? Colors.pink : "white"}
                  style={{ marginLeft: 10 }}
                  onPress={() => setIsFavorite(!isFavorite)}
                />
              </View>

              {/* RATING */}
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                {Array.from({ length: 5 }).map((_, index) => {
                  const starNumber = index + 1;
                  let iconName: keyof typeof Ionicons.glyphMap = "star-outline";

                  if (recipe?.rating) {
                    if (recipe.rating >= starNumber) {
                      iconName = "star";
                    } else if (recipe.rating >= starNumber - 0.5) {
                      iconName = "star-half";
                    }
                  }
                  return (
                    <Ionicons
                      key={index}
                      name={iconName}
                      size={18}
                      color={
                        iconName === "star" || iconName === "star-half"
                          ? "gold"
                          : "white"
                      }
                      style={{ marginRight: 5 }}
                    />
                  );
                })}
              </View>

              {/* LABELS */}
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                {recipe?.labels?.map((label, index) => (
                  <View key={index} style={styles.label}>
                    <Text style={styles.labelsText}>{label}</Text>
                  </View>
                ))}
              </View>

              {/* DESCRIPTION */}
              <Text style={styles.descriptionText}>{recipe?.description}</Text>

              {/* CHEF */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 15,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.opacWhite03,
                  paddingBottom: 10,
                }}
              >
                <View style={styles.chefAvatarContainer}>
                  <Image
                    source={require("@/assets/images/entry-bg.jpg")}
                    style={styles.chefAvatar}
                  />
                </View>

                <View>
                  <Text style={styles.chefName}>{recipe?.chef?.name}</Text>
                  <Text style={styles.chefInfo}>{recipe?.chef?.bio}</Text>
                </View>
              </View>

              {/* TAB VIEW */}
              <Tabs
                isActive={isActive}
                setIsActive={() => {
                  setIsActive((prev) =>
                    prev === "ingredients" ? "instructions" : "ingredients"
                  );
                }}
              />

              {/* INGREDIENTS & INSTRUCTIONS */}
              {isActive === "ingredients" && (
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <Text style={[styles.title, { fontSize: 15 }]}>Serves</Text>
                  <Text style={[styles.title, { fontSize: 15 }]}>
                    {recipe?.servings}
                  </Text>
                  <Text style={[styles.title, { fontSize: 15 }]}>
                    {recipe?.servings === "1" ? "Person" : "People"}
                  </Text>
                </View>
              )}

              {data.map((item, index) => (
                <View key={index} style={{ marginTop: 10 }}>
                  <Text style={styles.text}>
                    {index + 1}. {item}
                  </Text>
                </View>
              ))}

              {/* COMMENTS, LIKES, DOWNLOADS*/}
              <View
                style={{
                  marginTop: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 25,
                }}
              >
                <View style={styles.CommentsAndLikesView}>
                  <Ionicons
                    name="download-outline"
                    size={20}
                    color="white"
                    style={{ marginRight: 5, marginBottom: 3 }}
                  />
                  <Text style={styles.text}>{recipe?.downloads}</Text>
                </View>

                <View style={styles.CommentsAndLikesView}>
                  <Ionicons
                    name="heart-outline"
                    size={20}
                    color="white"
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.text}>{recipe?.likes}</Text>
                </View>

                <View style={styles.CommentsAndLikesView}>
                  <Ionicons
                    name="chatbox-outline"
                    size={20}
                    color="white"
                    style={{ marginRight: 5, marginTop: 2 }}
                  />
                  <Text style={styles.text}>{recipe?.comments?.length}</Text>
                </View>
              </View>
            </ScrollView>
          </BlurView>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundOverlay: {
    flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.2,
    zIndex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 50,
    zIndex: 2,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsWrapper: {
    height: 542,
    width: width * 0.9,
    position: "absolute",
    bottom: 50,
    left: width * 0.045,
    borderRadius: 30,
    overflow: "hidden",
    zIndex: 2,
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.opacWhite03,
    backgroundColor: Colors.opacWhite01,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 100,
  },
  recipeText: {
    lineHeight: 34,
    fontSize: 24,
    fontFamily: "Cairo-Bold",
    color: "white",
  },
  label: {
    marginRight: 10,
    backgroundColor: Colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  labelsText: {
    color: "white",
    fontFamily: "Cairo-Regular",
    lineHeight: 20,
    fontSize: 11,
  },
  descriptionText: {
    marginTop: 25,
    marginBottom: 5,
    fontFamily: "Cairo-Regular",
    color: "white",
    lineHeight: 20,
    fontSize: 14,
  },
  title: {
    fontFamily: "Cairo-Bold",
    color: "white",
    fontSize: 18,
    marginBottom: 5,
    letterSpacing: 1,
  },
  text: {
    fontFamily: "Cairo-Regular",
    color: "white",
    lineHeight: 20,
    fontSize: 15,
  },
  CommentsAndLikesView: {
    flexDirection: "row",
    alignItems: "center",
  },
  chefAvatarContainer: {
    marginTop: 15,
    marginBottom: 5,
    width: 50,
    height: 50,
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: Colors.pink,
  },
  chefAvatar: {
    width: "100%",
    height: "100%",
  },
  chefName: {
    fontFamily: "Cairo-SemiBold",
    color: "white",
    fontSize: 16,
    lineHeight: 22,
  },
  chefInfo: {
    fontFamily: "Cairo-Regular",
    color: "white",
    fontSize: 12,
    lineHeight: 20,
  },
});
