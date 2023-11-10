import React from 'react';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';

import PostsScreen from '../screens/Posts';
import PostScreen from '../screens/Post';

type StackParamsList = {
    Posts: undefined
    Post: { id: number }
}

export type PostsProps = NativeStackScreenProps<StackParamsList, 'Posts'>
export type PostProps = NativeStackScreenProps<StackParamsList, 'Post'>

const Stack = createNativeStackNavigator<StackParamsList>();

export default function Navigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
  );
}
