export default function getLocation(city: string) {
  if (city === "Guarapuava") {
    return {
      lat: 12313,
      lng: 34534,
    };
  } else {
    return {
      lat: 0,
      lng: 0,
    };
  }
}
