import Header from '../Header'
import RegisterContext from '../../Context/RegisterContext'

import {
  RegisterContainer,
  FormContainer,
  FormImage,
  Form,
  FormHeading,
  Label,
  Input,
  Select,
  Option,
  Button,
  FormError,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        updateName,
        updateTopic,
        changeRegistrationStatus,
        updateError,
        registerError,
      } = value

      const submitForm = event => {
        event.preventDefault()
        changeRegistrationStatus()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
        } else {
          updateError(true)
        }
      }

      const onChangeName = event => {
        updateName(event.target.value)
      }

      const onChangeTopic = event => {
        updateTopic(event.target.value)
      }

      return (
        <>
          <Header />
          <RegisterContainer>
            <FormContainer>
              <FormImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />

              <Form onClick={submitForm}>
                <FormHeading>Let us Join</FormHeading>
                <Label htmlFor="name">NAME</Label>
                <Input
                  type="text"
                  value={name}
                  onChange={onChangeName}
                  placeholder="Your name"
                  id="name"
                />

                <Label htmlFor="topic">TOPICS</Label>
                <Select value={topic} id="topic" onChange={onChangeTopic}>
                  {topicsList.map(each => (
                    <Option key={each.id} value={each.id}>
                      {each.displayText}
                    </Option>
                  ))}
                </Select>

                <Button type="submit">Register Now</Button>
                {registerError ? (
                  <FormError>Please enter your name?</FormError>
                ) : null}
              </Form>
            </FormContainer>
          </RegisterContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
