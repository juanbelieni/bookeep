import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 100px;
  height: 100vh;

  #loading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
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

export const SearchBar = styled.div`
  display: flex;
  align-items: center;

  background-color: #eee;
  border-radius: 8px;
  height: 40px;
  width: 100%;

  input {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    padding: 0 20px;
    font-size: 17px;
  }

  #search-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme.primary};
  }
`;

export const Volume = styled.div`
  display: flex;

  height: 180px;
  border-radius: 8px;
  background-color: #fff;
  margin: 30px 0;

  img {
    position: absolute;
    width: 120px;
    height: 180px;
    border-radius: 8px 0 0 8px;
    object-fit: cover;
  }

  .volume-info {
    padding: 10px 20px;
    margin-left: 120px;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    scrollbar-width: thin;

    .volume-header {
      display: flex;
      justify-content: space-between;
      color: ${(props) => props.theme.primary};
      width: 100%;

      h1 {
        font-size: 24px;
        font-weight: 500;
      }

      svg {
        cursor: pointer;
      }
    }

    h2 {
      font-weight: 400;
      font-size: 18px;
      color: #555;
    }

    p {
      font-size: 16px;
      color: #555;
      margin: 10px 0;
      text-align: justify;
    }
  }
`;
