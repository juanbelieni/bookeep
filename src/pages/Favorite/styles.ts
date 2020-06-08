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

  h1 {
    color: ${(props) => props.theme.primary};
    font-weight: 500;
    font-size: 35px;
    margin: 10px 0;
  }

  @media screen and (max-width: 650px) {
    padding: 0 20px;
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
