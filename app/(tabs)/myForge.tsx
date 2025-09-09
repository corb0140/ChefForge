import ForgeScreenComponent from "@/components/ForgeScreenComponent";
import ForgeScreenNotLoggedInComponent from "@/components/ForgeScreenNotLoggedInComponent";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyForge() {
  const picsumId = 432;
  const [isUser, setIsUser] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isUser ? (
        <ForgeScreenComponent
          user={{ isUser: true, id: picsumId.toString() }}
        />
      ) : (
        <ForgeScreenNotLoggedInComponent />
      )}
    </SafeAreaView>
  );
}
