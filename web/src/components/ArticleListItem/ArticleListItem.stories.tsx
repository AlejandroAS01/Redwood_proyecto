// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import ArticleListItem from './ArticleListItem'

const meta: Meta<typeof ArticleListItem> = {
  component: ArticleListItem,
}

export default meta

type Story = StoryObj<typeof ArticleListItem>

export const Primary: Story = {}
