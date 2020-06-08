import styled from 'styled-components';
import backgroundSVG from 'assets/background.svg';

export const Container = styled.div`
  background: url(${backgroundSVG}) no-repeat;
  background-size: 500px 500px;
  background-position: calc(100% - 40px) calc(100% - 40px);
  padding: 0 100px;
  height: 100vh;

  @media screen and (max-width: 1000px) {
    background: none;
  }

  @media screen and (max-width: 650px) {
    padding: 0 20px;
  }
`;

export const Header = styled.header`
  padding: 40px 0;

  display: flex;
  justify-content: space-between;

  color: ${(props) => props.theme.primary};

  #header-logo {
    display: flex;
    align-items: center;

    h1 {
      font-weight: 500;
      font-size: 23px;
      margin-left: 7px;
    }
  }

  #header-link {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.primary};
    text-decoration: none;

    span {
      margin-right: 10px;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;

export const Main = styled.main`
  margin-top: 150px;
  width: 50%;
  color: ${(props) => props.theme.primary};

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  h2 {
    font-size: 39px;
  }

  #main-button {
    width: 100%;
    max-width: 320px;
    height: 65px;
    background: ${(props) => props.theme.primary};
    border-radius: 8px;
    text-decoration: none;
    color: white;

    display: flex;
    align-items: center;

    margin-top: 40px;

    span {
      background: rgba(0, 0, 0, 0.08);
      width: 65px;
      height: 65px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    strong {
      flex: 1;
      text-align: center;
      font-size: 21px;
      font-weight: 500;
    }

    &:hover {
      background: #193958;
    }
  }
`;
