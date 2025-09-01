import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

export interface SearchBarProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
}

export default function SearchBar({
  placeholder,
  onChangeText,
  value,
}: SearchBarProps) {
  const onSubmitEditing = () => {
    console.log("Search submitted:", value);

    onChangeText && onChangeText("");
  };
  return (
    <TextInput
      placeholder={placeholder}
      autoCapitalize="none"
      value={value}
      autoCorrect={false}
      style={styles.searchInput}
      placeholderTextColor={Colors.secondary}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
}

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 1,
    borderColor: Colors.pink,
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    flexGrow: 1,
  },
});
