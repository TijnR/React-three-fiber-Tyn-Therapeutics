import './App.css'
import Section from './components/Section.js'
import Navigation from './components/Navigation'
import ContentBlock from './components/ContentBlock'

import Banner from './components/Banner'

function App() {
  return (
    <>
      <Navigation />
      <Section bgcolor="#F4F4F4">
        <ContentBlock
          subTitle="01 - our mission"
          title="Breakthrought medicines by design."
        >
          The heart of our approach is using collaboration to assemle a powerful
          structure-based drug discovery engine. Our "special sauce" is applying
          that engine and our unique collective expertise to drive target
          selection.
        </ContentBlock>
      </Section>
      <Banner />
      <Section align bgcolor="#F4F4F4">
        <ContentBlock
          subTitle="02 - our Approach"
          title="The engine of drug discovery has arrived"
        >
          Future drugs are hidden in an enormously vast chemical space. We solve
          the most challenging targets by running the largest scale drug screens
          in history to fully explore this space.
        </ContentBlock>
      </Section>
    </>
  )
}

export default App
