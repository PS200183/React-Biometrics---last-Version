import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import ListScreen from './components/ListScreen';
import DetailsScreen from './components/DetailsScreen';
import CompseScreen from './components/CompseScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="stDetails" component={DetailsScreen} />

      <Stack.Screen name="stList" component={ListScreen} />
    </Stack.Navigator>
  );
}


function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Gyroscope" component={HomeScreen} />
      <Tab.Screen name="Table" component={AppStack} />
      <Tab.Screen name="Compase" component={CompseScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
}
export default App;
