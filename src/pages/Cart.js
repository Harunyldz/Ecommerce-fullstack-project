import { styled } from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { GrAdd, GrSubtract } from "react-icons/gr";
import { mobile } from "../responsive";

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};
`

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
    flex:3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    ${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
    flex:2;
    display: flex;

`
const Image = styled.img`
    width: 200px;
    height: 150px;
    object-fit: cover;
`
const Details = styled.div`
    display: flex;
    padding: 5px 20px;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #ccc;
    background-color:${props=>props.color};
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer=styled.div` 
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount=styled.div` 
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`
const ProductPrice=styled.div` 
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`

const Hr=styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`
const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle=styled.h1`
    font-weight: 200;
`
const SummaryItem=styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && "500"};
    font-size: ${props=>props.type==="total" && "24px"};
`
const SummaryItemText=styled.span`

`
const SummaryItemPrice=styled.span`

`
const Button=styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`
const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://img.freepik.com/free-photo/young-attractive-emotional-girl-business-style-clothes_78826-2303.jpg?w=1380&t=st=1688766514~exp=1688767114~hmac=198c5301d75e0aa502eee7dd8afa40b7f5e0bd074a28ade82f6a685ff59bbe52" />
                                <Details>
                                    <ProductName><b>Product:</b>BUSINESS STYLE JACKET </ProductName>
                                    <ProductId><b>ID:</b>98749885555 </ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b>M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <GrAdd/>
                                    <ProductAmount>2</ProductAmount>
                                    <GrSubtract/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://img.freepik.com/free-photo/simple-white-v-neck-t-shirt-mockup-wooden-hanger_53876-96985.jpg?w=826&t=st=1688831346~exp=1688831946~hmac=0799f929996caff4d8af653f7739732f904e1d5bff86f6f3115208f7be0dd27a" />
                                <Details>
                                    <ProductName><b>Product:</b>T-SHIRT</ProductName>
                                    <ProductId><b>ID:</b>9874478241 </ProductId>
                                    <ProductColor color="white"/>
                                    <ProductSize><b>Size:</b>S</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <GrAdd/>
                                    <ProductAmount>1</ProductAmount>
                                    <GrSubtract/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem  type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart