import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Dimensions, Pressable, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.pink,
        tabBarInactiveTintColor: Colors.secondary,
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
              style={{ marginBottom: -5 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="recipes"
        options={{
          title: "Recipes",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "book" : "book-outline"}
              size={24}
              color={color}
              style={{ marginBottom: -9 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="addRecipe"
        options={{
          title: "Add Recipe",
          headerShown: false,
          tabBarButton: (props) => (
            <Pressable onPress={props.onPress} style={styles.tabBarButton}>
              <Ionicons name="add-circle" size={52} color={Colors.pink} />
            </Pressable>
          ),
        }}
      />

      <Tabs.Screen
        name="myForge"
        options={{
          title: "My Forge",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "hammer" : "hammer-outline"}
              size={24}
              color={color}
              style={{ marginBottom: -5 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="smartChef"
        options={{
          title: "Smart Chef",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "chatbubbles" : "chatbubbles-outline"}
              size={24}
              color={color}
              style={{ marginBottom: -5 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarButton: {
    position: "absolute",
    zIndex: 1,
    top: -20,
    alignSelf: "center",
    backgroundColor: Colors.background,
    borderRadius: 30,
  },
  tabBarStyle: {
    backgroundColor: Colors.primary,
    position: "absolute",
    bottom: 40,
    height: 40,
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    borderRadius: 50,
  },
});
