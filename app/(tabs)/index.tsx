import HomeScreenChefCard from "@/components/HomeScreenChefCard";
import HomeScreenTabCard from "@/components/HomeScreenTabCard";
import { Colors } from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// test data
import { recipes } from "@/data/testData";

const mealOptions = ["Dinner", "Dessert", "Lunch", "Breakfast"];

export default function Index() {
  const [selectedRecipe, setSelectedRecipes] = useState<
    { id: string; name: string; description: string; imageUrl: string }[]
  >([]);
  const [activeTab, setActiveTab] = useState("Breakfast");

  useEffect(() => {
    const fetchRecipes = async () => {
      let fetchedRecipes: {
        id: string;
        name: string;
        description: string;
        imageUrl: string;
      }[] = [];

      switch (activeTab) {
        case "Breakfast":
          fetchedRecipes = recipes.slice(0, 3);
          break;
        case "Lunch":
          fetchedRecipes = recipes.slice(1, 4);
          break;
        case "Dessert":
          fetchedRecipes = recipes.slice(2, 5);
          break;
        case "Dinner":
          fetchedRecipes = recipes.slice(3, 5);
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

        <Pressable
          onPress={() => console.log("test")}
          style={styles.menuIconContainer}
        >
          {Array.from({ length: 4 }, (_, index) => {
            return <View key={index} style={styles.menuIcon}></View>;
          })}
        </Pressable>
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
              <HomeScreenTabCard
                key={index}
                name={item.name}
                description={item.description}
              />
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
  menuIconContainer: {
    height: "50%",
    width: "7%",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 1.5,
    top: 5,
  },
  menuIcon: {
    width: 8,
    height: 8,
    backgroundColor: "black",
    borderRadius: 3,
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
