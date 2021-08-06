const theme = {
  fontWeight: {
    heading: 600
  },
  styles: {
    fontWeight: {
      heading: 'heading'
    },
    root: {
      h1: {
        color: 'primary',
        fontFamily: 'body',
        fontWeight: 'heading'
      },
      h2: {
        color: 'primary',
        fontFamily: 'body',
        fontWeight: 'heading'
      },
      h3: {
        color: 'primary',
        fontFamily: 'body',
        fontWeight: 'heading'
      },
      a: {
        color: 'primary',
        textDecoration: 'none',
        ':hover,:focus': {
          color: 'secondary',
          textDecoration: 'underline',
          transition: 'all 0.25s ease-in-out',
        },
      }
    }
  }
}

export default theme