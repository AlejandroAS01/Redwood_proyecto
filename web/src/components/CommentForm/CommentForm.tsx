import {
  CreateCommentMutation,
  CreateCommentMutationVariables,
} from 'types/graphql'

import {
  FieldError,
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      name
      body
      postId
      createdAt
    }
  }
`
const CommentForm = ({ postId }) => {
  const formMethods = useForm()
  const [createComment] = useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(CREATE_COMMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Comment created')
      formMethods.reset()
    },
    onError: (error) => {
      toast.error(error.message)
    },
    update(cache, { data }) {
      cache.modify({
        fields: {
          comments(value) {
            return [...value, data.createComment]
          },
        },
      })
    },
  })

  const onSubmit = (input) => {
    const commentInput = {
      name: input.name,
      body: input.body,
      postId: postId,
    }

    // Llama a la mutación con el objeto input
    createComment({ variables: { input: commentInput } })
    console.log('Comentario creado')
  }

  return (
    <Form onSubmit={onSubmit} formMethods={formMethods}>
      <Label name="name" className="label" errorClassName="label error" />
      <TextField
        name="name"
        className="input border-2 border-black"
        errorClassName="input error"
        validation={{ required: false }}
      />
      <FieldError name="name" className="error-message " />
      <Label name="body" className="label " errorClassName="label error" />
      <TextAreaField
        name="body"
        className="input border-2  border-black"
        errorClassName="input error"
        validation={{ required: true }}
      />
      <FieldError name="body" className="error-message border-2" />

      <Submit className="button border-2 border-black">Save</Submit>
    </Form>
  )
}

export default CommentForm
