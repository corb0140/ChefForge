import ForgeScreenComponent from "@/components/ForgeScreenComponent";
import ForgeScreenNotLoggedInComponent from "@/components/ForgeScreenNotLoggedInComponent";
import { useAppSelector } from "@/hooks/reduxHooks";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyForge() {
  const user = useAppSelector((state) => state.user);

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
