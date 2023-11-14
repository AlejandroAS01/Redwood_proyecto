import React from 'react'

import { View, Text, ScrollView } from 'react-native'

import { usePostQuery } from '../api/types'
import { PostProps } from '../navigation'

function PostScreen({ route }: PostProps) {
  const { id } = route.params
  const { data, loading } = usePostQuery({ variables: { id } })

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 10,
        width: 400,
        height: 500,
      }}
    >
      <Text
        style={{
          padding: 5,
        }}
      >
        {data?.post?.title}
      </Text>

      <View style={{ borderWidth: 1.5, borderRadius: 2.5 }}>
        <Text
          style={{
            flex: 2,

            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: '#D8EEEE',
          }}
        >
          {data?.post?.body}
        </Text>
      </View>
      <View style={{ padding: 15, alignContent: 'space-between' }}>
        <Text style={{ color: 'gray' }}>
          Creado el: {data?.post?.createdAt}
        </Text>
        <Text style={{ color: 'gray' }}>
          Escrito por: {data?.post?.user.name}
        </Text>
      </View>
    </ScrollView>
  )
}

export default PostScreen
