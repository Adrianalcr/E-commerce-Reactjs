import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styled from "styled-components";
import { relatedProducts } from "../data";
import { mobile } from "../responsivo";
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
import { Rating } from "@mui/material";

const BotaoAcao = styled.div`
    opacity: 0;
    height: 250px;
    width: 90%;
    padding: 30px;
    margin-top: -195px;
    margin-left: 0px;
    display: flex;
    aligm-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease;
    z-index: 3;


    &:hover {
        background-color: rgba(4, 138, 104,0.5);
        transform: scale(1.0);
    }

    ${mobile({ width: "80%", height: "70%" })}
`;

const Container = styled.div`
    margin-top: 0px;
    margin-bottom: 45px;
    width: 100%;
    height: 650px;
    padding: 30px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover ${BotaoAcao}{
        opacity: 1;
    }

    ${mobile({ display: "flex", width: "100%", height: "460px" })}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: black;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw); 
    
    ${mobile({ 
        display: "flex", 
        flexDirection:"column", 
        height: "20vh", 
        width: "100%", 
        marginTop:"0px",
     })}
`;

const Slide = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f6f6f6;
    overflow: hidden;

    ${mobile({ display: "flex", height: "40vh", marginTop:"0px" })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 30px;
    margin: 20px;
    border-radius: none;
    border: solid 1px #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: absolute;

    ${mobile({ flex: "1" })}
`;

const Imagem = styled.img`
    height: 250px;
    width: 90%;
    align-items: center;
    justify-content: center;
    z-index: 1;
    overflow: hidden;

    ${mobile({ display: "flex", flexDirection: "column", width: "80%", height: "69%" })}
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display:flex;

    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-top: 150px;
    transition: all 0.5s ease;

    &:hover {
        background-color: black;
        color: white;
        transform: scale(1.1);
    }
`;


const Titulo = styled.h2`
    font-size: 20px;
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const Estrelas = styled.div`
    display: flex;
    aligm-items: center;
    justify-content: center;
    background-color: white;
`;

const Avaliacao = styled.p`
    font-size: 16px;
    font-weight: 400;
    align-items: center;
    justify-content: center;
    color: teal;
    z-index: 4;
`;

const Preco = styled.h2`
    font-size: 20px;
    margin: 10px;
    font-weight: 400;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const Buttom = styled.button`
    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    width: 250px;
    max-width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease;
    z-index: 5;

    &:hover {
        background-color: #8bb582;
        transform: scale(1.0);
    }
`;


const RelatedProducts = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };


    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <FiArrowLeft />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {relatedProducts.map(item => (
                    <Slide item={item.id} key={item.id}>
                        <InfoContainer >
                            <Imagem src={item.img}/>
                            <Titulo>{item.title}</Titulo>

                            <Estrelas>
                                <Rating /> 
                                <Avaliacao> ({item.rating}) Avaliações</Avaliacao>
                            </Estrelas>
                            <Preco>{item.preco}</Preco>
                            <Buttom><FiShoppingCart/> COMPRAR</Buttom>
                        </InfoContainer>
                        <BotaoAcao>
                            <Icon>
                                <FiShoppingCart />
                            </Icon>
                            <Icon>
                                <FiHeart />
                            </Icon>
                            <Icon>
                                <FiSearch/>
                            </Icon>
                        </BotaoAcao>
                    </Slide>
                ))}
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <FiArrowRight />
            </Arrow>
        </Container>
    )
}

export default RelatedProducts