import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/Products';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: 'GizoStore',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#4a235a'},
            headerTitleStyle: {color: '#fff'},
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Detay',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#4a235a'},
            headerTintColor: 'white',
            headerTitleStyle: {color: '#fff'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
