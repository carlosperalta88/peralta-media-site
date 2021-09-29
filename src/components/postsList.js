import * as React from 'react'
import { Link } from 'gatsby'

const PostsList = ({ posts }) => {
  return (
    <ul className="article-list">
      {posts.map((post, index) => (
        <li key={`${index}${post.fields.slug}`}>
          <article
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h2>
                <Link
                  to={post.fields.slug}
                >
                  {post.frontmatter.title || post.fields.slug}
                </Link>
              </h2>
              <small>{post.frontmatter.date}</small>
            </header>
            <section>
              <p>
                {post.frontmatter.description || post.excerpt}
              </p>
            </section>
          </article>
        </li>
      ))}
    </ul>
  )
}

export default PostsList