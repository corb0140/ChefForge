import ForgeScreenComponent from "@/components/ForgeScreenComponent";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserForge() {
  const { params } = useRoute();
  const { id } = params as { id: string };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ForgeScreenComponent
        chefId={id}
        user={{ id: "", email: "", first_name: "", last_name: "", bio: "" }}
      />
    </SafeAreaView>
  );
}
