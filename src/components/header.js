import * as React from 'react'
import { Link } from 'gatsby'

const Header = ({ social, author }) => {
  return (<header>
    <nav className="menu">
      <ul>
        <li>
          <Link to="/" title="Home">
            <h1 className="author-name">{author.name}</h1>
          </Link>
        </li>
        <li>
          <Link
            to='/projects'
            >
            Projects
          </Link>
        </li>
        <li>
        <Link
          to='/about'
          >
          About Me
        </Link>
        </li>
      </ul>
    </nav>
    <ul className="social-links">
      {social.map((el, i) => {
        return(<li><a
          href={el.to}
          key={`${i}-${el.to}`}
          target="_blank"
          rel="noreferrer"
          >
          {el.name}
        </a></li>)
      })}
    </ul>
  </header>)
}

export default Header