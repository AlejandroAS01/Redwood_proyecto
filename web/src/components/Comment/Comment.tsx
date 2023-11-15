import { DeleteCommentMutation } from 'types/graphql'

import { Submit } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { gql } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteCommentMutation($id: Int!) {
    deleteComment(id: $id) {
      id
    }
  }
`

const Comment = ({ comment }) => {
  const { hasRole } = useAuth()
  const [deleteComment] = useMutation<DeleteCommentMutation>(
    DELETE_COMMENT_MUTATION,
    {
      update(cache, { data }) {
        cache.modify({
          fields: {
            comments(values, { readField }) {
              return values.filter(
                (value) => readField('id', value) !== data.deleteComment.id
              )
            },
          },
        })
      },
    }
  )
  const handleDelete = async () => {
    try {
      // Llama a la mutación de eliminación
      const { data } = await deleteComment({ variables: { id: comment.id } })
      // Verifica si la mutación fue exitosa
      if (data && data.deleteComment) {
        // Llama a la función onDelete pasada como prop
      } else {
        console.error('Error al eliminar el comentario')
      }
    } catch (error) {
      console.error('Error al eliminar el comentario:', error.message)
      throw new Error('Error al eliminar el comentario')
    }
  }
  const onSubmit = async (event) => {
    event.preventDefault() // Evitar la acción de envío predeterminada
    // Realizar la lógica de eliminación al enviar el formulario
    await handleDelete()
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="rounded-lg bg-gray-200 p-8">
        <header className="flex justify-between">
          <h2 className="font-semibold text-gray-700">{comment?.name}</h2>
          <time
            className="text-xs text-gray-500"
            dateTime={comment.createdAt}
          ></time>
        </header>
        <p className="mt-2 text-sm">{comment.body}</p>
        {hasRole('admin') && (
          <Submit className="button border-2 border-black"> Borrar</Submit>
        )}
      </div>
    </form>
  )
}

export default Comment
