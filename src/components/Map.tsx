import { View, Text } from "react-native";
import React from "react";
import getLocation from "../helpers/getLocation";

interface MapProps {
  city: string;
}

export default function Map({ city }: MapProps) {
  const myLocation = getLocation(city);

  return (
    <View>
      <Text>{city} Map</Text>
      <Text> Lat: {myLocation.lat} </Text>
      <Text> Lng: {myLocation.lng} </Text>
    </View>
  );
}
