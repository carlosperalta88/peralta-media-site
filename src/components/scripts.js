import * as React from "react"
import { Helmet } from "react-helmet"

const extraScripts = () => {
  return (
    <Helmet>
      <script defer data-domain="peralta.media" src="https://plausible.io/js/plausible.js"></script>
    </Helmet>
  )
}

export default extraScripts