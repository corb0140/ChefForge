/* eslint-disable react-hooks/exhaustive-deps */
import ForgeScreenComponent from "@/components/ForgeScreenComponent";
import ForgeScreenNotLoggedInComponent from "@/components/ForgeScreenNotLoggedInComponent";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { getUserImage } from "@/lib/axios";
import { saveImage } from "@/lib/secureStore";
import { setUserImage } from "@/lib/slices/userSlice";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyForge() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUserImage = async () => {
      if (!user.accessToken) return;

      try {
        const userImage = await getUserImage(user.accessToken);
        if (userImage) {
          await saveImage("userImage", userImage);
          dispatch(setUserImage({ imageUri: userImage }));
        }
      } catch (err) {
        console.error("Error fetching user image:", err);
      }
    };

    fetchUserImage();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {user.user.id !== "" ? (
        <ForgeScreenComponent user={user.user} />
      ) : (
        <ForgeScreenNotLoggedInComponent />
      )}
    </SafeAreaView>
  );
}
