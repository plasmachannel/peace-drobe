import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from "./src/pages/Profile";
import HomeScreen from "./src/pages/Home";
import Login from "./src/pages/Login";

const Stack = createNativeStackNavigator();


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen
            name="Login"
            options={{title: "Please login"}}
            component={Login}
          />

          <Stack.Screen name="Profile" component={ProfileScreen}/>

      </Stack.Navigator>

      </NavigationContainer>
  );
}

