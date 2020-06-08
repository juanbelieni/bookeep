import React from 'react';
import { AiFillHeart, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import { Container, Main } from './styles';

const Home = () => (
  <Container>
    <Header>
      <Link id="header-link" to="/favorite">
        <span>Favorite books</span>
        <AiFillHeart size={25} />
      </Link>
    </Header>
    <Main>
      <h2>A place to find and save your favorite books.</h2>
      <Link to="/search" id="main-button">
        <span>
          <AiOutlineSearch size={30} />
        </span>
        <strong>Search a book</strong>
      </Link>
    </Main>
  </Container>
);

export default Home;
