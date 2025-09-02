import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

export interface addRecipeInputProps {
  placeholder: string;
  onChangeText?: (text: string) => void;
  value?: string;
  height?: number;
  multiline?: boolean;
  marginBottom?: number;
  onSubmitEditing?: () => void;
}

export default function AddRecipeInput({
  placeholder,
  onChangeText,
  value,
  height,
  multiline = false,
  marginBottom,
  onSubmitEditing,
}: addRecipeInputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={Colors.primary}
      style={[
        styles.input,
        { height: height || 50, marginBottom: marginBottom || 15 },
      ]}
      onChangeText={onChangeText}
      value={value}
      multiline={multiline}
      onSubmitEditing={onSubmitEditing}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.lightPink,
    borderRadius: 5,
    padding: 10,
    fontFamily: "Cairo-Regular",
    fontSize: 15,
    lineHeight: 30,
    textAlignVertical: "top",
    flexGrow: 1,
  },
});
