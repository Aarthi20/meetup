import {Link} from 'react-router-dom'
import Header from '../Header'

import RegisterContext from '../../Context/RegisterContext'

import {
  Heading,
  Paragraph,
  Button,
  RegisterImage,
  RegisteredHeading,
  RegisteredTopic,
  Container,
} from './styledComponents'

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  const renderRegisteredView = () => (
    <>
      <Heading>Welcome to Meetup</Heading>
      <Paragraph>Please register for the topic</Paragraph>
      <Link to="/register">
        <Button onClick={onClickRegister}>Register</Button>
      </Link>
      <RegisterImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  const renderAfterRegisterView = (name, topic) => (
    <>
      <RegisteredHeading>{`Hello ${name}`}</RegisteredHeading>
      <RegisteredTopic>{`Welcome to ${topic}`}</RegisteredTopic>
      <RegisterImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegister, name, topic} = value
        return (
          <>
            <Header />
            <Container>
              {isRegister
                ? renderAfterRegisterView(name, topic)
                : renderRegisteredView()}
            </Container>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
