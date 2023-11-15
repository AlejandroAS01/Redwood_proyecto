import { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  article: Omit<Post, 'createdAt'>
}
const ArticleListItem = ({ article }: Props) => {
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
    </article>
  )
}

export default ArticleListItem
