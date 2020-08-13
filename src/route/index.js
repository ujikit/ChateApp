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
  SettingProfile,
  EditPassword,
  EditProfile,
  ShareMoments,
} from '../pages';
import {TabNavigator} from '../component';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
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
      <Stack.Screen
        name="SettingProfile"
        component={SettingProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditPassword"
        component={EditPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShareMoments"
        component={ShareMoments}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
