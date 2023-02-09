import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Page1 from './Page1';
import Flex from './Page2';
import FlatListBasics from './Page3';
import Page4 from './Page4';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Page1}
          options={{ title: 'Trang chu' }}
        />
        <Stack.Screen name="Flex" component={Flex} />
        <Stack.Screen name="Page3" component={FlatListBasics} />
        <Stack.Screen name="Page4" component={Page4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
