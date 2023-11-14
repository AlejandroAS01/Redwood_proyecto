import React from 'react'

import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'

import { usePostsQuery } from '../api/types'
import { PostsProps } from '../navigation'

const { width } = Dimensions.get('window')

function PostScreen({ navigation }: PostsProps) {
  const { data, loading } = usePostsQuery()

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.kXA3W_F3Ss4OtJKY2bGTxQHaFj?w=255&h=192&c=7&r=0&o=5&pid=1.7',
        }}
      />
      <FlatList
        data={data?.posts}
        keyExtractor={(post) => post.id.toString()}
        style={styles.list}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('Post', { id: item.id })}
          >
            <View style={{ padding: 15 }}>
              <Text>{item.title}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  img: {
    width,
    bottom: 0,
    top: 0,
    position: 'absolute',
    objectFit: 'cover',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default PostScreen
