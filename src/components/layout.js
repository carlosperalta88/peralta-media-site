import * as React from 'react'
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from "gatsby"
import ExtraScripts from './scripts'

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
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <div className="color-banner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ExtraScripts />
        <Header social={socialObject} author={author}/>
        <main>
          {children}
        </main>
        <Footer siteTitle={title}/>
      </div>
    )
}

export default Layout