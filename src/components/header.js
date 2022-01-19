import * as React from 'react'
import { Link } from 'gatsby'


const Header = ({ social, author }) => {
  const menu = [
    { to: '/', title: 'Home', data: `${author.name}` },
    { to: '/projects', title: 'Projects', data: 'Projects'},
    { to: '/about', title: 'About Me', data: 'About Me'}
  ]
  return (<header>
    <nav className="menu">
      <ul>
        {menu.map((it, i) => {
          return (it.title === 'Home' ? 
          <li
            key={`${i}-${it.to}`}
          >
            <Link to={it.to} title={it.title}>
              <h1 className="author-name">{it.data}</h1>
            </Link>
          </li>
          :
          <li
            key={`${i}-${it.to}`}          
          >
            <Link
              to={it.to}
              >
              {it.data}
            </Link>
          </li>
        )
        })}
      </ul>
    </nav>
    <ul className="social-links">
      {social.map((el, i) => {
        return(<li
          key={`${i}-${el.to}`}
        ><a
          href={el.to}
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