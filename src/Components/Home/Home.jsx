import Button from "../Button/Button";
import styled from "styled-components";
import { useState } from "react";

const StyledMain = styled.main`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const WrapperSection = styled.section`
  height: 60vh;
  width: 50vw;
  margin-top: 10rem;
  margin-left: 5rem;
  color: #1e3932;
  @media (max-width: 760px) {
    width: 100vw;
    height: 85vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const SpanTitle = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 3rem;
  font-weight: 500;
  line-height: 78px;
  @media (max-width: 760px) {
    font-size: 1.5rem;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const SpanSubtitle = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  font-weight: 400;
  line-height: 96px;
  @media (max-width: 760px) {
    font-size: 1.5rem;
  }
`;
const TitleName = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 5rem;
  font-weight: 700;
  color: #037143;
  @media (max-width: 760px) {
    font-size: 2rem;
  }
`;

const HomeText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 36px;
  font-size: 1.5rem;
  @media (max-width: 760px) {
    font-size: 1rem;
    text-align: center;
  }
`;
const MainImg = styled.img`
  position: absolute;
  height: 60vh;
  right: 0;
  bottom: 1px;
  margin-bottom: -1rem;
  z-index: 1;
  margin-right: 1rem;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  @media (max-width: 760px) {
    display: none;
  }
`;
const Ellipse = styled.img`
  position: absolute;
  z-index: -1;
  right: 0;
  bottom: 0;
  margin-bottom: -25rem;
  margin-right: -35rem;
  width: 70vw;
  height: 100vh;
  background-color: ${(props) => props.color || "#037143"};
  border-radius: 50%;
  transform: rotate(${(props) => props.rotation}deg);
  transition: background-color 0.5s ease-in-out, transform 0.8s ease-in-out;
  @media (max-width: 760px) {
    display: none;
  }
`;
const FigureContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const ImageSelect = styled.img`
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const MainImageContainer = styled.div`
  @media (max-width: 760px) {
    height: 80vh;
    position: relative;
    z-index: -2;
    overflow: hidden;
  }
`;
export default function Home() {
  // Definindo estados iniciais para a imagem principal, cor da elipse, opacidade da imagem e rotação
  const [mainImage, setMainImage] = useState("/images/orange2x.png"); // Imagem principal exibida
  const [ellipseImage, setEllipseImage] = useState("#037143"); // Cor da elipse de fundo
  const [mainImageOpacity, setMainImageOpacity] = useState(1); // Opacidade da imagem principal
  const [rotation, setRotation] = useState(0); // Ângulo de rotação da elipse

  // Função para trocar a imagem e a cor com base na seleção do usuário
  const handleImageSelect = (color) => {
    // Reduz opacidade para criar efeito de transição
    setMainImageOpacity(0);

    // Espera 300ms antes de trocar a imagem e a cor da elipse
    setTimeout(() => {
      // Troca a imagem e a cor com base na cor selecionada
      switch (color) {
        case "red":
          setMainImage("/images/red2x.png"); // Imagem vermelha
          setEllipseImage("#97090C"); // Cor vermelha para a elipse
          break;
        case "yellow":
          setMainImage("/images/yellow2x.png"); // Imagem amarela
          setEllipseImage("#DECD13"); // Cor amarela para a elipse
          break;
        default:
          setMainImage("/images/orange2x.png"); // Imagem padrão (laranja)
          setEllipseImage("#037143"); // Cor padrão da elipse
          break;
      }

      // Adiciona 180° à rotação atual da elipse
      setRotation((prevRotation) => prevRotation + 180);

      // Restaura a opacidade para exibir a nova imagem suavemente
      setMainImageOpacity(1);
    }, 300);
  };

  return (
    <StyledMain>
      {/* Seção de informações principais */}
      <WrapperSection>
        <SpanTitle>Mais que Café</SpanTitle>
        <TitleContainer>
          <SpanSubtitle>Isso é</SpanSubtitle>
          <TitleName>Starbucks</TitleName>
        </TitleContainer>
        <HomeText>
          A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
          dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
          Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas
          quentes e frias, doces diferenciados e sanduíches.
        </HomeText>
        <Button /> {/* Botão de chamada para ação */}
      </WrapperSection>

      {/* Container da imagem principal e elementos visuais */}
      <MainImageContainer>
        {/* Imagem principal do Frapuccino */}
        <MainImg
          src={mainImage} // Fonte da imagem principal com base no estado atual
          alt="Starbucks Frapuccino"
          opacity={mainImageOpacity} // Controle de opacidade para transições suaves
        />

        {/* Elipse colorida que gira com base no estado de rotação */}
        <Ellipse color={ellipseImage} rotation={rotation} />

        {/* Container das imagens menores para seleção */}
        <FigureContainer>
          {/* Imagem laranja */}
          <ImageSelect
            src="/images/orange.png"
            alt="Starbucks Frapuccino"
            onClick={() => handleImageSelect("orange")} // Seleção laranja
          />
          {/* Imagem vermelha */}
          <ImageSelect
            src="/images/red.png"
            alt="Starbucks Frapuccino"
            onClick={() => handleImageSelect("red")} // Seleção vermelha
          />
          {/* Imagem amarela */}
          <ImageSelect
            src="/images/yellow.png"
            alt="Starbucks Frapuccino"
            onClick={() => handleImageSelect("yellow")} // Seleção amarela
          />
        </FigureContainer>
      </MainImageContainer>
    </StyledMain>
  );
}
