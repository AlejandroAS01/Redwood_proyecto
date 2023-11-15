import React, { useState } from 'react'

import { View, TextInput, Text, Button } from 'react-native'

import { CreateCommentInput } from '../api/types'

interface ComentFormProps {
  onCommentSubmit: (comment: CreateCommentInput) => void
  postId: number
}

const CommentForms: React.FC<ComentFormProps> = ({
  onCommentSubmit,
  postId,
}) => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const handleCommentSubmit = () => {
    // Lógica para enviar el comentario
    onCommentSubmit({
      name,
      body: comment,
      postId,
    })

    // Limpiar el campo del comentario después de enviarlo
    setName('')
    setComment('')
  }
  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Nombre:</Text>
      <TextInput
        placeholder="Escribe tu nombre aquí..."
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ borderColor: 'gray', borderWidth: 1 }}
      />
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Agregar comentario:
      </Text>
      <TextInput
        style={{
          height: 80,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        multiline
        placeholder="Escribe tu comentario aquí..."
        value={comment}
        onChangeText={(text) => setComment(text)}
      />
      <Button title="Enviar Comentario" onPress={handleCommentSubmit} />
    </View>
  )
}
export default CommentForms
