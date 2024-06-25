import { NavigationContainer } from '@react-navigation/native';
import Navigations from './App/component/Navigations';
import VerticalCategories from './App/Screens/Categories';
import { createStackNavigator } from '@react-navigation/stack';
import DoctList from './App/Screens/DoctList';
import Medi from './App/Screens/Medi';
import DietScreen from './App/Screens/DietScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={Navigations} />
        <Stack.Screen name="Categories" component={VerticalCategories} />
        <Stack.Screen name="Order" component={Medi} />
        <Stack.Screen name="Diet" component={DietScreen} />
        <Stack.Screen name="Gynecologist" component={DoctList} />
        <Stack.Screen name="Physician" component={DoctList} />
        <Stack.Screen name="Dentist" component={DoctList} />
        <Stack.Screen name="Urologist" component={DoctList} />
        <Stack.Screen name="General" component={DoctList} />
        <Stack.Screen name="Cardiologist" component={DoctList} />
        <Stack.Screen name="Psychologist" component={DoctList} />
        <Stack.Screen name="Sexologist" component={DoctList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}