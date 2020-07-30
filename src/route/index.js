import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Splash,
  GetStarted,
  Login,
  Daftar,
  UploadPhoto,
  ForgotPass,
  Home,
  Message,
  Profile,
  Chatting,
} from '../pages';
import {TabNavigator} from '../component';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabNavigator {...props} />}
      tabBarOptions={{keyboardHidesTabBar: true}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{keyboardHidesTabBar: true}}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Daftar"
        component={Daftar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPass"
        component={ForgotPass}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
