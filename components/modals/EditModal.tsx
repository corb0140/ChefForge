import { Colors } from "@/constants/Colors";
import { useAppSelector } from "@/hooks/reduxHooks";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import CameraModal from "./CameraModal";

export default function EditModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const photo = useAppSelector((state) => state.photoPreview.photo);
  const [isCameraModalVisible, setIsCameraModalVisible] = useState(false);

  const handleModalToggle = () => {
    setIsCameraModalVisible(true);
  };
  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={onClose}
      animationType="slide"
      statusBarTranslucent
    >
      <View style={styles.container}>
        <Ionicons
          name="close"
          size={24}
          color="black"
          onPress={onClose}
          style={styles.closeIcon}
        />

        <View style={{ alignItems: "center" }}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: photo || "" }} style={styles.image} />
          </View>

          <View style={styles.cameraButtonsContainer}>
            <Pressable style={styles.cameraButton} onPress={handleModalToggle}>
              <Ionicons name="camera" size={24} color="black" />
            </Pressable>

            <Pressable style={styles.cameraButton}>
              <Ionicons name="file-tray" size={24} color="black" />
            </Pressable>
          </View>
        </View>
      </View>

      {isCameraModalVisible && (
        <CameraModal
          visible={isCameraModalVisible}
          close={() => setIsCameraModalVisible(false)}
        />
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    zIndex: 10,
    paddingTop: 80,
  },
  closeIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
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
  cameraButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  cameraButton: {
    padding: 10,
    borderWidth: 2,
    borderColor: Colors.brown,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 120,
    alignItems: "center",
  },
  cameraPermissionText: {
    fontFamily: "Cairo-Medium",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 5,
  },
});
