import React from 'react'

import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import CommentsScreen from '../screens/Comments'
import PostScreen from '../screens/Post'
import PostsScreen from '../screens/Posts'

type StackParamsList = {
  Posts: undefined
  Post: { id: number }
  Comments: { postId: number }
  CommentForms: undefined
}

export type PostsProps = NativeStackScreenProps<StackParamsList, 'Posts'>
export type PostProps = NativeStackScreenProps<StackParamsList, 'Post'>
export type CommentsProps = NativeStackScreenProps<StackParamsList, 'Comments'>

const Stack = createNativeStackNavigator<StackParamsList>()

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Posts" component={PostsScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Comments" component={CommentsScreen} />
    </Stack.Navigator>
  )
}
