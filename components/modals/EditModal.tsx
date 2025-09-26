import { Colors } from "@/constants/Colors";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { uploadImage } from "@/lib/axios";
import { saveImage } from "@/lib/secureStore";
import { setUserImage } from "@/lib/slices/userSlice";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import CameraModal from "./CameraModal";

export default function EditModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const dispatch = useAppDispatch();
  const photo = useAppSelector((state) => state.photoPreview.photo);
  const token = useAppSelector((state) => state.user.accessToken);
  const [isCameraModalVisible, setIsCameraModalVisible] = useState(false);

  const handleUploadImage = async (fileUri: string) => {
    try {
      const formData = new FormData();
      formData.append("image", {
        uri: fileUri,
        name: "photo.jpg",
        type: "image/jpeg",
      } as any);

      const response = await uploadImage(formData, token || "");
      console.log("Image uploaded successfully:", response.data);

      if (response.data.imageUri) {
        await saveImage("userImage", response.data.imageUri);

        dispatch(setUserImage({ imageUri: response.data.imageUri }));
      }

      onClose();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = () => {
    if (photo) {
      handleUploadImage(photo);
    }
  };

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

          <Pressable
            style={[styles.cameraButton, { marginTop: 20 }]}
            onPress={handleSubmit}
          >
            <Ionicons name="cloud-upload" size={24} color="black" />
            <Text>Upload</Text>
          </Pressable>
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
