import ForgeScreenComponent from "@/components/ForgeScreenComponent";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyForge() {
  const picsumId = 432;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ForgeScreenComponent user={{ isUser: true, id: picsumId.toString() }} />
    </SafeAreaView>
  );
}
