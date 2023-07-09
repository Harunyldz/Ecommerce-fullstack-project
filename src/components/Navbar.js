import React from 'react'
import styled from 'styled-components'
import { GrSearch, GrCart } from "react-icons/gr";
import { IconContext } from 'react-icons';
import { mobile } from '../responsive';

const Container = styled.div`
    height:60px;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
cursor: pointer;
font-size: 14px;
${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
border:1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input = styled.input`
border: none;
outline: none;
${mobile({ width: "50px" })}
`

const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
font-weight:bold;
${mobile({ fontSize: "24px" })}
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2, justifyContent: "center" })}
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
position: relative;
${mobile({ fontSize: "12px", marginLeft:"10px" })}
`
const Badge = () => {
    return (
        <div>
            <IconContext.Provider value={{ color: 'red', size: '2em' }} >
                <div>
                    <GrCart />
                    <span style={{
                        background: 'teal',
                        color: 'white',
                        padding: '4px 8px',
                        position: 'absolute',
                        borderRadius: '50%',
                        top: -10,
                        right: -15,
                        fontSize: '1em'
                    }}>3</span>
                </div>
            </IconContext.Provider >
        </div >
    );
};

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'></Input>
                        <GrSearch style={{ color: 'gray', fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>H&Y</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge />
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar