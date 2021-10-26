
import { ReactElement } from 'react'
import { Hero, HeroIntro, HeroTitle } from '../components/styles/Hero'
import { Card, CardTitle, CardBody } from '../components/styles/Card'
import { Home } from '../components/styles/Home'

const IndexPage = (): ReactElement => (
  <Home>
    <Hero>
      <HeroTitle>Hi, I'm Christian</HeroTitle>
      <HeroIntro>A Brisbane-based Front-end web developer, QA Analyst and bread-baking hobbyist.</HeroIntro>
    </Hero>
    <Card>
      <CardTitle>Complete Markdown syntax reference</CardTitle>
      <CardBody>
        Markdown: Syntax Overview Philosophy Inline HTML Automatic Escaping for Special Characters Block Elements Paragraphs and Line Breaks Headers…
      </CardBody>
    </Card>
  </Home>
)


export default IndexPage