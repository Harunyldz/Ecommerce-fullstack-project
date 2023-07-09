import { styled } from "styled-components"
import { mobile } from "../responsive"


const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255,255,255, 0.5)
    ), url("https://img.freepik.com/free-photo/young-pretty-woman-wearing-hat-sunglasses-pointed-peace-gesture-blue-wall_231208-2690.jpg?w=1380&t=st=1688763874~exp=1688764474~hmac=cb8c2fd10827aa2ca8f53c4c25401cb932dc80a5ecfef66afb7ca970c579a590") center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper=styled.div`
    padding: 20px;
    width: 25%;
    background-color: #fff;
    ${mobile({ width: "75%" })}
`
const Title=styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form=styled.form`
    display: flex;
        flex-direction: column;
`
const Input=styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0 ;
    padding: 10px;
`
const Button=styled.button`
    width: 40%;
    border: none;
    padding:15px 20px;
    background-color: teal;
    cursor: pointer;
    color: white;
    margin-bottom: 10px;
`

const Link=styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
    <Wrapper>
    <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Button>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
    </Wrapper>
</Container>
  )
}

export default Login