/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Themed } from 'theme-ui'

const PostsList = ({ posts }) => {
  return (
    <ul
      sx={{
        listStyle: 'none',
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        m: 0,
        px: 3,
        py: 4,
      }}>
      {posts.map((post, index) => (
        <li key={`${index}${post.fields.slug}`} sx={{}}>
          <article
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <Themed.h2
                sx={{
                  m: 0,
                }}>
                <Link
                  to={post.fields.slug}
                >
                  {post.frontmatter.title || post.fields.slug}
                </Link>
              </Themed.h2>
              <small sx={{ fontFamily: 'body', fontWeight: 'bold' }}>{post.frontmatter.date}</small>
            </header>
            <section>
              <Themed.p
                sx={{
                  m: 0,
                }}>
                {post.frontmatter.description || post.excerpt}
              </Themed.p>
            </section>
          </article>
        </li>
      ))}
    </ul>
  )
}

export default PostsList