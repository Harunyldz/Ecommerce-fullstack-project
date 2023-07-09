import { styled } from "styled-components";
import { GrFacebook, GrInstagram, GrPinterest, GrTwitter,GrLocation, GrPhone, GrMailOption } from "react-icons/gr";
import { mobile } from "../responsive";


const Container=styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Left=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo=styled.h1`

`
const Desc=styled.p`
    margin: 20px 0;
`
const SocialContainer=styled.div`
    display: flex;
`
const SocialIcon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px ;
    font-size: 20px;
`
const Center=styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display: "none" })}
`

const Title=styled.h3`
    margin-bottom: 30px;
`
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem=styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right=styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`

const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment=styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>H&Y</Logo>
            <Desc>Greater things can be written, but not in pursuit of perfection.</Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <GrFacebook/>
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <GrInstagram/>
                </SocialIcon >
                <SocialIcon color="55acee">
                    <GrTwitter/>
                </SocialIcon>
                <SocialIcon color="e60023">
                    <GrPinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <GrLocation style={{fontSize:'24px', marginRight:'10px'}}/> 
                622 Dixie Path , South Tobinchester 98336
            </ContactItem>
            <ContactItem><GrPhone style={{fontSize:'24px', marginRight:'10px'}}/>
                +1 234 56 78
            </ContactItem>
            <ContactItem><GrMailOption style={{fontSize:'24px', marginRight:'10px'}}/>
                contact_h&y@gmail.com
            </ContactItem>
            <Payment src="https://logodix.com/logo/488100.jpg"/>
        </Right>
    </Container>
  )
}

export default Footer