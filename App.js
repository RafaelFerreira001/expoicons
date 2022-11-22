import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaAntDesign from "./components/TelaAntDesign";
import TelaEntypo from "./components/TelaEntypo";
import TelaOcticons from "./components/TelaOcticons";

const Menu = createBottomTabNavigator().Navigator;
const ItensMenu = createBottomTabNavigator().Screen;

export default function App() {
  return (
    <NavigationContainer>
      <Menu>
        <ItensMenu name="AntDesign" component={TelaAntDesign} />
        <ItensMenu name="Entypo" component={TelaEntypo} />
        <ItensMenu name="Octicons" component={TelaOcticons} />
      </Menu>
    </NavigationContainer>
  );
}
