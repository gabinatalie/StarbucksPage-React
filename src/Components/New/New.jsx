import styled from "styled-components";
import Button from "../Button/Button";

const StyledSectionContainer = styled.section`
  background-color: #1e3932;
  width: 100vw;
  height: 100vh;
  display: flex;
  color: #ffffff;
  align-items: center;

  @media (max-width: 760px) {
    padding: 1rem;
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

const NewsInfoWrapper = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem;
  margin-bottom: 10rem;
  @media (max-width: 760px) {
    padding: 0.5rem;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const SpanNew = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 30px;
  @media (max-width: 760px) {
    font-size: 1rem;
  }
`;
const TitleNew = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 4rem;
  line-height: 95px;

  @media (max-width: 760px) {
    font-size: 2.5rem;
    width: 100vw;
    text-align: center;
  }
`;
const TextNew = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 36px;
  @media (max-width: 760px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;
const ImageContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;
  @media (max-width: 760px) {
    margin: -8rem;
  }
`;
const ImageNews = styled.img`
  @media (max-width: 760px) {
    width: 100vw;
  }
`;

export default function New() {
  return (
    <StyledSectionContainer>
      <NewsInfoWrapper>
        <SpanNew>preparação</SpanNew>
        <TitleNew>Níveis de torra</TitleNew>
        <TextNew>
          Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra
          Escura? Estas sãos as torras que fazem parte dos níveis de torra
          Starbucks®
        </TextNew>
        <Button />
      </NewsInfoWrapper>
      <ImageContainer>
        <ImageNews src="/images/news-img.png" alt="grão de café torrado" />
      </ImageContainer>
    </StyledSectionContainer>
  );
}
