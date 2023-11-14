import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, logOut } = useAuth()

  return (
    <>
      <header className="bg-blue-600">
        <div className="flex-between items-center px-4">
          <h1>
            <Link to={routes.home()} className="text-3xl   text-blue-400 ">
              Redwood Blog
            </Link>
          </h1>
          <nav>
            <ul className="text-gray-100">
              <li>
                <Link to={routes.about()}>About</Link>
              </li>
              <li>
                <Link to={routes.contact()}>Contact</Link>
              </li>
              <li>
                {isAuthenticated ? (
                  <div>
                    <button type="button" onClick={logOut}>
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link to={routes.login()}>Login</Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="bg-yellow-100 p-10">{children}</main>
    </>
  )
}

export default BlogLayout
