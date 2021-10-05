import * as React from 'react';
import { Link } from 'gatsby';

const Footer = ({ siteTitle }) => {
  const menu = [
    {name: 'Home', to: '/'},
    {name: 'Projects', to: '/projects'},
    {name: 'About Me', to: '/about'},
  ]
  return (
    <footer>
      <ul>
        {menu.map((el, i) => {
          return (<li key={`${i}-${el.to}li`}>
            <Link 
              to={el.to} 
              key={`${i}-${el.to}`}>
              {el.name}
            </Link>
          </li>
          )
        })}
      </ul>
      <p className="site">© 2021 {siteTitle}</p>
    </footer>
  )
}

export default Footer