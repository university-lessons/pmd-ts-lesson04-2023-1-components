import { View, Text, Button } from "react-native";
import React, { useState } from "react";

export default function RouteTracer() {
  const [distance, setDistance] = useState(0);

  const calculate = () => {
    setDistance(Math.random() * 500);
  };

  return (
    <View>
      <Button title="Calculate" onPress={calculate} />
      <Text>Distance in Kms: {distance}</Text>
    </View>
  );
}
