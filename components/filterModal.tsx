import { Colors } from "@/constants/Colors";
import { countries, recipes } from "@/data/testData";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const numOfCols = 3;

export default function FilterModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={onClose}
      animationType="slide"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.line}></View>
            <Text style={styles.filterTitle}>Filter</Text>
          </View>

          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            {/* BY RATE */}
            <View style={{ gap: 10 }}>
              <Text style={styles.filterSubtitle}>By Rate</Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 18,
                }}
              >
                {Array.from({ length: 5 })
                  .map((_, index) => {
                    return (
                      <Pressable key={index} style={styles.rateBox}>
                        <Text style={styles.ratingText}>{index + 1}</Text>
                        <Ionicons name="star" size={14} color={Colors.pink} />
                      </Pressable>
                    );
                  })
                  .reverse()}
              </View>
            </View>

            {/* BY CATEGORY */}
            <View style={{ gap: 10, marginBottom: 10 }}>
              <Text style={styles.filterSubtitle}>By Category</Text>

              <FlatList
                showsHorizontalScrollIndicator={false}
                numColumns={numOfCols}
                data={recipes
                  .map((recipe) => recipe.mealType)
                  .filter(
                    (type, index, self) => type && self.indexOf(type) === index
                  )}
                renderItem={({ item }) => (
                  <Pressable style={styles.categoryBox}>
                    <Text style={styles.categoryText}>{item}</Text>
                  </Pressable>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

            {/* BY COUNTRY */}
            <View style={{ gap: 10 }}>
              <Text style={styles.filterSubtitle}>By Country</Text>

              <FlatList
                showsHorizontalScrollIndicator={false}
                numColumns={numOfCols}
                data={countries}
                renderItem={({ item }) => (
                  <Pressable style={styles.categoryBox}>
                    <Text style={styles.categoryText}>{item}</Text>
                  </Pressable>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

            {/* FILTER BUTTON */}
            <Pressable
              style={[styles.filterButton, { marginVertical: 20 }]}
              onPress={() => {
                onClose();
                console.log("Filters applied");
              }}
            >
              <Text style={styles.filterButtonText}>Apply Filters</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  container: {
    height: 600,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  line: {
    width: 60,
    height: 4,
    backgroundColor: "gray",
    borderRadius: 3,
    marginVertical: 5,
  },
  filterTitle: {
    fontSize: 22,
    lineHeight: 26,
    fontFamily: "Cairo-Bold",
    marginVertical: 5,
  },
  filterSubtitle: {
    fontSize: 15,
    lineHeight: 19,
    fontFamily: "Cairo-SemiBold",
  },
  rateBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 9,
  },
  ratingText: { fontSize: 14, fontFamily: "Cairo-Regular", lineHeight: 20 },
  categoryBox: {
    backgroundColor: Colors.secondary,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 8,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Cairo-Regular",
    color: Colors.background,
  },
  filterButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  filterButtonText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Cairo-Bold",
    color: Colors.background,
  },
});
