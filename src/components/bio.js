/** @jsx jsx */
import { jsx } from 'theme-ui'

const Bio = () => {
  return (
    <div 
      sx={{
        justifyContent: 'center',
        display: 'flex'
      }}
    >
      <p
        sx={{
          color: 'gray',
          fontFamily: 'body',
          fontStyle: 'italic',
          textAlign: 'center',
          mb: 0
        }}
      >I keep my creative process alive by writting about it.</p> 
    </div>
  )
}

export default Bio
