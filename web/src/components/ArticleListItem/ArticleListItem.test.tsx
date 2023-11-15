import { render } from '@redwoodjs/testing/web'

import ArticleListItem from './ArticleListItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ArticleListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticleListItem />)
    }).not.toThrow()
  })
})
