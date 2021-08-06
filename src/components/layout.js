/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter,
            linkedIn
          }
        }
      }
    }
  `)
  const { social, author } = data.site.siteMetadata
  const socialObject = (social !== undefined ? Object.keys(social).map((k) => {
    return { name: k, to: social[k] }
  }): [])
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
      <div
        className="global-wrapper" 
        data-is-root-path={isRootPath}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          fontFamily: 'body'
        }}>
        <Header social={socialObject} author={author}/>
        <main
          sx={{
            width: '100%',
            flex: '1 1 auto',
          }}>
          {children}
        </main>
        <Footer siteTitle={title}/>
      </div>
    )
}

export default Layout