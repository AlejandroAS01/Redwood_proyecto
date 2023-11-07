import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          This site was created to demonstrate my mastery of Redwood: Look on my
          works, ye mighty, and despair!
        </p>

      </main>
    </>
  )
}

export default AboutPage
