import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Main from "./components/Main/Main";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Provider store={store}>
          <Main></Main>
        </Provider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
