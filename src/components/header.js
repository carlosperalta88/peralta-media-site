/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Header = ({ social, author }) => {
  return (<header
    sx={{
      display: 'grid',
      gridGap: 3,
      maxWidth: 768,
      mx: 'auto',
      px: 3,
      py: 3,
      gridAutoFlow: 'row',
      gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)'],
      variant: 'styles.header',
    }}>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gridColumnStart: [1, 2],
        gridColumnEnd: [3, 3],
        order: [0, 1],
      }}>
      <Link
        sx={{
          textDecoration: 'none',
            '&:link': {
              textDecoration: 'none'
            },
            '&:hover': {
              textDecoration: 'none'
            },
            '&:active': {
              textDecoration: 'none'
            }
        }}
        to="/" title="Home">
        <h1
          sx={{
            fontWeight: 'normal',
            color: 'text',
            mt: 2,
            mx: 'auto',
            textAlign: 'center'
          }}
        >{author.name}
        </h1>
        <span
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'hidden',
            top: -9999,
          }}>
          Home
        </span>
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
        <Link
        to='/projects'
        sx={{
          variant: 'styles.navlink',
          textDecoration: 'none',
          fontFamily: 'body',
          color: 'gray',
          p: 2,
        }}>
        Projects
      </Link>
      <Link
        to='/about'
        sx={{
          variant: 'styles.navlink',
          textDecoration: 'none',
          fontFamily: 'body',
          color: 'gray',
          p: 2,
        }}>
        About Me
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        order: 2,
      }}>
      {social.map((el, i) => {
        return(<a
          href={el.to}
          key={`${i}-${el.to}`}
          target="_blank"
          rel="noreferrer"
          sx={{
            variant: 'styles.navlink',
            textDecoration: 'none',
            color: 'gray',
            p: 2,
            textTransform: 'capitalize',
            fontFamily: 'body'
          }}>
          {el.name}
        </a>)
      })}
    </div>
  </header>)
}

export default Header