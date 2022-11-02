import { Text, View } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen/HomeScreen";
import { Feather, AntDesign } from "@expo/vector-icons";
import RandomPicture from "../randomPicture/RandomPicture";

export default function Main() {
  const MainTab = createBottomTabNavigator();
  return (
    <>
      <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
        <MainTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (
              <Feather name="grid" size={size} color={color} />
            ),
          }}
        />
        <MainTab.Screen
          name="Create"
          component={RandomPicture}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (
              <AntDesign name="plus" size={size} color={color} />
            ),
          }}
        />
      </MainTab.Navigator>
    </>
  );
}
