import EditModal from "@/components/modals/EditModal";
import SettingsButton from "@/components/UI/SettingsButton";
import { Colors } from "@/constants/Colors";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { logOut } from "@/lib/axios";
import { deleteToken } from "@/lib/secureStore";
import { clearCredentials } from "@/lib/slices/userSlice";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const platform = Platform.OS === "android" ? "android" : "ios";

export default function Settings() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();

      dispatch(clearCredentials());
      await deleteToken("refreshToken");

      router.replace("/(tabs)/myForge");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleModalToggle = () => {
    setIsEditModalVisible(!isEditModalVisible);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.userAvatarAndNameContainer}>
          <View style={styles.avatarContainer}>
            <Image
              // source={{ uri: `https://picsum.photos/id/${id}/100/100` }}
              style={styles.image}
            />
          </View>

          <View style={{ alignItems: "flex-start" }}>
            <Text style={styles.nameText}>John Doe</Text>
            <Text style={styles.usernameText}>@johh_doe</Text>

            <Pressable style={styles.editButton} onPress={handleModalToggle}>
              <Text style={styles.editButtonText}>Edit</Text>
            </Pressable>
          </View>
        </View>

        {/* ACCOUNT SETTINGS */}
        <View style={styles.settingsContainer}>
          <View style={styles.settingsSection}>
            <Text style={styles.settingsSectionTitle}>Account</Text>

            <SettingsButton
              icon="lock-closed"
              title="Change Password"
              onPress={() => console.log("Change Password pressed")}
            />

            <SettingsButton
              icon="mail"
              title="Manage Email"
              onPress={() => {}}
            />

            <SettingsButton
              icon="notifications"
              title="Notifications"
              onPress={() => {}}
            />
          </View>

          {/* DEVICE SETTINGS */}
          <View style={styles.settingsSection}>
            <Text style={styles.settingsSectionTitle}>Device</Text>

            <SettingsButton
              icon="language"
              title="Language"
              onPress={() => {}}
            />

            <SettingsButton
              icon="contrast"
              title="Display Mode"
              onPress={() => {}}
            />
          </View>

          {/* SYSTEM SETTINGS */}
          <View style={styles.settingsSection}>
            <Text style={styles.settingsSectionTitle}>System</Text>

            <SettingsButton
              icon="help-circle"
              title="Help & Support"
              onPress={() => {}}
            />

            <SettingsButton
              icon="document-text"
              title="Terms & Conditions"
              onPress={() => {}}
            />

            <SettingsButton
              icon="document-lock"
              title="Privacy Policy"
              onPress={() => {}}
            />

            <SettingsButton
              icon="log-out"
              title="Log Out"
              onPress={handleLogout}
            />
          </View>
        </View>
      </SafeAreaView>

      {isEditModalVisible && (
        <EditModal visible={isEditModalVisible} onClose={handleModalToggle} />
      )}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
  },
  userAvatarAndNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.brown,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  nameText: {
    fontFamily: "Cairo-Bold",
    fontSize: 20,
  },
  usernameText: {
    fontFamily: "Cairo-Regular",
    fontSize: 14,
    lineHeight: 22,
  },
  editButton: {
    marginTop: 6,
    paddingVertical: 3,
    paddingHorizontal: 15,
    backgroundColor: Colors.brown,
    borderRadius: 5,
  },
  editButtonText: {
    color: "white",
    fontFamily: "Cairo-Regular",
    fontSize: platform === "android" ? 14 : 12,
    lineHeight: 20,
  },
  settingsContainer: {
    marginTop: 30,
    alignSelf: "flex-start",
    paddingLeft: 20,
    gap: 20,
  },
  settingsSection: {
    gap: 5,
    padding: 3,
  },
  settingsSectionTitle: {
    fontFamily: "Cairo-Bold",
    fontSize: platform === "android" ? 18 : 16,
    lineHeight: 22,
  },
});
