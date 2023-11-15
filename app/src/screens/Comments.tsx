// Importa las dependencias necesarias
import React from 'react'

import { View, Text, FlatList } from 'react-native'

import { useCommentQuery } from '../api/types' // Ajusta la importación según tu estructura de archivos
import { CommentsProps } from '../navigation'

// Componente Comments que muestra los comentarios asociados a un postId
const CommentsScreen: React.FC<CommentsProps> = ({ route }) => {
  const { postId } = route.params
  // Realiza la consulta GraphQL para obtener los comentarios
  const { data, loading } = useCommentQuery({
    variables: { postId },
  })

  if (loading) {
    return <Text>Loading comments...</Text>
  }

  // Renderiza la lista de comentarios
  return (
    <View style={{ paddingLeft: 20 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 10,
        }}
      >
        Comments:
      </Text>
      <FlatList
        data={data?.comments}
        keyExtractor={(comment) => comment.id.toString()}
        renderItem={({ item: comment }) => (
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{comment.name}</Text>
            <Text>{comment.body}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default CommentsScreen
