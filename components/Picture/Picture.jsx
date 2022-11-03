import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function Picture({ route, navigation }) {
  const { idPhoto } = route.params;
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(true);
  const renderImage = () => {
    setLoading(true);
  };
  useEffect(() => {
    setLoading(true);
    setPhoto(idPhoto.urls.full);
  }, [idPhoto.urls.full]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: photo }}
        style={styles.Picture}
        onLoadStart={renderImage}
        onLoadEnd={() => {
          setLoading(false);
        }}
      ></Image>
      {loading ? <Text>Please wait</Text> : ""}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Picture: {
    height: 600,
    width: 500,
    borderRadius: 8,
  },
});
