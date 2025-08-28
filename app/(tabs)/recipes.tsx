import PopularCategoryCard from "@/components/PopularCategoryCard";
import PopularChefCard from "@/components/PopularChefCard";
import RecentRecipeCard from "@/components/RecentRecipeCard";
import TrendingNowCard from "@/components/TrendingNowCard";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const popularCategory = ["Vegan", "Italian", "Breakfast", "Dessert", "Greek"];

export default function Recipes() {
  const [category, setCategory] = useState(popularCategory[0]);

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.headerText}>
          Find <Text style={{ color: Colors.pink }}>best recipes</Text> for
          cooking
        </Text>

        <TextInput
          placeholder="Search recipes..."
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.searchInput}
          placeholderTextColor={Colors.secondary}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {/* TRENDING NOW */}
        <View style={styles.section}>
          <View style={styles.headerRow}>
            <Text style={styles.sectionTitle}>Trending Now</Text>

            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
              onPress={() => console.log("See all pressed")}
            >
              <Text style={styles.seeAllText}>See all</Text>
              <Ionicons name="chevron-forward" size={20} color={Colors.pink} />
            </Pressable>
          </View>

          <FlatList
            data={[1, 2, 3]}
            renderItem={({ item, index }) => (
              <TrendingNowCard
                chefName={`Chef ${item}`}
                recipeName={`Lorem ipsum dolor sit amet consectetur ${item}`}
                isFavorite={item === index + 1}
              />
            )}
            keyExtractor={(item) => item.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* POPULAR CATEGORIES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Categories</Text>

          <FlatList
            style={{ marginTop: 5 }}
            data={popularCategory}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => setCategory(item)}
                style={[
                  styles.categoryButton,
                  category === item && styles.categoryButtonSelected,
                ]}
              >
                <Text
                  style={[
                    styles.categoryButtonText,
                    category === item && styles.categoryButtonTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            )}
          />

          <FlatList
            data={[1, 2, 3]}
            renderItem={({ item }) => (
              <PopularCategoryCard
                recipeName={`Recipe ${item}`}
                chefName={`Chef ${item}`}
              />
            )}
            keyExtractor={(item) => item.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* RECENT RECIPES */}
        <View style={styles.section}>
          <View style={styles.headerRow}>
            <Text style={styles.sectionTitle}>Recent Recipes</Text>

            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
              onPress={() => console.log("See all pressed")}
            >
              <Text style={styles.seeAllText}>See all</Text>
              <Ionicons name="chevron-forward" size={20} color={Colors.pink} />
            </Pressable>
          </View>

          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={({ item }) => (
              <RecentRecipeCard
                recipeName={`Recipe ${item}`}
                chefName={`Chef ${item}`}
              />
            )}
            keyExtractor={(item) => item.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10 }}
          />
        </View>

        {/* POPULAR CHEFS */}
        <View style={[styles.section, { marginBottom: 60 }]}>
          <View style={styles.headerRow}>
            <Text style={styles.sectionTitle}>Popular Chefs</Text>

            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
              onPress={() => console.log("See all pressed")}
            >
              <Text style={styles.seeAllText}>See all</Text>
              <Ionicons name="chevron-forward" size={20} color={Colors.pink} />
            </Pressable>
          </View>

          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={({ item }) => (
              <PopularChefCard
                followers={`${10 * item + "k"}`}
                chefName={`Chef ${item}`}
              />
            )}
            keyExtractor={(item) => item.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontFamily: "Cairo-Bold",
    lineHeight: 28,
    width: "50%",
    marginTop: 10,
    color: Colors.primary,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: Colors.pink,
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
  },
  section: { marginTop: 20 },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontFamily: "Cairo-Bold",
    fontSize: 16,
    lineHeight: 24,
    color: Colors.primary,
  },
  seeAllText: {
    fontFamily: "Cairo-Regular",
    fontSize: 14,
    lineHeight: 24,
    color: Colors.pink,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: Colors.pink,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  categoryButtonSelected: { backgroundColor: Colors.pink },
  categoryButtonText: {
    fontFamily: "Cairo-Regular",
    fontSize: 14,
    lineHeight: 20,
    color: Colors.pink,
  },
  categoryButtonTextSelected: { color: Colors.background },
});
