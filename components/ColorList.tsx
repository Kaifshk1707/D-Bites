import { View, Text, ScrollView } from "react-native";
import React from "react";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const ColorList = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: "100%",
      }}
    >
      {[0, 10.8, 0.5].map((opacity) => (
        <View
          key={opacity}
          style={{
            width: "100%",
            height: 150,
            borderRadius: 25,
            borderCurve: "continuous",
            marginBottom: 15,
          }}
        />
      ))}
    </ScrollView>
  );
};

export default ColorList;
