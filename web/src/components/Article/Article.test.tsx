import { render, screen } from '@redwoodjs/testing/web'

import Article from './Article'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Article', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Article />)
    }).not.toThrow()
  })
  it('renders successfully with data', () => {
    render(<Article article={{ id: 1, title: 'Mi titulo' }} />)
    expect(screen.getByText('Mi titulo')).toBeInTheDocument()
  })
})
