import React, { Fragment } from 'react'
// import style from "./Main.st.css"
import Button from '../Components/Button'
import Title from '../Components/Title'

const style = {}

const Home = props => (
  <main>
    <Fragment>
      <Title>
        Should I use <span className={style.blue}>React</span> or{' '}
        <span className={style.yellow}>Vue</span>?
      </Title>
      <Title>Play to find out</Title>
      <Button onClick={() => props.history.push('/app')}>Start</Button>
    </Fragment>
  </main>
)

export default Home
