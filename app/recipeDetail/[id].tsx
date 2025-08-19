import MenuIcon from "@/components/UI/menuIcon";
import { Colors } from "@/constants/Colors";
import { recipes } from "@/data/testData";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React, { useState } from "react";
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

              {/* INGREDIENTS */}
              <View style={{ marginTop: 20 }}>
                <Text style={styles.title}>Ingredients</Text>
                {recipe?.ingredients?.map((ingredient, index) => (
                  <Text key={index} style={styles.text}>
                    - {ingredient}
                  </Text>
                ))}
              </View>

              {/* INSTRUCTIONS */}
              <View style={{ marginTop: 20 }}>
                <Text style={styles.title}>Instructions</Text>
                {recipe?.instructions?.map((instruction, index) => (
                  <Text key={index} style={styles.text}>
                    {index + 1}. {instruction}
                  </Text>
                ))}
              </View>

              {/* PREPARATION TIME, COOKING TIME, SERVINGS */}
              <View
                style={{
                  marginTop: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 20,
                }}
              >
                <View style={styles.mealTimeAndServingsView}>
                  <Ionicons
                    name="time-outline"
                    size={20}
                    color="white"
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.text}>{recipe?.preparationTime}</Text>
                </View>

                <View style={styles.mealTimeAndServingsView}>
                  <Ionicons
                    name="time-outline"
                    size={20}
                    color="white"
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.text}>{recipe?.cookingTime}</Text>
                </View>

                <View style={styles.mealTimeAndServingsView}>
                  <Ionicons
                    name="people-outline"
                    size={20}
                    color="white"
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.text}>{recipe?.servings}</Text>
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
    width: width * 0.85,
    position: "absolute",
    bottom: 50,
    left: width * 0.075,
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
    marginTop: 30,
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
    marginTop: 2,
  },
  mealTimeAndServingsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
