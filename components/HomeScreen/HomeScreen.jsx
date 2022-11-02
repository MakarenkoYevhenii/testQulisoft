import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllPhoto } from "../../redux/photos/photos-selector";
import { useEffect } from "react";
import { fetchPhotos } from "../../redux/photos/photos-operations";

export default function HomeScreen() {
  const dispatch = useDispatch();

  const contacts = useSelector(getAllPhoto, shallowEqual);
  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={contacts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              <Image
                source={{ uri: item.urls.regular }}
                style={{ height: 240, width: 343, borderRadius: 8 }}
              />
            </View>
          )}
        ></FlatList>
      </View>
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
  form: {
    borderWidth: 0,
    borderBottomColor: "white",
    flex: 0,
    alignItems: "center",
    borderTopColor: "white",
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  postContainer: {
    marginTop: 32,
  },
});
