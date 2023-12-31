import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import CommentsCell from 'src/components/CommentsCell'

import CommentForm from '../CommentForm/CommentForm'

const truncate = (text: string, length: number) => {
  return text.substring(0, length) + '...'
}

interface Props {
  article: Omit<Post, 'createdAt'>
  summary?: boolean
}

const Article = ({ article, summary = false }: Props) => {
  return (
    <article className="mt-12">
      <header>
        <h2 className="text-xl font-semibold text-blue-700">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
          <span className="ml-2 font-normal text-gray-400">
            by {article.user.name}
          </span>
        </h2>
      </header>
      <div className="mt-2 font-light text-gray-900">
        {summary ? truncate(article.body, 100) : article.body}
      </div>

      {!summary && (
        <div>
          <CommentsCell postId={article.id} />
        </div>
      )}
      <CommentForm postId={article.id} />
    </article>
  )
}
export default Article
