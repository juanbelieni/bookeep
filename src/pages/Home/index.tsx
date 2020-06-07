import React from 'react';
import { AiOutlineBook, AiFillHeart, AiOutlineSearch } from 'react-icons/ai';

import { Container, Header, Main } from './styles';

const Home = () => (
  <Container>
    <Header>
      <div id="header-logo">
        <AiOutlineBook size={30} />
        <h1>Bookeep</h1>
      </div>
      <a id="header-link" href="/favorites">
        <span>Favorite books</span>
        <AiFillHeart size={25} />
      </a>
    </Header>
    <Main>
      <h2>A place to find and save your favorite books.</h2>
      <a href="/search" id="main-button">
        <span>
          <AiOutlineSearch size={30} />
        </span>
        <strong>Search a book</strong>
      </a>
    </Main>
  </Container>
);

export default Home;
