import { useAppDispatch } from "@/hooks/reduxHooks";
import { setPhoto } from "@/lib/slices/photoPreviewSlice";
import { Ionicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useRef, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function Camera({
  visible,
  close,
}: {
  visible: boolean;
  close: () => void;
}) {
  const dispatch = useAppDispatch();
  const [facing, setFacing] = useState("back");
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  if (!cameraPermission) {
    return <View />;
  }

  if (!cameraPermission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.cameraPermissionText}>
          We need your permission to access the camera
        </Text>

        <Pressable onPress={requestCameraPermission}>
          <Text>Grant Permission</Text>
        </Pressable>
      </View>
    );
  }

  const handleToggleFacing = () => {
    setFacing((prev) => (prev === "back" ? "front" : "back"));
  };

  const handlePhotoCapture = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        based64: true,
        exif: false,
      };

      const takePicture = await cameraRef.current.takePictureAsync(options);
      dispatch(setPhoto(takePicture.uri));
      close();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={close}
      animationType="slide"
      statusBarTranslucent
    >
      <View style={styles.container}>
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
          <View style={styles.buttonsView}>
            <Pressable
              onPress={handleToggleFacing}
              style={styles.flipCameraButton}
            >
              <Ionicons name="camera-reverse" size={30} color="black" />
            </Pressable>

            <Pressable
              onPress={handlePhotoCapture}
              style={styles.flipCameraButton}
            >
              <Ionicons name="camera" size={30} color="black" />
            </Pressable>

            <Pressable onPress={close} style={styles.flipCameraButton}>
              <Ionicons name="close" size={30} color="black" />
            </Pressable>
          </View>
        </CameraView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  cameraPermissionText: {
    fontFamily: "Cairo-Medium",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 5,
  },
  buttonsView: {
    flexDirection: "row",
    gap: 20,
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
  },
  flipCameraButton: {
    height: 70,
    width: 70,
    backgroundColor: "white",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
