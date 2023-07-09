
import { styled } from "styled-components"
import { mobile } from "../responsive"


const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255,255,255, 0.5)
    ), url("https://img.freepik.com/free-photo/portrait-beautiful-young-woman-gesticulating_273609-41056.jpg?w=1380&t=st=1688763214~exp=1688763814~hmac=4774ae7c61baee95c1ec78f04737527a41256b412b09d8d5d88e4c803c7147d6") center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper=styled.div`
    padding: 20px;
    width: 40%;
    background-color: #fff;
    ${mobile({ width: "75%" })}
`
const Title=styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form=styled.form`
    display: flex;
    flex-wrap: wrap;

`
const Input=styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0 0 ;
    padding: 10px;
`
const Agreement=styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Button=styled.button`
    width: 40%;
    border: none;
    padding:15px 20px;
    background-color: teal;
    cursor: pointer;
    color: white;
`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in 
                    accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register