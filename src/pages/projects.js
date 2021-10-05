import * as React from 'react'
import Layout from '../components/layout'

const Projects = ({location}) => {
  return (
    <Layout location={location} title="Peralta Media">
      <article>
        <header>
          <h2>
            I Killed The Romance
          </h2>
        </header>
          <p>
            Sound escapes and electronic influences. I've been working on and off this project in the last
            five years. I'm starting to publish again. The challenge is to produce a track every week and publish it.
          </p>
          <a 
            href="https://soundcloud.com/i-killed-the-romance"
            target="_blank"
            rel="noreferrer"
            >SoundCloud</a>
      </article>
    </Layout>
  )
}

export default Projects