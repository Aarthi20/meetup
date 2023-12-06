import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  height: 70vh;
  font-family: 'Roboto';
`
export const FormImage = styled.img`
  width: 40%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  margin-top: 20px;
`
export const FormHeading = styled.h1`
  color: #334155;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
`
export const Label = styled.label`
  color: #7b8794;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`
export const Input = styled.input`
  color: #7b8794;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #7b8794;
  outline: none;
  width: 50%;
  height: 40px;
  padding: 15px;
  margin-bottom: 20px;
`
export const Select = styled.select`
  color: #334155;
  font-size: 16px;
  font-weight: 600px;
  width: 50%;
  height: 40px;
  background-color: transparent;
  outline: none;
  border: 1px solid #7b8794;
  margin-bottom: 20px;
  padding-left: 15px;
`
export const Option = styled.option`
  color: #334155;
  font-size: 16px;
`
export const Button = styled.button`
  color: #ffffff;
  background-color: #2563eb;
  font-size: 18px;
  font-weight: 700;
  height: 40px;
  width: 200px;
  border-radius: 10px;
  margin-bottom: 25px;
  margin-top: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const FormError = styled.p`
  color: #ff0b37;
  font-size: 13px;
  font-weight: 600px;
  margin: 0;
`
