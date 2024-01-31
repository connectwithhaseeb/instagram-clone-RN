/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DiscoverScreen from './screens/Discover';
import { StatusBar } from 'react-native';
import CreatePostScreen from './screens/CreatePost';
import NotificationsScreen from './screens/Notifications';
import ProfileScreen from './screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import FeatherIcon from 'react-native-vector-icons/Feather';
import logo from './assets/images/instagram.png';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
      name="HomePage" 
      component={HomeScreen}
      options={{
        headerTitleAlign:'center',
        headerLeft:()=>(
          <Ionicons name='camera-outline' size={25} color={'#000'}></Ionicons>
        ),
        headerTitle:()=>(
          <Image 
          source={logo} 
          resizeMode='contain'
          style={{
            width:135,
            height:55,
          }}
          />
        ),
        headerRight:()=>(
          <Ionicons name='paper-plane-outline' size={23} color={'#000'} ></Ionicons>
        ),
      }}
      />
    </HomeStack.Navigator>
  );
}


function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
       <Tab.Navigator 
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Home') {
              return <Foundation name={'home'} size={size+3} color={color} />;
            }
            if (route.name === 'Discover') {
              return <FeatherIcon name={'search'} size={size} color={color} />;
            }
            if (route.name === 'Post') {
              return <FeatherIcon name={'plus-square'} size={size} color={color} />;
            }
            if (route.name === 'Notifications') {
              return <Ionicons name={'heart-outline'} size={size+2} color={color} />;
            }
            if (route.name === 'Profile') {
              return <Ionicons name={'person-outline'} size={size} color={color} />;
            }
        
          },
          tabBarShowLabel:false,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen}options={{headerShown:false}} />
        <Tab.Screen name="Discover" component={DiscoverScreen} options={{headerShown:false}} />
        <Tab.Screen name="Post" component={CreatePostScreen} options={{headerShown:false}} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} options={{headerShown:false}} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
