import React from 'react'

import { View, Text, ScrollView, Pressable } from 'react-native'

import {
  CreateCommentInput,
  useCreateCommentMutation,
  usePostQuery,
} from '../api/types'
import CommentForms from '../components/CommentForm'
import { PostProps } from '../navigation'

function PostScreen({ route, navigation }: PostProps) {
  const { id } = route.params
  const { data, loading } = usePostQuery({ variables: { id } })
  const [createComment] = useCreateCommentMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          comments(value) {
            return [...value, data?.createComment]
          },
        },
      })
    },
  })
  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  // Función para navegar al screen de comentarios
  const navigateToComments = () => {
    navigation.navigate('Comments', { postId: id })
  }

  const handleCommentSubmit = (comment: CreateCommentInput) => {
    // Lógica para enviar el comentario al servidor
    console.log('Comentario enviado:', comment)
    createComment({ variables: { input: comment } })
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
      <Pressable onPress={navigateToComments}>
        <Text style={{ color: 'blue' }}>Ver comentarios</Text>
      </Pressable>
      <CommentForms onCommentSubmit={handleCommentSubmit} postId={id} />
    </ScrollView>
  )
}

export default PostScreen
