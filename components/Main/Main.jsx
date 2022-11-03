import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../HomeScreen/HomeScreen";
import { Feather, AntDesign } from "@expo/vector-icons";
import RandomPicture from "../Picture/Picture";
import { createStackNavigator } from "@react-navigation/stack";

export default function Main() {
  const NestedScreen = createStackNavigator();
  return (
    <>
      <NestedScreen.Navigator>
        <NestedScreen.Screen name="Home" component={HomeScreen} />
        <NestedScreen.Screen name="onePhoto" component={RandomPicture} />
      </NestedScreen.Navigator>
    </>
  );
}
