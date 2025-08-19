import HomeScreenChefCard from "@/components/HomeScreenChefCard";
import HomeScreenTabCard from "@/components/HomeScreenTabCard";
import MenuIcon from "@/components/UI/menuIcon";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// test data
import { Recipe, recipes } from "@/data/testData";

const mealOptions = ["Dinner", "Dessert", "Lunch", "Breakfast"];

export default function Index() {
  const router = useRouter();
  const [selectedRecipe, setSelectedRecipes] = useState<Recipe[]>([]);
  const [activeTab, setActiveTab] = useState("Breakfast");

  useEffect(() => {
    const fetchRecipes = async () => {
      let fetchedRecipes: Recipe[] = [];

      switch (activeTab) {
        case "Breakfast":
          fetchedRecipes = recipes.filter(
            (recipe) => recipe.mealType === "Breakfast"
          );
          break;
        case "Lunch":
          fetchedRecipes = recipes.filter(
            (recipe) => recipe.mealType === "Lunch"
          );
          break;
        case "Dessert":
          fetchedRecipes = recipes.filter(
            (recipe) => recipe.mealType === "Dessert"
          );
          break;
        case "Dinner":
          fetchedRecipes = recipes.filter(
            (recipe) => recipe.mealType === "Dinner"
          );
          break;
        default:
          fetchedRecipes = [];
      }

      setSelectedRecipes(fetchedRecipes);
    };

    fetchRecipes();
  }, [activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>Recipes</Text>

        <MenuIcon color="black" />
      </View>

      {/* MEAL OPTIONS SCROLL LIST*/}
      <View style={styles.TabsAndScrollView}>
        {/* TABS */}
        <View style={styles.TabsView}>
          {mealOptions.map((option, index) => {
            return (
              <Pressable
                key={index}
                style={styles.TabsButton}
                onPress={() => setActiveTab(option)}
              >
                <Text
                  style={[
                    activeTab === option
                      ? styles.activeOptionText
                      : styles.optionText,
                    { lineHeight: 25, fontSize: 16 },
                  ]}
                >
                  {option}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* FLAT LIST */}
        <View style={styles.RecipesFlatListView}>
          <FlatList
            data={selectedRecipe}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => router.push(`/recipeDetail/${item.id}`)}
              >
                <HomeScreenTabCard
                  key={index}
                  name={item.name}
                  description={item.description}
                />
              </Pressable>
            )}
            keyExtractor={(item: any) => item.id}
          />
        </View>
      </View>

      {/* POPULAR CHEFS */}
      <View style={styles.ChefFlatListView}>
        <Text style={styles.headerTitle}>Popular Chefs</Text>

        <FlatList
          data={[1, 2, 3, 4, 5]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <HomeScreenChefCard />}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    height: 50,
  },
  headerTitle: {
    fontSize: 25,
    lineHeight: 35,
    fontFamily: "Cairo-Bold",
    color: Colors.primary,
  },

  TabsAndScrollView: {
    flexDirection: "row",
    paddingTop: 20,
  },
  TabsView: {
    flexDirection: "column",
    gap: 40,
    alignSelf: "flex-start",
    paddingTop: 10,
  },
  TabsButton: {
    height: 45,
    transform: [{ rotate: "-90deg" }],
    justifyContent: "flex-start",
    alignItems: "center",
  },
  optionText: {
    fontFamily: "Cairo-Medium",
    color: Colors.secondary,
    opacity: 0.7,
  },
  activeOptionText: {
    fontFamily: "Cairo-SemiBold",
    color: Colors.primary,
  },
  RecipesFlatListView: {
    flexGrow: 1,
    paddingRight: 60,
  },
  ChefFlatListView: {
    marginTop: 20,
    paddingLeft: 20,
    gap: 10,
  },
});
