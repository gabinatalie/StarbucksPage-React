import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  padding: 5rem;
  justify-content: space-between;
  width: 100vw;
  height: 5vh;
  align-items: center;

  @media (max-width: 760px) {
    padding: 2.5rem;
  }
`;
const Logo = styled.img`
  width: 6vw;
  height: auto;
  margin-left: 1rem;

  @media (max-width: 760px) {
    margin-left: 0;
    width: 15vw;
    margin-top: 2rem;
  }
`;
const ListWrapper = styled.ul`
  display: flex;
  width: 30vw;
  height: 10vh;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 5rem;

  @media (max-width: 760px) {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
  }
`;
const ListIten = styled.li`
  list-style: none;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 36px;
  color: #1e3932;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 760px) {
      font-size: 1rem;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo src="/images/logo.png" alt="logomarca Starbucks" />
      <nav>
        <ListWrapper>
          <ListIten>
            <Link to="/">Home</Link>
          </ListIten>
          <ListIten>
            <Link to="/new">Novidades</Link>
          </ListIten>
          <ListIten>
            <Link to="/about">Sobre</Link>
          </ListIten>
        </ListWrapper>
      </nav>
    </StyledHeader>
  );
}
