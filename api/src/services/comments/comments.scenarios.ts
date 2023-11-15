import type { Prisma, Comment } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        name: 'String',
        body: 'String',
        post: {
          create: {
            title: 'String',
            body: 'String',
            user: {
              create: {
                email: 'String525314',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        body: 'String',
        post: {
          create: {
            title: 'String',
            body: 'String',
            user: {
              create: {
                email: 'String1712200',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
