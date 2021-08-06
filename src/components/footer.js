/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Footer = ({ siteTitle }) => {
  const menu = [
    {name: 'Home', to: '/'},
    {name: 'Projects', to: '/projects'},
  ]
  return (
    <footer
      sx={{
        fontSize: 1,
        color: 'gray',
        bg: 'background',
        variant: 'styles.footer',
        fontFamily: 'body'
      }}>
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          maxWidth: 768,
          mx: 'auto',
          px: 2,
          py: 4,
        }}>
        {menu.map((el, i) => {
          return (
          <Link 
            to={el.to} 
            key={`${i}-${el.to}`}
            sx={{
              color: 'gray', 
              textDecoration: 'none', 
              variant: 'styles.navlink', 
              p: 2 
            }}>
            {el.name}
          </Link> 
          )
        })}
        <div sx={{ mx: 'auto' }} />
        <div sx={{ p: 2 }}>© 2021 {siteTitle}</div>
      </div>
    </footer>
  )
}

export default Footer