import React from "react";

import { View,Text, FlatList, Pressable } from "react-native";
import { usePostsQuery } from "../api/types";
import { PostsProps } from "../navigation";

function PostScreen({  navigation }: PostsProps) {
  const { data, loading } = usePostsQuery()

  if (loading){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data?.posts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({item}) => (
          <Pressable onPress={() => navigation.navigate('Post', { id: item.id })}>
            <View style={{padding: 5}}>
              <Text>{item.title}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
export default PostScreen