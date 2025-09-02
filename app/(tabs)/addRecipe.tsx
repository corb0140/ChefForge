import AddRecipeInput from "@/components/UI/AddRecipeInput";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const numOfColumns = 3;

export default function AddRecipe() {
  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    tag: "",
    ingredient: "",
    instruction: "",
    image: null as string | null,
  });

  const [arrayData, setArrayData] = useState({
    tags: [] as string[],
    ingredients: [] as string[],
    instructions: [] as string[],
  });

  const handleSubmit = () => {
    console.log("Submit");

    setRecipeData({
      title: "",
      description: "",
      tag: "",
      ingredient: "",
      instruction: "",
      image: null,
    });

    setArrayData({
      tags: [],
      ingredients: [],
      instructions: [],
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <Text style={styles.title}>Add Recipe</Text>

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {/* IMAGE */}
        <View style={{ marginBottom: 15 }}>
          <Pressable onPress={() => console.log("Add Image Pressed")}>
            <Ionicons name="camera-outline" size={35} color={Colors.primary} />
          </Pressable>

          <View style={styles.imagePlaceholder}>
            {!recipeData.image ? (
              <Text style={{ color: Colors.primary }}>No Image Selected</Text>
            ) : (
              <Image
                source={{ uri: recipeData.image }}
                style={{ width: "100%", height: "100%" }}
                contentFit="cover"
              />
            )}
          </View>
        </View>

        <View style={{ flex: 1, marginBottom: 55 }}>
          {/* TITLE */}
          <AddRecipeInput
            placeholder="Recipe Title"
            onChangeText={(text) => {
              if (text.length <= 40) {
                setRecipeData({ ...recipeData, title: text });
              }
            }}
            value={recipeData.title}
          />

          {/* DESCRIPTION */}
          <AddRecipeInput
            placeholder="Description"
            onChangeText={(text) => {
              if (text.length <= 100) {
                setRecipeData({ ...recipeData, description: text });
              }
            }}
            value={recipeData.description}
            height={150}
            multiline={true}
          />

          {/* TAGS */}
          <View>
            <AddRecipeInput
              placeholder="Add Tags (Limit 3, separated by commas)"
              onChangeText={(text) => {
                setRecipeData({ ...recipeData, tag: text });
              }}
              value={recipeData.tag}
              marginBottom={arrayData.tags.length > 0 ? 1 : 15}
              onSubmitEditing={() => {
                if (recipeData.tag.trim() !== "" && arrayData.tags.length < 3) {
                  setArrayData({
                    ...arrayData,
                    tags: [...arrayData.tags, recipeData.tag.trim()],
                  });
                  setRecipeData({ ...recipeData, tag: "" });
                }
              }}
            />

            <View
              style={[
                styles.listView,
                { marginBottom: arrayData.tags.length === 0 ? 0 : 5 },
              ]}
            >
              {arrayData.tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* INGREDIENTS */}
          <View>
            <AddRecipeInput
              placeholder="Ingredients"
              onChangeText={(text) => {
                setRecipeData({ ...recipeData, ingredient: text });
              }}
              value={recipeData.ingredient}
              marginBottom={arrayData.ingredients.length > 0 ? 5 : 15}
              onSubmitEditing={() => {
                if (recipeData.ingredient.trim() !== "") {
                  setArrayData({
                    ...arrayData,
                    ingredients: [
                      ...arrayData.ingredients,
                      recipeData.ingredient.trim(),
                    ],
                  });
                  setRecipeData({ ...recipeData, ingredient: "" });
                }
              }}
            />

            <View
              style={[
                styles.listView,
                { marginBottom: arrayData.ingredients.length === 0 ? 0 : 5 },
              ]}
            >
              <FlatList
                data={arrayData.ingredients}
                keyExtractor={(index) => index.toString()}
                numColumns={numOfColumns}
                renderItem={({ item, index }) => (
                  <View style={styles.flatListContainer} key={index}>
                    <Text style={styles.flatListText}>{item}</Text>
                  </View>
                )}
              />
            </View>
          </View>

          {/* INSTRUCTIONS */}
          <View>
            <AddRecipeInput
              placeholder="Instructions"
              onChangeText={(text) => {
                setRecipeData({ ...recipeData, instruction: text });
              }}
              value={recipeData.instruction}
              marginBottom={arrayData.instructions.length > 0 ? 5 : 15}
              onSubmitEditing={() => {
                if (recipeData.instruction.trim() !== "") {
                  setArrayData({
                    ...arrayData,
                    instructions: [
                      ...arrayData.instructions,
                      recipeData.instruction.trim(),
                    ],
                  });
                  setRecipeData({ ...recipeData, instruction: "" });
                }
              }}
            />

            <View
              style={[
                styles.listView,
                { marginBottom: arrayData.instructions.length === 0 ? 0 : 5 },
              ]}
            >
              <FlatList
                data={arrayData.instructions}
                keyExtractor={(index) => index.toString()}
                renderItem={({ item, index }) => (
                  <View
                    style={[
                      styles.flatListContainer,
                      { width: "100%", padding: 10 },
                    ]}
                    key={index}
                  >
                    <Text style={styles.flatListText}>
                      {index + 1}. {item}
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>

          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Add Recipe</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Cairo-Bold",
    color: Colors.primary,
    marginBottom: 15,
  },
  imagePlaceholder: {
    width: "100%",
    height: 200,
    borderWidth: 1,
    borderColor: Colors.lightPink,
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  listView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  tag: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 10,
  },
  tagText: {
    color: Colors.background,
    fontFamily: "Cairo-Medium",
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    backgroundColor: Colors.pink,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: Colors.background,
    fontFamily: "Cairo-Bold",
    fontSize: 18,
    lineHeight: 26,
  },
  flatListContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 5,
    width: `${100 / numOfColumns}%`,
    marginRight: 5,
    marginBottom: 5,
  },
  flatListText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Cairo-Regular",
    color: Colors.background,
  },
});
